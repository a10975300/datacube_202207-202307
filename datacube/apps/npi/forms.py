from django import forms
from .models import Issue,DesktopIssue

class IssueModelForm(forms.ModelForm):

    class Meta:
        model = Issue
        # fields = []
        exclude = ['platformName', 'issue_interaction', 'issue_symptom', 'cratedate']

class DesktopIssueModelForm(forms.ModelForm):

    class Meta:
        model = DesktopIssue
        # fields = []
        exclude = ['platformName', 'issue_interaction', 'issue_symptom', 'cratedate']