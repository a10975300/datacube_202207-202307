from django import forms
from .models import Issue

class IssueModelForm(forms.ModelForm):

    class Meta:
        model = Issue
        # fields = []
        exclude = ['platformName', 'issue_interaction', 'issue_symptom', 'cratedate']