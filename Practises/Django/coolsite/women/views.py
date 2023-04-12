from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseNotFound, Http404

from .models import *

menu = ['About', 'Add State', 'Connect With Us', 'Sign In']
def index(request): #HttpRequest
    # return HttpResponse("Page Women")
    posts = Women.objects.all()
    return render(request, 'women/index.html', {'posts' : posts, 'menu' : menu, 'title' : 'Main Page'})
def about(request):
    return render(request, 'women/about.html', {'menu' : menu, 'title' : 'About Site'})
def categories(request, catid):
    if(request.GET):
        print(request.GET)
    return HttpResponse(f"<h1>States for pages</h1><p>{catid}</p>")
def archive(request, year):
    if(int(year)>2023):
#         raise Http404
#         return redirect('/')
        return redirect('home', permanent=True)
    return HttpResponse(f"<h1>Archive year</h1><p>{year}</p>")

def pageNotFound(request, exception):
    return HttpResponseNotFound("<h1>Page Not Found</h1>")
