from django.shortcuts import render
from django.views.generic.base import View
from .models import RegionCase

class IssueListView(View):
    def get(self, request, *args, **kwargs):
        issues = RegionCase.objects.all()
        context = {
            'issues': issues,
            'title': 'Region cases',
        }
        return render(request, 'xadmin/views/regional_issue.html', context)

    def my_custom_404_view(request, exception):
        return render(request, 'xadmin/404.html', status=404)