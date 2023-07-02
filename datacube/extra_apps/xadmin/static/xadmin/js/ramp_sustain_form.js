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
     var form = document.getElementById('rampsustainform');//取得表單
    // 檢查表格
    if (form.checkValidity()) {//如果表格檢查通過，(表示全部欄位都有填寫)
        //再額外檢查富文本，因為上面的檢查會檢查不出富文本有沒有填寫
        var editors = CKEDITOR.instances;//取得所有富文本
        var numberOfEditors = Object.keys(CKEDITOR.instances).length;//計算富文本數量
        var editors_check = 0;//檢查成功的富文本數量
        for (var editorName in editors) {
            var editorData = editors[editorName].getData();
            if (!editorData.trim()) { //trim去空白，如果是空
                alert("Please fill in all the required fields.");
                break
            }
            else{
                editors_check=editors_check+1
            }
        }
        if(editors_check === numberOfEditors){ //如果檢查成功的富文本數量=所有富文本數量
            form.submit();//送出表單
        }
    }
    else {
        alert('Please fill in all required fields.');
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

//先選segment後
var segment=['NB','DT','Region'];
var segmentSeelect=document.getElementById("segment");
var inner="";
inner=inner+'<option selected="selected" value="">Choose...</option>';
for(var i=0;i<segment.length;i++){
    inner=inner+'<option value='+segment[i]+'>'+segment[i]+'</option>';
}
segmentSeelect.innerHTML=inner;

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
ChangeSelectitem(document.getElementById("segment").selectedIndex);

