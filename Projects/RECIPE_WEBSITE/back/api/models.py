from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class Recipe(models.Model):
    name = models.CharField(max_length=77)
    description = models.TextField()
    ingredients = ArrayField(models.CharField(max_length=100), default=list)
    national = models.CharField(max_length=22)
    category = models.CharField(max_length=22)
    image = models.ImageField
    ischoosen = models.BooleanField
    islike = models.BooleanField
    def __str__(self):
        return f'{self.name}'