from django import forms
from .models import Dfa_Review_Result

class DfaModelForm(forms.ModelForm):

    class Meta:
        model = Dfa_Review_Result
        # fields = []
        exclude = ['dfa_product', 'dfa_crate_date']

