from rest_framework import serializers
from .models import Booking

class BookingSerializer(serializers.ModelSerializer):
    user_full_name = serializers.SerializerMethodField()

    class Meta:
        model = Booking
        fields = ['user_full_name', 'tour', 'passengers', 'total_price', 'status']
        read_only_fields = ['id', 'user','total_price', 'created_at']

    def get_user_full_name(self, obj):
        return f'{obj.user.first_name} {obj.user.last_name}'

    def validate(self, attrs):
        tour = self.context['tour']
        passengers = attrs.get('passengers')

        if not tour.is_active:
            raise serializers.ValidationError("این تور فعال نیست و نمی‌توان رزرو انجام داد.")
        
        if passengers > tour.capacity:
            raise serializers.ValidationError("ظرفیت تور کافی نیست. لطفاً تعداد مسافران را کاهش دهید.")

        return attrs

    def create(self, validated_data):
        tour = self.context['tour']
        user = self.context['request'].user
        passengers = validated_data.get('passengers')
        total_price = tour.price * passengers

        booking = Booking.objects.create(
            user=user,
            tour=tour,
            passengers=passengers,
            total_price=total_price
        )
        return booking
        
        