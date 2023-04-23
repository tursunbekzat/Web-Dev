from django.db import models

class Recipe(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    ingredients = models.JSONField()
    steps = models.TextField()
    national = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    image = models.URLField()
    ischoosen = models.BooleanField(default=False)
    islike = models.BooleanField(default=False)

    def __str__(self):
        return self.name
