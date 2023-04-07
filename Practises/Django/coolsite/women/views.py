from django.shortcuts import render
from django.http import HttpResponse

def index(request): #HttpRequest
    return HttpResponse("Page")