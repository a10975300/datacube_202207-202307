# from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.conf import settings
import xadmin
from npi.views import IssueCategorySelectView, PictureUploadView
from product.views import ProducInfoSync
from regioncase.views import IssueListView

urlpatterns = [
    #path('admin/', admin.site.urls),
    url(r'', include('ckeditor_uploader.urls')),
    url(r'^scpe/', xadmin.site.urls, name='scpe'),

    path(r'select/issueInteraction_symptom/', IssueCategorySelectView.as_view(), name='issueInteraction_symptom'),
    path(r'pictures_upload/', PictureUploadView.as_view(), name='pictures_upload'),
    path(r'syncpulsarinfo/', ProducInfoSync.as_view(), name='productinfosync'),

    path(r'scpe/regionalcase/', IssueListView.as_view(), name='issue_list'),
    path(r'region/cases/', IssueListView.as_view(), name='issue_list'),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) \
              + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

