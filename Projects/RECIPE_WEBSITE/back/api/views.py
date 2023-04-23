# from django.shortcuts import render
# from .models import Recipe

# def recipe_list(request):
#     recipes = Recipe.objects.all()
#     return render(request, 'recipe_list.html', {'recipes': recipes})

from django.http import JsonResponse
from .models import Recipe

def recipe_list(request):
    recipes = Recipe.objects.all()
    data = {
        'recipes': list(recipes.values())
    }
    return JsonResponse(data)

