
from django.http import JsonResponse
from .models import Recipe

# def recipe_list(request):
#     recipes = Recipe.objects.all()
#     return render(request, 'recipe_list.html', {'recipes': recipes})


# def recipe_list(request):
#     recipes = Recipe.objects.all()
#     data = {
#         'recipes': list(recipes.values())
#     }
#     return JsonResponse(data)

def recipe_list(request):
    recipes = Recipe.objects.all()
    data = [{"id": recipe.id, "name": recipe.name, "description": recipe.description, "ingredients": recipe.ingredients,
             "steps": recipe.steps, "national": recipe.national, "category": recipe.category, "image": recipe.image,
             "ischoosen": recipe.ischoosen, "islike": recipe.islike} for recipe in recipes]
    return JsonResponse(data, safe=False)