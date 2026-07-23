from rest_framework import serializers
from .models import Booking


class BookingSerializer(serializers.ModelSerializer):
    name = serializers.CharField(required=True)
    national_code = serializers.CharField(required=True)
    phone = serializers.CharField(required=True)
    email = serializers.EmailField(required=True)
    passengers = serializers.IntegerField(required=True)

    class Meta:
        model = Booking
        fields = [
            'name',
            'national_code',
            'phone',
            'email',
            'passengers'
        ]

    def create(self, validated_data):

        user = self.context['request'].user
        tour = self.context['tour']

        passengers = validated_data['passengers']

        booking = Booking.objects.create(
            user=user,
            tour=tour,
            total_price=tour.price * passengers,
            **validated_data
        )

        return booking