from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator



class HeroSection(models.Model):
    images = models.URLField(max_length=500)

    def __str__(self):
        return self.images
    


class Country(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    

class City(models.Model):
    name = models.CharField(max_length=50)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    

class Tour(models.Model):
    class Badge(models.TextChoices):
        FEATURED = 'featured', 'ویژه',
        POPULAR = 'popular', 'محبوب',
        ECONOMY = 'economy', 'اقتصادی'

    TOUR_TYPE=[
        ('internal' , 'داخلی') ,
        ('external' , 'خارجی'),
        ('one_day' , 'یک روزه'),
        ('icognito' , 'ناشناس'),
    ]
    
    origin = models.ForeignKey(City, on_delete=models.CASCADE , related_name='origin') #on_delete=models.PROTECT
    destination = models.ForeignKey(City, on_delete=models.CASCADE , related_name='destination') #on_delete=models.PROTECT
    subtitle = models.CharField(max_length=100, null=True, blank=True)
    description = models.TextField()
    badge = models.CharField(choices=Badge.choices , blank=True , null=True)
    # cover = models.ImageField(upload_to = 'tours/cover')
    cover = models.URLField(max_length=500) #for deploy
    start_date = models.DateField()
    duration = models.PositiveIntegerField()
    price = models.PositiveIntegerField()
    capacity = models.PositiveIntegerField()
    tour_type = models.CharField(max_length=10, choices=TOUR_TYPE , null=True , blank= True)
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    @property
    def remaining_capacity(self):
        booked = self.bookings.aggregate(total=models.Sum('passengers'))['total'] or 0
        return self.capacity - booked


class TourImage (models.Model):
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE, related_name='images')
    # images = models.ImageField(upload_to='tours/gallery')
    images = models.URLField(max_length=500) #for deploy


    
