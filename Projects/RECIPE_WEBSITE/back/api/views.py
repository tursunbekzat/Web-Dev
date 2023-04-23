from django.shortcuts import render
from django.http.response import JsonResponse
from .models import Recipe

# Create your views here.


def recipe_list():
    recipes = Recipe.objects.all()
    recipes_json = [r.to_json() for r in recipes]
    return JsonResponse(recipes_json, safe=False, json_dumps_params={'indent': 2})


def recipe_detail(request, recipe_id):
    try:
        recipe = Recipe.objects.get(pk=recipe_id)
    except Recipe.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400, json_dumps_params={'indent': 2})
    return JsonResponse(recipe.to_json(), json_dumps_params={'indent': 2})
