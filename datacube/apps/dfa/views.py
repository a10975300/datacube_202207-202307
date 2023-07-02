from dfa.models import Dfa_Review_Result

# dashboard data
class DfaDashboardData:
    def get_dfa_dashbaord_data(self):
        from django.db.models import Max, Min, Sum, Count, Avg, Q

        dfa_issues = Dfa_Review_Result.objects.all()
        dfa_issue_qty = dfa_issues.count()

        # dfa issue
        # for Dashboard FA、SA、Overall table
        #for Dashboard FA Line: Functions v.s Estimated HC
        dfa_issue = dfa_issues.values('dfa_product__PartnerName',
                                        'dfa_product__ProductName',
                                          'dfa_category',
                                          'dfa_estimated_hc',
                                          'dfa_production_line',
                                          'dfa_cnc',
                                          'dfa_si_pv',
                                          'dfa_mv_mp',
                                          'dfa_crate_date').annotate(Count('dfa_object'))

        #for Dashboard Focus on the factors of FA(ODM to ODM)&&(Gen to Gen)
        dfa_issue_factory = dfa_issues.values('dfa_product__PartnerName',
                                        'dfa_product__ProductName',
                                          'dfa_category',
                                          'dfa_estimated_hc',
                                          'dfa_production_line',
                                          'dfa_cnc',
                                          'dfa_si_pv',
                                          'dfa_mv_mp',
                                          ).annotate(Count('dfa_object'))

        #for Dashboard Rate of FUNCTION & HC
        dfa_issue_rate = dfa_issues.values('dfa_product__PartnerName',
                                        'dfa_product__ProductName',
                                          'dfa_category',
                                          'dfa_estimated_hc',
                                          'dfa_production_line',
                                          'dfa_cnc',
                                          'dfa_si_pv',
                                          'dfa_mv_mp',
                                           'dfa_product__Product_Segment',
                                          'dfa_product__BuildDate_SI',).annotate(Count('dfa_object'))#取得DFA對應的product的SI日期

        dfa_context = {
            "dfa_issue_qty": dfa_issue_qty,
            'dfa_issue': dfa_issue,
            'dfa_issue_rate': dfa_issue_rate,
            'dfa_issue_factory':dfa_issue_factory,
        }
        return dfa_context