from rest_framework import serializers
from .models import Tour


class SpecialTourSerializer(serializers.ModelSerializer):
    country     = serializers.CharField(source='destination.country.name')
    city        = serializers.CharField(source='destination.name')
    startDate   = serializers.DateField(source='start_date')
    duration    = serializers.IntegerField()
    badge       = serializers.CharField(source='get_badge_display')
    price       = serializers.IntegerField()


    class Meta:
        model = Tour
        fields = ['cover', 'country', 'city', 'startDate', 'duration','badge', 'price']



class HeroSectionSerializer(serializers.Serializer):
    destination = serializers.CharField(allow_null = True)
    heroImages  = serializers.ListField(child=serializers.URLField())



class SearchSerializer(serializers.ModelSerializer):
    country    = serializers.CharField(source='destination.country.name')
    city       = serializers.CharField(source='destination.name')
    startDate  = serializers.DateField(source='start_date')
    duration   = serializers.IntegerField()
    badge      = serializers.CharField(source='get_badge_display')
    price      = serializers.IntegerField()

    
    class Meta:
        model = Tour
        fields = ['cover', 'country', 'city', 'startDate', 'duration','badge', 'price']


