from django.db import models


class MenuItem(models.Model):
    name = models.CharField(max_length=256)
    price = models.FloatField()

    def __str__(self):
        return self.name

