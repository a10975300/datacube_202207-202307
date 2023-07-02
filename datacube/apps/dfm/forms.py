from django import forms
from .models import Dfm_Review_Result

class DfmIssueModelForm(forms.ModelForm):

    class Meta:
        model = Dfm_Review_Result
        # fields = []
        exclude = ['dfm_review_item_desc', 'dfm_product', 'create_date']