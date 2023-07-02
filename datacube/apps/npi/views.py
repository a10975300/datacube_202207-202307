import os
from django.views.generic.base import View
from django.core import serializers
from .models import SymptomCategory_Second
from django.http import JsonResponse, HttpResponse
from npi.models import Issue,DesktopIssue,RegionalCase
from datetime import date, timedelta
from django.utils import timezone
from product.models import Products
from django.db.models import Q
from django.contrib import messages
from django.http import HttpResponseRedirect

# 处理model_list模态框下拉选择platform
class PlatformSelectView(View):
    def get(self, request, *args, **kwargs):
        # 处理 AJAX 请求，返回数据
        keyword = request.GET.get('platform', '')
        queryset = Products.objects.filter(Q(ProductName__icontains=keyword))
        # print(queryset)
        data = []
        for product in queryset:
            data.append({f"{product}": f"{product}"})
        return JsonResponse(data, safe=False)

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
        npi_issue_mv_qty = npi_issues.filter(Q(buildstage='MV-1') | Q(buildstage='MV-2')).count()#取得在MV的issue數量，用在Executive Summary

        closed_qty = npi_issues.filter(status='Close').count()
        tracking_qty = npi_issues.filter(status='Tracking').count()
        gating_qty = npi_issues.filter(status='Gating').count()
        ooc_qty = npi_issues.filter(status='Fix in next phase').count()

        #計算三個月前的NPI Issue 增長數量，用在Executive Summary
        today = timezone.now().date()#取得今天日期
        three_months_ago = today - timedelta(days=90)#取得三個月的日期
        monthly_npi_issue_qty = npi_issues.filter(cratedate__range=(three_months_ago, today)).count()#取的三個月到今天的issue數量

        #statistics by root cause category
        #for Dashboard Design issue
        result = npi_issues.values('root_cause_category', 'short_term_category', 'long_term_category','cratedate').annotate(Count('root_cause_category'))
        statistic_by_rc = result.order_by('root_cause_category__count')

        # statistics by impact scope and count ME and EE and others
        #for Dashboard Overall issue impact Factory
        impact_scope = npi_issues.values('platformName__PartnerName',
                                         'platformName__Product_Segment',
                                         'impact_scope',
                                         'root_cause_category','cratedate').annotate(Count('root_cause_category'))

        # statistics by factory related issue
        #for Dashboard Factory issue
        factory_issue = npi_issues.values('platformName__PartnerName',
                                          'root_cause_category',
                                          'buildstage',
                                          'short_term_category',
                                          'long_term_category','cratedate').annotate(Count('buildstage'))

        #for Dashboard Issue Overview
        issue_overview = npi_issues.values('root_cause_category',
                                          'short_term_category',
                                          'long_term_category','cratedate').annotate(Count('root_cause_category'))

        #for Dashboard MV issue
        mv_issue = npi_issues.values('platformName__PartnerName',
                                          'root_cause_category',
                                          'buildstage',
                                          'short_term_category',
                                          'long_term_category','cratedate').annotate(Count('buildstage'))

        # executive_summary
        executive_summary = npi_issues.values('platformName__PartnerName',
                                              'long_term_category',
                                              'impact_scope',
                                              'root_cause_category',
                                              'buildstage',
                                              'platformName__ProductName',
                                              'cratedate').annotate(Count('root_cause_category'))


        #statistics by issue fixed from SI to PV
        # issue_fixed_status = npi_issues.values('buildstage', 'status',).annotate(Count('status'))
        # issue_by_stage = npi_issues.values('buildstage').annotate(Count('buildstage'))
        # print(issue_by_stage)

        #statistics by single failure
        #signle_failure = npi_issues.filter(defect_qty=1).values(
        #    'platformName__PartnerName',
        #    'buildstage',
        #    'platformName__ProductName',
        #   'platformName__Product_Segment',
        #    'duplicate',
        #   'cratedate').annotate(Count('platformName__ProductName'))
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


        issue_context = {
            "npi_issue_qty": npi_issue_qty,
            "npi_issue_mv_qty": npi_issue_mv_qty,
            'monthly_npi_issue_qty': monthly_npi_issue_qty,
            "closed_rate": round(((npi_issue_qty - ooc_qty) / npi_issue_qty * 100), 2),
            "occ_rate": round((ooc_qty / npi_issue_qty * 100), 2),
            "closed_qty": closed_qty,
            "tracking_qty": tracking_qty,
            "gating_qty": gating_qty,
            "ooc_qty": ooc_qty,

            'statistic_by_rc': statistic_by_rc,
            #'signle_failure': signle_failure,
            'impact_scope': impact_scope,
            'factory_issue': factory_issue,
            # 'issue_fixed_status': issue_fixed_status,
            # 'issue_platform_odm': issue_platform_odm,
            # 'issue_by_stage': issue_by_stage,
            # 'issue_vs_repeated': issue_vs_repeated,
            'mv_issue': mv_issue,
            'issue_overview': issue_overview,
            'executive_summary': executive_summary,

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

# handle new issue form submit Ramp form
class SubmitIssue(View):
    def get(self, request):
        pass

    def post(self, request):
        segment = request.POST.get("segment") # get segment

        if segment=='NB':
            new_issue = Issue()
            page= '/scpe/npi/issue/'

        elif segment == 'DT':
            new_issue = DesktopIssue()
            page = '/scpe/npi/desktopissue/'

        else:#Region
            new_issue = RegionalCase()
            page = '/scpe/npi/regionalcase/'

        #取得表單傳過來的資料
        get_platform = Products.objects.get(ProductName=request.POST.get("platform"))
        new_issue.platformName = get_platform
        new_issue.buildstage = request.POST.get("stage")
        new_issue.status = request.POST.get("status")
        new_issue.priority = request.POST.get("priority")
        new_issue.business_impact = request.POST.get("bizimpact")
        new_issue.processName = request.POST.get("issueisfrom")
        new_issue.issue_desc = request.POST.get("issuedecription")
        new_issue.issue_analysis = request.POST.get("issueanalysis")
        new_issue.root_cause_category = request.POST.get("rccategory")
        new_issue.short_term_category = request.POST.get("stcategory")
        new_issue.long_term_category = request.POST.get("ltcategory")
        new_issue.root_cause = request.POST.get("rootcause")
        new_issue.short_term = request.POST.get("shortterm")
        new_issue.long_term = request.POST.get("longterm")
        new_issue.impact_scope = request.POST.get("impactscope")
        new_issue.input_qty = request.POST.get("totalinput")
        new_issue.defect_qty = request.POST.get("defect")

        new_issue.save()#新增issue，存進資料庫
        new_issue_id = new_issue.id#取得新增issue的ID

        # 處理上傳檔案
        if request.FILES:  # 如果有文件
            uploaded_files = request.FILES.getlist('choosefile[]') #取得多個文件
            for id, uploadfile in enumerate(uploaded_files):
                original_filename = uploadfile.name#取得原本檔案名稱
                file_name, file_extension = os.path.splitext(original_filename)#把原本檔案名稱切成檔案名稱，和檔案類型
                file_id=id+1

                stages = {  #替換stage名字
                    #NB的
                    "SI-1": "SI_1",
                    "SI-2": "SI_2",
                    "SI-3": "SI_3",
                    "PV-1": "PV_1",
                    "PV-2": "PV_2",
                    "PV-3": "PV_3",
                    "PRB/TLD/PVR": "PRB_TLD_PVR",
                    "MV-1": "MV_1",
                    "MV-2": "MV_2",
                    # DT的
                    "SI": "SI",
                    "PV": "PV",
                    "PRB/TLD": "PRB_TLD",
                    "MV (Mini1)": "MV(Mini1)",
                    "MV (Mini2)": "MV(Mini2)",
                    "MV (Balance Build)": "MV(Balance Build)",
                    "Pre-Build (SP)": "Pre_Build(SP)",
                    "Mainbuild (MVB)": "Mainbuild(MVB)",
                    "CVB": "CVB"
                }

                product_name = request.POST.get("platform")
                stage_name = request.POST.get("stage")
                #檔案名稱：產品名稱_build stage_issue的id_照片流水號
                file_rename = ("{}_"+"{}_"+"{}_"+"{}"+"{}").format(product_name, stages.get(stage_name),new_issue_id,file_id,file_extension)

                #設定檔案路徑
                from django.conf import settings
                product_path = settings.MEDIA_ROOT + "\issue\images" + "\\" + product_name
                stage_path = product_path + "\\" + stages.get(stage_name)
                file_path = stage_path + "\\" + file_rename

                if not os.path.exists(product_path):
                    os.makedirs(product_path)
                if not os.path.exists(stage_path):
                    os.makedirs(stage_path)

                with open(file_path, 'ab') as fp:
                    # 如果上传的图片非常大，就通过chunks()方法分割成多个片段来上传
                    for chunk in uploadfile.chunks():
                        fp.write(chunk)

        messages.success(request, "{}-{}'s safe-launch data was imported successfully.".format(new_issue.platformName,segment))
        return HttpResponseRedirect(page)