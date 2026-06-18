from django.db import models
from django_jalali.db import models as jmodels


# Create your models here.

class Location(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name
    

class Tour(models.Model):
    TOUR_TYPE=[
        ('internal' , 'Internal') ,
        ('external' , 'external')
    ]
    title = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50)
    descripton = models.TextField()
    origin = models.ForeignKey(Location, on_delete=models.CASCADE , related_name='origin')
    destination = models.ForeignKey(Location, on_delete=models.CASCADE , related_name='destination')
    cover = models.ImageField(upload_to = 'tours/cover')
    start_date = jmodels.jDateField()
    end_date = jmodels.jDateField()
    duration = models.PositiveIntegerField()
    price = models.PositiveIntegerField()
    capacity = models.PositiveIntegerField()
    hotel = models.CharField(max_length=50)
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title
    



