"""datacube URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.conf import settings
import xadmin
from npi.views import IssueCategorySelectView, PictureUploadView
from product.views import ProducInfoSync

urlpatterns = [
    #path('admin/', admin.site.urls),
    url(r'', include('ckeditor_uploader.urls')),
    url(r'^scpe/', xadmin.site.urls, name='scpe'),

    path(r'select/issueInteraction_symptom/', IssueCategorySelectView.as_view(), name='issueInteraction_symptom'),
    path(r'pictures_upload/', PictureUploadView.as_view(), name='pictures_upload'),
    path(r'syncpulsarinfo/', ProducInfoSync.as_view(), name='productinfosync'),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) \
              + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

