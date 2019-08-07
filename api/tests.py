from django.core.urlresolvers import reverse

from rest_framework.test import APITestCase
from rest_framework.views import status

from .models import MenuItem


class MenuViewTest(APITestCase):
    API_URL = reverse('menu')
    TEST_DATA = {
        'names' : ['name1', 'name2'],
        'prices' : [3.0, 4.0],
    }
    TOTAL_ENTRIES = 2**2
    
    def setUp(self):
        super().setUp()
        self._insert_test_data()

    def _insert_test_data(self):
        for name in self.TEST_DATA['names']:
            for price in self.TEST_DATA['prices']:
                MenuItem.objects.create(
                    name=name,
                    price=price,
                )
    
    def test_get_menu(self):
        response = self.client.get(self.API_URL)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), self.TOTAL_ENTRIES)

    def test_search(self):
        data = {
            'search': 'name1'
        }
        response = self.client.get(self.API_URL, data)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), self.TOTAL_ENTRIES / 2)
        for element in response.data:
            self.assertEqual(element['name'], 'name1')

    def test_sorting(self):
        data = {
            'ordering': '+name,-price'
        }
        response = self.client.get(self.API_URL, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), self.TOTAL_ENTRIES)

        expected = {
            'name': self.TEST_DATA['names'][0],
            'price': self.TEST_DATA['prices'][-1],
        }
        self.assertEqual(response.data[0]['name'], expected['name']) 
        self.assertEqual(response.data[0]['price'], expected['price']) 