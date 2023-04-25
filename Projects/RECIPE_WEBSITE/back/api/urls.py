from django.urls import path
from .views import *

urlpatterns = [
    path('recipes/', recipe_list),
    path('recipes/<int:pk>/like', RecipeLike.as_view(), name='recipe-like'),
    path('recipes/<int:pk>/ischoosen', RecipeChoose.as_view(), name='recipe-choose'),
]