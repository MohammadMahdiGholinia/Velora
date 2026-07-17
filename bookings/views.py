from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.shortcuts import get_object_or_404

from tours.models import Tour
from .models import Booking
from .serializers import BookingSerializer

class BookingAPI(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, tour_id):
        tour = get_object_or_404(Tour, id=tour_id)

        serializer = BookingSerializer(data=request.data, context={'tour': tour, 'request': request})

        if serializer.is_valid():
            booking = serializer.save()
            return Response(BookingSerializer(booking).data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

