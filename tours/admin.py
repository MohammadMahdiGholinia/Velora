from django.contrib import admin
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

    prepopulated_fields = {
        'slug': ('title',)
    }

    ordering = ('-id',)