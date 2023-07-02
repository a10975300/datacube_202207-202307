from django import forms
from .models import ICs

class ICModelForm(forms.ModelForm):

    class Meta:
        model = ICs
        exclude = ['ic_cratedate']
