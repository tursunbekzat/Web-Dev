from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import *

urlpatterns = [
    path('profile/', ProfileView.as_view()),
    path('api/auth/', CustomAuthToken.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)