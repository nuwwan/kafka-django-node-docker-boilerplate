from rest_framework.urls import path
from .views import StudentDetail, StudentList

urlpatterns = [
    path("students/", StudentList.as_view()),
    path("student/<int:pk>/", StudentDetail.as_view()),
]
