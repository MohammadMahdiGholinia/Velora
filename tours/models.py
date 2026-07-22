from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator



class HeroSection(models.Model):
    image = models.URLField(max_length=500)
    title = models.CharField(max_length=100, null=True, blank=True)
    subtitle = models.CharField(max_length=200, null=True, blank=True)

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



class Category(models.Model):
    title = models.CharField(max_length=50)
    image = models.URLField(max_length=500)

    def __str__(self):
        return self.title

    

class Tour(models.Model):
    class Badge(models.TextChoices):
        FEATURED = 'featured', 'ویژه',
        POPULAR = 'popular', 'محبوب',
        ECONOMY = 'economy', 'اقتصادی'

    origin = models.ForeignKey(City, on_delete=models.CASCADE , related_name='origin_tours') #on_delete=models.PROTECT
    destination = models.ForeignKey(City, on_delete=models.CASCADE , related_name='destination_tours') #on_delete=models.PROTECT
    subtitle = models.CharField(max_length=100, null=True, blank=True)
    description = models.TextField()
    badge = models.CharField(max_length=30, choices=Badge.choices , blank=True , null=True)
    # cover = models.ImageField(upload_to = 'tours/cover')
    cover = models.URLField(max_length=500) #for deploy
    start_date = models.DateField()
    duration = models.PositiveIntegerField()
    price = models.PositiveIntegerField()
    capacity = models.PositiveIntegerField()
    category = models.ForeignKey(Category, on_delete=models.PROTECT, null=True, blank=True)
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    @property
    def remaining_capacity(self):
        booked = self.bookings.aggregate(total=models.Sum('passengers'))['total'] or 0
        return self.capacity - booked


class TourImage (models.Model):
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE, related_name='images')
    # images = models.ImageField(upload_to='tours/gallery')
    image = models.URLField(max_length=500) #for deploy

class HotelImage(models.Model):
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE)
    image = models.URLField( max_length=200)


    
class PopularDestination(models.Model):
    city = models.OneToOneField(City, on_delete=models.CASCADE, related_name='popular_destination')
    images = models.URLField(max_length=500)

    def __str__(self):
        return self.city.name


