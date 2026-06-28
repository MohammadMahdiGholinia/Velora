from django.db import models
from django_jalali.db import models as jmodels
from django.core.validators import MinValueValidator, MaxValueValidator



# Create your models here.

class Location(models.Model):
    name = models.CharField(max_length=30)
    is_origin = models.BooleanField(default=False)
    is_destination = models.BooleanField(default=False)

    def __str__(self):
        return self.name
    

class Tour(models.Model):
    TOUR_TYPE=[
        ('internal' , 'داخلی') ,
        ('external' , 'خارجی')
    ]
    title = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50)
    description = models.TextField()
    origin = models.ForeignKey(Location, on_delete=models.CASCADE , related_name='origin')
    destination = models.ForeignKey(Location, on_delete=models.CASCADE , related_name='destination')
    # cover = models.ImageField(upload_to = 'tours/cover')
    cover = models.URLField(max_length=500)
    start_date = jmodels.jDateField()
    end_date = jmodels.jDateField()
    duration = models.PositiveIntegerField()
    price = models.PositiveIntegerField()
    capacity = models.PositiveIntegerField()
    hotel = models.CharField(max_length=50)
    hotel_stars = models.PositiveSmallIntegerField(validators=[MaxValueValidator(5),],default=3)
    tour_type = models.CharField(max_length=10, choices=TOUR_TYPE , null=True , blank= True)
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title
    

class TourImage (models.Model):
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE, related_name='images')
    # images = models.ImageField(upload_to='tours/gallery')
    images = models.URLField(max_length=500)

    def __str__(self):
        return f'گالری {self.tour.title}'
    
