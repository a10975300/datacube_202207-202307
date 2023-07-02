//////////////////ckeditor富文本////////////////
///////////Biz impact////////////
CKEDITOR.replace('bizimpact',{
     extraPlugins: 'image',
     filebrowserBrowseUrl: '/ckeditor/browse/',
     filebrowserUploadUrl: '/ckeditor/upload/'
});
///////////Issue decription////////////
CKEDITOR.replace('issuedecription',{
     extraPlugins: 'image',
     filebrowserBrowseUrl: '/ckeditor/browse/',
     filebrowserUploadUrl: '/ckeditor/upload/'
});
///////////Issue analysis////////////
CKEDITOR.replace('issueanalysis',{
     extraPlugins: 'image',
     filebrowserBrowseUrl: '/ckeditor/browse/',
     filebrowserUploadUrl: '/ckeditor/upload/'
});
///////////Root Cause////////////
CKEDITOR.replace('rootcause',{
     extraPlugins: 'image',
     filebrowserBrowseUrl: '/ckeditor/browse/',
     filebrowserUploadUrl: '/ckeditor/upload/'
});
///////////Short Term////////////
CKEDITOR.replace('shortterm',{
     extraPlugins: 'image',
     filebrowserBrowseUrl: '/ckeditor/browse/',
     filebrowserUploadUrl: '/ckeditor/upload/'
});
/////////Long Term////////////
CKEDITOR.replace('longterm',{
     extraPlugins: 'image',
     filebrowserBrowseUrl: '/ckeditor/browse/',
     filebrowserUploadUrl: '/ckeditor/upload/'
});
//////////////////ckeditor富文本  end////////////////////

//sumbit 檢查機制
function formsumbitcheck() {
     var form = document.getElementById('rampsustainform');
     var elements = form.elements;
    // 檢查 required 屬性
    if (form.checkValidity()) {//全部欄位都有填寫
      // 提交表單
      form.submit();
    } else {
      alert('Please fill in all required fields');
    }
}

//back按鈕 和 next按鈕 切tab
function btnnextback(nowtab,nowli,gotab,goli) {
   var element = document.getElementById(nowtab);
   element.classList.remove("active");
   var element = document.getElementById(nowli);
   element.classList.remove("active");
   var element = document.getElementById(gotab);
   element.classList.add("active");
   var element = document.getElementById(goli);
   element.classList.add("active");
}

//表單，連動下拉式選單

//先選issue type後
var issuetype=['NB','DT','Region'];
var issuetypSeelect=document.getElementById("issuetype");
var inner="";
inner=inner+'<option selected="selected" value="">Choose...</option>';
for(var i=0;i<issuetype.length;i++){
    inner=inner+'<option value='+issuetype[i]+'>'+issuetype[i]+'</option>';
}
issuetypSeelect.innerHTML=inner;

//連動Stage
var stageitem=new Array();
stageitem[0]=[];
stageitem[1]=['SI-1','SI-2','SI-3','PV-1','PV-2','PV-3','PRB/TLD/PVR','MV-1','MV-2','Ramp','Sustaining','NA'];
stageitem[2]=['SI','PV','PRB/TLD','MV (Mini1)','MV (Mini2)','MV (Balance Build)','Pre-Build (SP)','Mainbuild (MVB)','CVB','NA'];
stageitem[3]=['P/R-1','P/R-2','Sustaining','Field'];

//連動rccategory
var rccategoryitem=new Array();
rccategoryitem[0]=[];
rccategoryitem[1]=['COMM','COMM - Dfm','COMM - Others','Commodity','Commodity - Dfm','Commodity - Others','Design - BIOS','Design - EE','Design - EE Dfm','Design - Image Dfm', 'Design - ME','Design - ME Dfm','Design - Others','Design - SW','Design - System Integration','Diags','Factory Operation','Material - BS','Material - GTK','Material - Others','Material - OTK'];
rccategoryitem[2]=['Commodity Other','Commodity Quality','Commodity Specification','Commodity SW/FW','Commodity Validation Gap','Design EE - Spec Change','Design EE - Validation Gap','Design ME - Spec Change','Design ME - Validation Gap','Design Other','Design SW/BIOS - Spec Change','Design SW/BIOS - Validation Gap','DFM','ODM Diag Test Gap','SC HP AV BOM Issue','SC HP SC Internal Issue','SC HP SCM Rules, PCR/PCS Issue','SC HP SKU Configuration','SC ODM Quality','SC ODM Factory Operation','SC ODM Sub-Supplier Change Management','SC ODM Sub-Supplier Quality','SC ODM SW/Other Process','SC ODM Test Gap','SC Site(mfg) Quality','SC Site(mfg) SW/Other Process','SC Site(mfg) Test Gap','Supplier(GTK/BS) HW Module issue','Supplier(GTK/BS) Sub Supplier Quality','Supplier(GTK/BS) Vendor SW/FW','Supplier(OTK)','SW Component','Toolset Setting','Image SW','SCMx/CISx Incorrect Version','SW/SKU/ML Component','Networking/IT Issue','CS Tools - Tool Issue','ML/FWML Incorrect Version'];
rccategoryitem[3]=['COMM','COMM - Dfm','COMM - Others','Commodity','Commodity - Dfm','Commodity - Others','Design - BIOS','Design - EE','Design - EE Dfm','Design - Image Dfm', 'Design - ME','Design - ME Dfm','Design - Others','Design - SW','Design - System Integration','Diags','Factory Operation','Material - BS','Material - GTK','Material - Others','Material - OTK'];



function ChangeSelectitem(index){
//連動Stage
    var Sinner="";
    Sinner=Sinner+'<option value="">Choose...</option>';
    for(var i=0;i<stageitem[index].length;i++){
        Sinner=Sinner+'<option>'+stageitem[index][i]+'</option>';
    }
    var stageSelect=document.getElementById("stage");
    stageSelect.innerHTML=Sinner;

//連動rccategory
    var Rinner="";
    Rinner=Rinner+'<option value="">Choose...</option>';
    for(var i=0;i<rccategoryitem[index].length;i++){
        Rinner=Rinner+'<option>'+rccategoryitem[index][i]+'</option>';
    }
    var rccategorySelect=document.getElementById("rccategory");
    rccategorySelect.innerHTML=Rinner;
}
ChangeSelectitem(document.getElementById("issuetype").selectedIndex);

