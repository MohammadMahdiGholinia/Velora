from django.urls import path
from . import views


urlpatterns = [
    path('' , views.tour_list, name='Home'),
    path('tour/<int:id>/<slug:slug>' , views.tour_detail , name = 'tour_detail'),
    path('search/', views.tour_search, name='tour_search'),









    
    path('api/tours/special/', views.SpecialTourListAPI.as_view(), name='tours_api'),


    # path('autocomplete/', views.location_autocomplete, name='location_autocomplete'),

]

