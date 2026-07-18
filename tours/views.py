from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse , JsonResponse
from django.db.models import Q, F
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *
from .services import *

# Create your views here.

def tour_list(request):
    return render(request, 'tours/home.html')


class HomeHeroSectionAPI(APIView):
    def get(self, request):
        hero_images = HeroSection.objects.all()

        serializer = HomeHeroSerializer(hero_images, many=True)

        return Response(serializer.data)

    

class SpecialTourListAPI(APIView):
    def get(self, request):
        tours       = Tour.objects.filter(is_active=True , is_featured=True)
        serializer  = TourSerializer(tours ,many=True)

        return Response(serializer.data)


class DestinationListAPI(APIView):
    def get(self, request):
        external_tours = Tour.objects.filter(is_active=True, tour_type='external')
        external_destinations = external_tours.values(dest_id=F('destination__country__id'), name=F('destination__country__name')).distinct()

        internal_tours = Tour.objects.filter(is_active=True, tour_type='internal')
        internal_destinations = internal_tours.values(dest_id=F('destination__id'), name=F('destination__name')).distinct()

        one_day_tours = Tour.objects.filter(is_active=True, tour_type='one_day')
        one_day_destinations = one_day_tours.values(dest_id=F('destination__id'), name=F('destination__name')).distinct()

        icognito_tours = Tour.objects.filter(is_active=True, tour_type='icognito')
        icognito_destinations = icognito_tours.values(dest_id=F('destination__id'), name=F('destination__name')).distinct()

        data = {
            "national": list(external_destinations),
            "internal": list(internal_destinations),
            "one_day" : list(one_day_destinations),
            "icognito" : list(icognito_destinations)
        }
        return Response(data)
    

class TourListAPI(APIView):
    def get(self, request):
        destination = request.GET.get('destination')
        tours = Tour.objects.filter(is_active=True, destination__country__name=destination)

        serializer = TourSerializer(tours, many=True)

        return Response(serializer.data)


class SearchHeroSectionAPI(APIView):
    def get(self , request):
        destination = request.GET.get('destination')
        images      = hero_section(destination)

        data = {
            "destination" : destination,
            "heroImages"  : images,
        }

        serializer = SearchHeroSectionSerializer(data)

        return Response(serializer.data)


class SearchAPI(APIView):
    def get(self, request):
        tours       =Tour.objects.filter(is_active=True)
        origin      = request.GET.get('origin')
        destination = request.GET.get('destination')
        month       = request.GET.get('month')
        sort        = request.GET.get('sort')

        result, count = search_result(origin, destination, month, sort)
        serializer    = SearchSerializer(result, many=True)

        data = {
            "count" : count,
            "result"  : serializer.data,
        }

        return Response(data)


        
class TourDetailAPI(APIView):
    def get(self, request, pk):
        tour = get_object_or_404(Tour, pk=pk, is_active=True)

        serializer = TourDetailSerializer(tour)

        return Response(serializer.data)

    

        