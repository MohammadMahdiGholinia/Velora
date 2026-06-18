from django.shortcuts import render
from django.http import HttpResponse
from .models import Tour

# Create your views here.

def Tour_list(request):
    tours = Tour.objects.filter(is_active=True)

    return render(request , 'tour_list.html' , {'tours':tours})