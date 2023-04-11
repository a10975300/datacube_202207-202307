from .models import *
from datetime import datetime, timedelta
from django.views.generic.base import View
from django.http import HttpResponse, JsonResponse


# Create your views here.
class ProductDashboardData:
    def __int__(self):
        pass

    def get_product_dashboard_data(self):
        from django.db.models import Max, Min, Sum, Count, Avg
        products = Products.objects.all()

        product_qty = products.count()
        npi_qty, ramp_build_qty, production_qty, date_today, date_delta = self.calculate_build_date(
            products)

        # 'PlatformName__status' related_name__status django反向查询
        product_table_data = products.values(
            'ProductName',
            'PartnerName',
            'PE',
            'BuildDate_SI',
            'BuildDate_PV',
            'BuildDate_MV',
            'RTP',
            'yeildrate_si',
            'yeildrate_pv',
            'yeildrate_mv_mini1',
            'yeildrate_rtp',
            'yeildrate_ramp').annotate(Count('PlatformName__buildstage')).order_by('RTP')

        new_context = {
            "product_qty": product_qty,
            "ramp_build_qty": ramp_build_qty,
            "production_qty": production_qty,
            "npi_build_qty": npi_qty,
            "date_today": date_today,  # 给django模板response date用于日期比较
            "date_delta": date_delta,

            "product_table_data": product_table_data,
        }
        return new_context

    # calculate build date
    def calculate_build_date(self, products):
        date_time_now = datetime.now()
        str_date = datetime.strftime(date_time_now, '%Y-%m-%d')  # str_date = '2021-12-05'
        date = datetime.strptime(str_date, '%Y-%m-%d')
        date_today = date.date()
        date_delta = timedelta(days=30)

        results = products.values_list('BuildDate_SI', 'BuildDate_PV', 'BuildDate_MV', 'RTP')
        production_qty = 0
        ramp_build_qty = 0
        npi_qty = 0
        for res in results:
            try:
                if date > datetime.strptime(str(res[3]), '%Y-%m-%d') + timedelta(days=30):
                    production_qty += 1
                    # if has rtp date
                elif date > datetime.strptime(str(res[3]), '%Y-%m-%d') and date <= datetime.strptime(str(res[3]),'%Y-%m-%d') + timedelta(days=30):
                    ramp_build_qty += 1
                    # if has mv date
                elif date < datetime.strptime(str(res[3]), '%Y-%m-%d') and date >= datetime.strptime(str(res[2]),'%Y-%m-%d'):
                    npi_qty += 1
                    # if has pv date
                elif date < datetime.strptime(str(res[2]), '%Y-%m-%d') and date >= datetime.strptime(str(res[1]),'%Y-%m-%d'):
                    npi_qty += 1
                # if has si date
                elif date < datetime.strptime(str(res[1]), '%Y-%m-%d') and date >= datetime.strptime(str(res[0]), '%Y-%m-%d'):
                    npi_qty += 1
            except ValueError:
                npi_qty += 1
                pass
        # print(ramp_build_qty, mv_build_qty, pv_build_qty, si_build_qty, TBD)
        return npi_qty, ramp_build_qty, production_qty,date_today,date_delta

# sync pulsar information

