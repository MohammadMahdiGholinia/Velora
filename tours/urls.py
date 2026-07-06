from django.urls import path
from . import views


urlpatterns = [
    path('' , views.tour_list, name='Home'),
    path('api/tours/special/', views.SpecialTourListAPI.as_view(),  name='tours_api'),
    path('api/search/hero/', views.HeroSectionAPI.as_view(),      name='hero_section_images'),
    path('api/search/result/', views.SearchAPI.as_view(),           name='search_result'),
    path('api/tours/<int:pk>/', views.TourDetailAPI.as_view(),       name='tour_detail'),

    # one path for national or internal tours
    
]

