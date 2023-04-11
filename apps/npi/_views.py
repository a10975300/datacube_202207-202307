import os
from django.views.generic.base import View
from django.core import serializers
from .models import SymptomCategory_Second
from django.http import JsonResponse, HttpResponse
from npi.models import Issue

# 处理safelaunch issue category选择(当选择category_I时，自动列出category_I下面所带的category_II)
class IssueCategorySelectView(View):
    def get(self, request):
        # 从add safelaunch issue页面获取category-I选择的值
        typeParent_Id = request.GET.get('module', '')
        # print(typeParent_Id)
        typeSons = serializers.serialize('json',SymptomCategory_Second.objects.filter(category_FirstType_id = int(typeParent_Id)))
        # print(typeSons)
        if typeSons:
            return JsonResponse({'typeson': typeSons})

# dashboard data
class IssueDashboardData:
    def get_issue_dashbaord_data(self):
        from django.db.models import Max, Min, Sum, Count, Avg, Q

        npi_issues = Issue.objects.all()
        npi_issue_qty = npi_issues.count()

        closed_qty = npi_issues.filter(status='Close').count()
        tracking_qty = npi_issues.filter(status='Tracking').count()
        gating_qty = npi_issues.filter(status='Gating').count()
        ooc_qty = npi_issues.filter(status='Fix in next phase').count()

        #statistics by root cause category
        result = npi_issues.values('root_cause_category', 'short_term_category', 'long_term_category').annotate(Count('root_cause_category'))
        statistic_by_rc = result.order_by('root_cause_category__count')

        #statistics by issue fixed from SI to PV
        # issue_fixed_status = npi_issues.values('buildstage', 'status',).annotate(Count('status'))
        # issue_by_stage = npi_issues.values('buildstage').annotate(Count('buildstage'))
        # print(issue_by_stage)

        #statistics by single failure
        signle_failure = npi_issues.filter(defect_qty=1).values(
            'platformName__PartnerName',
            'buildstage',
            'platformName__ProductName',
            'platformName__Product_Segment',
            'duplicate',
            'cratedate').annotate(Count('platformName__ProductName'))
        # print(signle_failure)

        # statistics by platform issues quantity per ODM
        # issue_platform_odm = npi_issues.values(
        #     'platformName__PartnerName',
        #     'platformName__ProductName',
        #     'platformName__Product_Segment',
        #     ).annotate(Count('platformName__ProductName'))
        # for item in issue_platform_odm:
        #     print(item)

        # statistics by platform issues vs repeated issue per ODM
        # issue_vs_repeated = npi_issues.values(
        #     'platformName__PartnerName',
        #     'platformName__ProductName',
        #     'platformName__Product_Segment',
        #     ).annotate(all_issue_qty=Count('platformName__ProductName'),
        #                repeated_issue_qty=Count('platformName__ProductName', filter=Q(repeating='Y')))
        # for item in issue_vs_repeated:
        #     print(item)

        # statistics by impact scope and count ME and EE and others
        impact_scope = npi_issues.values('platformName__PartnerName',
                                         'platformName__Product_Segment',
                                         'impact_scope',
                                         'root_cause_category').annotate(Count('root_cause_category'))

        # statistics by factory related issue
        factory_issue = npi_issues.values('platformName__PartnerName',
                                          'root_cause_category',
                                          'buildstage',
                                          'short_term_category',
                                          'long_term_category',).annotate(Count('buildstage'))

        issue_context = {
            "npi_issue_qty": npi_issue_qty,
            # "closed_rate": round(((npi_issue_qty - ooc_qty) / npi_issue_qty * 100), 2),
            # "occ_rate": round((ooc_qty / npi_issue_qty * 100), 2),
            "closed_qty": closed_qty,
            "tracking_qty": tracking_qty,
            "gating_qty": gating_qty,
            "ooc_qty": ooc_qty,

            'statistic_by_rc': statistic_by_rc,
            'signle_failure': signle_failure,
            'impact_scope': impact_scope,
            'factory_issue': factory_issue,
            # 'issue_fixed_status': issue_fixed_status,
            # 'issue_platform_odm': issue_platform_odm,
            # 'issue_by_stage': issue_by_stage,
            # 'issue_vs_repeated': issue_vs_repeated,

        }
        return issue_context

# automatically upload issue pictures to django datacube_20221007 system
class PictureUploadView(View):
    """
    @csrf_exempt django跨域图片批量上传并保存
    """
    from django.views.decorators.csrf import csrf_exempt
    def get(self, request):
        return HttpResponse("This is get")

    def post(self, request):
        from django.conf import settings
        # print(settings.MEDIA_ROOT) # D:\matt\coding\datacube_20221007\media
        # pic = request.FILES['pic']
        img = request.FILES['img']

        product_name = request.POST.get('product_name')
        stage_name = request.POST.get('stage_name')
        pic_name = request.POST.get('pic_name')

        product_path = settings.MEDIA_ROOT + "\issue\images" + "\\" + product_name
        stage_path = product_path + "\\" + stage_name
        picture_path = stage_path + "\\" + pic_name

        if not os.path.exists(product_path):
            os.makedirs(product_path)
        if not os.path.exists(stage_path):
            os.makedirs(stage_path)

        with open(picture_path, 'ab') as fp:
            # 如果上传的图片非常大，就通过chunks()方法分割成多个片段来上传
            for chunk in img.chunks():
                fp.write(chunk)
        return HttpResponse("Pictures upload successfully!")

    @csrf_exempt
    def dispatch(self, *args, **kwargs):
        return super(PictureUploadView, self).dispatch(*args, **kwargs)

