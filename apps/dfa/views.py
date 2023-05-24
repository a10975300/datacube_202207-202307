from dfa.models import Dfa_Review_Result


# dashboard data
class DfaDashboardData:
    def get_dfa_dashbaord_data(self):
        from django.db.models import Max, Min, Sum, Count, Avg, Q

        dfa_issues = Dfa_Review_Result.objects.all()
        dfa_issue_qty = dfa_issues.count()

        # statistics by factory related issue
        dfa_issue = dfa_issues.values('dfa_product__PartnerName',
                                        'dfa_product__ProductName',
                                          'dfa_category',
                                          'dfa_estimated_hc',
                                          'dfa_production_line',
                                          'dfa_cnc',
                                          'dfa_si_pv',
                                          'dfa_mv_mp').annotate(Count('dfa_object'))

        dfa_context = {
            "dfa_issue_qty": dfa_issue_qty,
            'dfa_issue': dfa_issue,
        }
        return dfa_context