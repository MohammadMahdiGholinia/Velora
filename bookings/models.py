from django.db import models
from django.conf import settings
from tours.models import Tour
from django.core.validators import MinValueValidator

# Create your models here.

class Booking(models.Model):
    class Status(models.TextChoices):
        PENDING = 'PENDING', 'در انتظار پرداخت'
        CONFIRMED = 'CONFIRMED', 'تایید شده'
        CANCELLED = 'CANCELLED', 'لغو شده'

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='bookings') #on_delete=models.PROTECT
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE, related_name='bookings') #on_delete=models.PROTECT
    passengers = models.PositiveIntegerField(validators=[MinValueValidator(1)] )
    total_price = models.DecimalField(max_digits=15, decimal_places=0)
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.PENDING)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Booking by {self.user} for {self.tour}"

    

