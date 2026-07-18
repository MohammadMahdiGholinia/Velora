from django.contrib import admin 
from .models import  Tour , TourImage , City , Country, HeroSection
# Register your models here.


@admin.register(HeroSection)
class HeroSectionAdmin(admin.ModelAdmin):
    pass



@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    list_display = ('name' , )
    search_fields = ('name' , )


@admin.register(City)
class CityAdmin(admin.ModelAdmin):
    list_display = ('name' , )
    search_fields = ('name' , )


class TourImageInline(admin.TabularInline):
    model = TourImage
    extra = 3


@admin.register(Tour)
class TourAdmin(admin.ModelAdmin):
    inlines = [TourImageInline]
    list_display = (
        'origin',
        'destination',
        'price',
        'badge',
        'capacity',
        'tour_type',
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
        'slug',
    )

    ordering = ('-id',)

