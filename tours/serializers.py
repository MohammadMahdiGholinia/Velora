from rest_framework import serializers
from .models import Tour, TourImage, HeroSection, PopularDestination, Category
from .services import get_destinations

class HomeHeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroSection
        fields = ['images', 'title', 'subtitle']



class TourSerializer(serializers.ModelSerializer):
    country     = serializers.CharField(source='destination.country.name')
    city        = serializers.CharField(source='destination.name')
    startDate   = serializers.DateField(source='start_date')
    duration    = serializers.IntegerField()
    badge       = serializers.CharField(source='get_badge_display')
    price       = serializers.IntegerField()
    remaining_capacity = serializers.IntegerField()


    class Meta:
        model  = Tour
        fields = ['id', 'cover', 'country', 'city', 'startDate', 'duration','badge', 'price', 'remaining_capacity']

class DestinationsSerializer(serializers.ModelSerializer):
    options = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ['id', 'title', 'image', 'options']

    def get_options(self, obj):
        if obj.title == "خارجی":
            return get_destinations(obj, country=True)

        return get_destinations(obj, country=False)
        

class PopularDestinationSerializer(serializers.ModelSerializer):
    city = serializers.CharField(source='city.name')
    tour_count = serializers.IntegerField()

    class Meta:
        model = PopularDestination
        fields = ['city', 'images','tour_count']

class SearchHeroSectionSerializer(serializers.Serializer):
    destination = serializers.CharField(allow_null = True)
    heroImages  = serializers.ListField(child=serializers.URLField())



class SearchSerializer(serializers.ModelSerializer):
    country    = serializers.CharField(source='destination.country.name')
    city       = serializers.CharField(source='destination.name')
    startDate  = serializers.DateField(source='start_date')
    duration   = serializers.IntegerField()
    badge      = serializers.CharField(source='get_badge_display')
    price      = serializers.IntegerField()
    remaining_capacity = serializers.IntegerField()

    
    class Meta:
        model  = Tour
        fields = ['id', 'cover', 'country', 'city', 'startDate', 'duration','badge', 'price', 'remaining_capacity']


class TouImageSerializer(serializers.ModelSerializer):

    class Meta:
        model  = TourImage
        fields = ['images']


class TourDetailSerializer(serializers.ModelSerializer):
    images      = TouImageSerializer(many=True, read_only=True)
    country     = serializers.CharField(source='destination.country.name')
    city        = serializers.CharField(source='destination.name')
    remaining_capacity = serializers.IntegerField()

    class Meta:
        model  = Tour
        fields = ['id', 'country', 'city', 'start_date', 'duration', 'badge', 'price', 'description', 'remaining_capacity', 'images']

