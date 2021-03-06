from rest_framework import generics, filters

from .models import MenuItem
from .serializers import MenuItemSerializer


class MenuView(generics.ListAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter,]
    search_fields = ['name',]
    ordering_fields = ['name', 'price']
