from .models import Tour , TourImage
from django.db.models import Q

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



def search_result(origin, destination,  month):
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

    count = tours.count()

    return tours, count
    