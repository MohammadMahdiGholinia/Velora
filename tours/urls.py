from django.urls import path
from . import views


urlpatterns = [
    path('' , views.tour_list, name='Home'),
    path('api/home/hero/', views.HomeHeroSectionAPI.as_view(), name='home_herosection'),
    path('api/tours/special/', views.SpecialTourListAPI.as_view(),  name='tours_api'),
    path('api/destinations/', views.DestinationListAPI.as_view(),     name='destination_list'),
    path('api/search/hero/', views.SearchHeroSectionAPI.as_view(),      name='hero_section_images'),
    path('api/search/result/', views.SearchAPI.as_view(),           name='search_result'),
    path('api/tours/<int:pk>/', views.TourDetailAPI.as_view(),       name='tour_detail'),

]

