from django.urls import path
from .views import *

urlpatterns = [
    path('recipes/', recipe_list),
]
