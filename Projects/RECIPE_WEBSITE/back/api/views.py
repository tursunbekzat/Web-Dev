from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Recipe
from django.http import JsonResponse

def recipe_list(request):
    recipes = Recipe.objects.all()
    data = [{"id": recipe.id, "name": recipe.name, "description": recipe.description, "ingredients": recipe.ingredients,
             "steps": recipe.steps, "national": recipe.national, "category": recipe.category, "image": recipe.image,
             "ischoosen": recipe.ischoosen, "islike": recipe.islike} for recipe in recipes]
    return JsonResponse(data, safe=False)




#
# class RecipeLike(APIView):
#     def put(self, request, pk):
#         recipe = Recipe.objects.get(pk=pk)
#         recipe.islike = request.data['islike']
#         recipe.save()
#         return Response(status=status.HTTP_200_OK)
#
# class RecipeChoose(APIView):
#     def put(self, request, pk):
#         recipe = Recipe.objects.get(pk=pk)
#         recipe.ischoosen = request.data['ischoosen']
#         recipe.save()
#         return Response(status=status.HTTP_200_OK)