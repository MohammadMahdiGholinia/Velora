from django.contrib import admin 
from .models import *
# Register your models here.


@admin.register(HeroSection)
class HeroSectionAdmin(admin.ModelAdmin):
    list_display = ('title', 'image')
    search_fields = ('title', 'subtitle')



@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    list_display = ('name' , )
    search_fields = ('name' , )


@admin.register(City)
class CityAdmin(admin.ModelAdmin):
    list_display = ('name', 'country')
    search_fields = ('name', 'country')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title', "image" )
    search_fields = ("title",)

class TourImageInline(admin.TabularInline):
    model = TourImage
    extra = 3

class HotelImageInline(admin.TabularInline):
    model = HotelImage
    extra = 3


@admin.register(Tour)
class TourAdmin(admin.ModelAdmin):
    inlines = [TourImageInline, HotelImageInline]
    list_display = (
        'origin',
        'destination',
        'price',
        'badge',
        'capacity',
        'is_featured',
        'is_active',
    )

    list_filter = (
        'is_featured',
        'is_active',
        'destination',
    )

    search_fields = (
        'description',
        'origin__name',
        'destination__name',
    )

    ordering = ('-id',)


@admin.register(PopularDestination)
class PopularDestinationAdmin(admin.ModelAdmin):
    list_display = ('city', 'images')
    search_fields = ('city__name',)