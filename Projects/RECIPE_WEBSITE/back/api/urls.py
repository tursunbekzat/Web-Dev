from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from .views import *

urlpatterns = [
    path('recipes/', recipe_list),
    # path('recipes/<int:pk>/like', RecipeLike.as_view(), name='recipe-like'),
    # path('recipes/<int:pk>/ischoosen', RecipeChoose.as_view(), name='recipe-choose'),
    # path('login/', name='login'),
    # path('api/token/refresh/', TokenVerifyView.as_view(), name='token_verify'),
    # path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

urlpatterns = format_suffix_patterns(urlpatterns)