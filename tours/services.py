from .models import Tour , TourImage
from django.db.models import Q, F

def hero_section(destination=None):
    tours = Tour.objects.filter(is_active=True)

    if destination:
        tours = tours.filter(
            Q(destination__name__icontains=destination) |
            Q(destination__country__name__icontains=destination)
                    )
    else:
        tours = tours.filter(is_featured=True)


    images = TourImage.objects.filter(tour__in=tours).values_list("images" , flat=True)[:5]
    return list(images)



def search_result(origin, destination,  month, sort):
    if not origin and not destination and not month:
        return Tour.objects.none() , 0

    tours = Tour.objects.filter(is_active=True)

    if origin:
        tours = tours.filter(origin__name__icontains = origin)

    if destination:
        tours = tours.filter(
            Q(destination__name__icontains=destination) |
            Q(destination__country__name__icontains=destination)
                    )

    if month:
        tours = tours.filter(start_date__month = month)

    elif sort == "cheap":
        tours = tours.order_by('price')

    elif sort == "expensive":
        tours = tours.order_by('-price')

    elif sort == "nearest":
        tours = tours.order_by('start_date')

    elif sort == "longest":
        tours = tours.order_by('-duration')

    elif sort == "shortest":
        tours = tours.order_by('duration')
    
    elif sort == "default":
        tours = tours.order_by('start_date')

    count = tours.count()

    return tours, count
    


def get_destinations(tour_type, country=False):
    tours = Tour.objects.filter(is_active=True, tour_type=tour_type)

    if country:
        destinations = tours.values_list('destination__country__name', flat=True).distinct()
    else:
        destinations = tours.values_list('destination__name', flat=True).distinct()

    return destinations
