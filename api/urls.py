from django.conf.urls import url
from .views import MenuView


urlpatterns = [
    url('menu/', MenuView.as_view(), name="menu"),
]