class ProducInfoSync(View):
    # from django.views.decorators.csrf import csrf_exempt
    def get(self, request):
        id = request.GET.get('productid', '')
        # productId = Products.objects.filter(id=id)
        # print("im here is", productId[0].ProductVersionId)
        # self.get_info_from_pulsar(productId[0].ProductVersionId)

        return JsonResponse({"data":"successfuly"})

    def get_info_from_pulsar(self, productId):
        import requests, json, time
        from requests_ntlm import HttpNtlmAuth
        ProductId = productId
        headers ={
            "cookie": ".AspNetCore.Correlation.XZKELv1AajVa-GmgSNfBYcTfhlloTBAxGD2nUOIIo6U=N; .AspNetCore.Correlation.kd-7Mw1XD3bvUnuYq6QYiqW0Ge_Uddj1Lq-FTaAIIcg=N; .AspNetCore.Antiforgery.BnRjwEtvp4U=CfDJ8HkwgJ3pFKhErsSIDesEykjVOqDk25e93c-xtaPe6IE6pdCuYk-rrlmzW7sGrJG6sK1vDw9FXCrAnHS8_fGQayOlTfesuRUfncz76QX2uxvh6j1FyJc6eAMrE0WsRs58kkEm9mAHXYnqAGfLdGsMbYo; s_internal=1; EMID=; s_vi=[CS]v1|31A083AD6DD953D0-4000132C4AE9658A[CE]; PulsarComponentSearch=realtek:::6953::1; IsFavoriteProduct%20DropsFolderOpen=true; IsFavoriteComponentsFolderOpen=true; IsFavoriteProductsFolderOpen=true; IsFavoriteServicesFolderOpen=true; _ga=GA1.2.2140275881.1666854765; s_fid=6BF5DC2E16592C79-1DF4C969DB430392; OptanonAlertBoxClosed=2022-10-28T06:07:50.003Z; OptanonConsent=isGpcEnabled=0&datestamp=Fri+Oct+28+2022+14%3A07%3A50+GMT%2B0800+(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)&version=6.39.0&isIABGlobal=false&hosts=&consentId=e8182b46-bb1a-4076-ace9-cd44e68771f7&interactionCount=1&landingPath=NotLandingPage&groups=1%3A1%2C2%3A1%2C3%3A1%2C4%3A1; hpeuck_prefs=1111; hpeuck_answ=1; _uetvid=da422320568611eda6434dd079660903; _rdt_uuid=1666937270999.35974c63-e6c1-4d6c-8f14-c47d01ce74b8; _cs_c=0; _cs_id=7c75b41f-ad5d-a349-9252-27951bdcad33.1666937280.1.1666937280.1666937280.1589380098.1701101280096; _ga_FLBLLCPWPH=GS1.1.1666938470.5.0.1666938470.0.0.0; ASP.NET_SessionId=d5zstykpqm1n3buz1k1ftytv; IsSideMenuOpen=toggled; Is%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Favorite%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Product%20Drops%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20FolderOpen=false; HPIUID=0OU0dQzgwiotBI6l86QYP8oGmQNw2OZ1RaWo13yteHh3; HP.Pulsar.SharedCookie=ulNFIbwZY41owy7las2PxVixkCAccgj66xQpm0tFHKo9g3xtBsFMjBrDhbE_WBQhRKorROapQq16KPS8VR6TlEluYF1saRLo5EbUbJdNPNFUdRFeAHYicI6MOQ7GayA-zXAqgWDy0POz9UapwXjLWZ_CGuMdEg4AeyGPOT51x4Smt85amvBeaPkN3D8rKbAeIl91iWBfCxRYOgVPjdphY99qegAD9hdOjWSN6clNHlaUGRGJDzr9WrkiQdkvbZH3bkDs8CuHNePqff-Lyn_eWkRM1XBfLBZ5pK5rlcTaiTYuk4hPvkfWeT--8rYbGscgziDTloGmgqnv3eutn6Nt9foFXmdl9-Gk3Wqz1tff0SVJCqEtLC6R1NFWIEg0FZzH4vg0mCFsTESMIRa8tXQnFCbsOqrwFmDQqVzEI761uxTjzD413YMiVIc1YfpAk3UfNs3-3171NevJKPrnskQchtfGwx0jVQZWGRTql0aoDZJGQQb8kOBFwoCl_pnOzqMeLN84SUZG0jEfvTKG1OuRnL4WLiSKbd9UtB9kfj95GwmFTzbKUFbbtjyfln1VINvQ0eJIIsfidKIUrc1XA8iSaVbfIi3z35Ehct9vpCJOYvUcj0-1UWhdq2Mda7Yct3Dq1qe0c0UQZhmKDVbIV-zTLrMMRqz5mfoYeDeXwuR8_T_mDeDl8_PjTLB4SXwh-ePPjjMwU8PoFG7pMaEJMq8-2H7IGcVWSaMmtC0CAglcSoBjnP1AHoGwEIn3AFL8WwvHKZHkrNwWHn_OnJIYVu00WRtEcYJvcRA6cfbh312J5GEPIdmXio2hlqCeOlA2WbJsIGlZI_iqq3HEKI6n40VpTwvoLM7AHdVUHZKaZHUtWocy-jFa4po169LMzBe7POhTvRk0EorpPrhNqsu_VJhFkk9evLTo1yYd_H-pxRGY-IO673WNoPUAmlmdhdQ7PbUAC6oLBw-314hlXoGuehcDI6ns5z8gdrYM7HMxKKR60fNdACH7s1-WwHwbfBYth30wYe7rXXlU0e1n9YNiTDk-40zd8vfvBsTQjvtw2e8nG0Ob7TW_G9eKFXlRkbIcW9hIgI4JVPkF_fMIlLiGVr8ViFGeW4ZE8TWqfg38soBh3TXKJB1BDGfqa7YnOByyy0j7PQFqtuk8XPB8yJZhKtwQTti-9EpnIJkoL7ekjiFIIEhzRRylDzbSrP-CKdhZU6bQei0mlRmOsBY9c5NxeSgp9jyR7yBv3-eV-p_UzTItiRAi54i971dMvciMTSRoOB0Kt6OQVZGJC7lRVeW5trEVFIkVHxaFSZHaF-qmE1brRruEhuDUlbMsQ0YDGV4kF203WKsSO78zhsyibuLHUgZfcXyHVN9mRfgdPXp-ttT7GRS0608_Ro6hbZ-sfiswMuXrn766tJLKNs5agvMT4_i75B4yRUBUpCXLjE6wiZaAFYJmnfUD03Cuds7CWPsCyp8RNh5C5a598OgHSc-KOmmrC9E1E_FqcHTBzC8dN-njNP9PhDWqcWJMztMEgtwjh9PKxiOhqT8DsfB2-gkcazGoVK6rWCp55td-2UBcLhE5UW6g9ZFpW-0X2aW3f1hemQTZEkvfqoC3fWWsMbz1rTNWleqAE7KB8Hbya9SQsZKGaPD7Mv2I9Be88bPrqi-p7JI9CjvBzKH66l4JfdFGQYiqjxPr2tAvSUEkz3CRkvGhkSM2R06df3qxU969j2-RXv_E-IWwwE82zOjUQIDV-JPpWxJ4-4sCzxE8NIlWolNo-7s"
        }
        url = "https://pulsarweb.twn.hp.com/pulsar2/PageGridData/GetGridData?ScheduleId=7393&ProductId={}&TabId=11&%24orderby=PhaseName+asc&%24select=ItemDescription%2CPlanningStartDate%2CPlanningFinishDate%2CPORStartDate%2CPORFinishDate%2CCurrentCommitmentStartDate%2CCurrentCommitmentFinishDate%2CActualStartDate%2CActualFinishDate%2COwnerShortName%2CComment%2CPhaseName%2CScheduleDataId%2CIsHighlightRowRequired%2CIsHighlightCurrentCommitmentStartDate%2CIsHighlightCurrentCommitmentFinishDate%2CItemDefinition%2CIsMileStone&_={}".format(ProductId, int(time.time()*1000) )
        req = requests.get(url,headers=headers, auth=HttpNtlmAuth("matt.peng@hp.com", "Pe$plesquare4$"), verify=False)
        html = json.loads(req.text, encoding="utf-8")

        for info in html['Records']:
            if info['ItemDescription'] == "SI1 Systems @ HP":
                if info['CurrentCommitmentStartDate']:
                    print((info['CurrentCommitmentStartDate'])[0:-9])
            if info['ItemDescription'] == "PV Systems @ HP":
                if info['CurrentCommitmentStartDate']:
                    print((info['CurrentCommitmentStartDate'])[0:-9])
            if info['ItemDescription'] == "MV1 Systems @ HP" or info['ItemDescription'] == "MV1 PCA/System Build":
                if info['CurrentCommitmentStartDate']:
                    print((info['CurrentCommitmentStartDate'])[0:-9])
            if info['ItemDescription'] == "Target RTP/MR":
                if info['CurrentCommitmentStartDate']:
                    print((info['CurrentCommitmentStartDate'])[0:-9])