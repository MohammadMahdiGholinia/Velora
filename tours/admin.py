from django.contrib import admin
from django_jalali.admin.filters import JDateFieldListFilter
from django_jalali.admin.widgets import AdminjDateWidget 
from django_jalali.db import models as jmodels  
import django_jalali.admin as jadmin
from .models import  Tour , TourImage , City , Country
# Register your models here.



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
        'title',
        'origin',
        'destination',
        'price',
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
        'title',
        'description',
        'hotel',
        'slug',
    )
    
    formfield_overrides = {
        jmodels.jDateField: {'widget': AdminjDateWidget},
    }

    prepopulated_fields = {
        'slug': ('title',)
    }

    ordering = ('-id',)

