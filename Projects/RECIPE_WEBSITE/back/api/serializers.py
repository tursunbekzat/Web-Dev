from rest_framework import serializers
from . import models

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Recipe
        fields = ['id', 'name', 'description', 'ingredients', 'steps', 'national', 'category', 'image', 'ischoosen', 'islike']