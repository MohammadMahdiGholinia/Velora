from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse , JsonResponse
from django.db.models import Q
from .models import Tour

# Create your views here.

def tour_list(request):
    return render(request, 'tours/home.html')


def tour_detail(request, id, slug):
    tour = get_object_or_404(Tour, id=id, slug=slug)
    images = tour.images.all()
    internal_tours = Tour.objects.filter(is_active=True, tour_type='internal')[:4]
    external_tours = Tour.objects.filter(is_active=True, tour_type='external')[:4]

    return render(request, 'parent/tour_detail.html', {
        'tour': tour,
        'images': images,
        'internal_tours': internal_tours,
        'external_tours': external_tours,
    })

def tour_search(request):
    tours = Tour.objects.filter(is_active=True)

    origin = request.GET.get('origin')
    destination = request.GET.get('destination')
    month = request.GET.get('month')

    if origin:
        tours = tours.filter(origin_id = origin)

    if destination:
        tours = tours.filter(destination__name__icontains=destination)

    if month:
        tours = tours.filter(start_date__month = month)

    return render(request, 'tours/hero-section.html' , {'tours':tours , 
                                    'is_search' : True})

    

def sp_tours_api(request):
    tours = Tour.objects.filter(is_active=True, is_featured=True)

    data = []

    for tour in tours :
        data.append({
            'cover':tour.cover,
            'title':tour.title,
            'startDate': tour.start_date.strftime("%Y-%m-%d") if tour.start_date else None,
            'endDate': tour.end_date.strftime("%Y-%m-%d") if tour.end_date else None,
            'duration':tour.duration,
            'price':tour.price,

        })

    return JsonResponse(data , safe=False)


