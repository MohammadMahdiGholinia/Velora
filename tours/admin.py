from django.contrib import admin
from django_jalali.admin.filters import JDateFieldListFilter
from django_jalali.admin.widgets import AdminjDateWidget  # ← تغییر کرد
from django_jalali.db import models as jmodels  
import django_jalali.admin as jadmin
from .models import Location , Tour
# Register your models here.


@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = ('name' , )
    search_fields = ('name' , )

@admin.register(Tour)
class TourAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'origin',
        'destination',
        'price',
        'capacity',
        'is_featured',
        'is_active',
    )

    list_filter = (
        'is_featured',
        'is_active',
        'origin',
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