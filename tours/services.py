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