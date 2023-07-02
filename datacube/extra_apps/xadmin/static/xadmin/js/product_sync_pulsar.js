$(document).ready(function(){
    $('.btn_submit').click(function(){
        var productid=$(this).attr('value');  //获取产品id
        var productname=$(this).attr('id');  //获取产品名称
        var pattern = new RegExp("[.`~!@#$^&*=|{}':;',\\[\\]<>《》/?~！@#￥……&*|{}【】‘；：”“'。，、？' ']");
        var pattern1 = new RegExp("G10");
        var pattern2 = new RegExp("G11");

        if(productname.indexOf(" ")!= -1){
            $(this).text('incorrect name!');
            $(this).css("color","red");
        } else if(pattern.test(productname)){
            $(this).text('incorrect name!');
            $(this).css("color","red");
        } else if(pattern1.test(productname)){
            $(this).text('incorrect name!');
            $(this).css("color","red");
        } else if(pattern2.test(productname)){
            $(this).text('incorrect name!');
            $(this).css("color","red");
        } else{
            if(confirm('Make sure you are connected the HP network, Click OK to sync ' + productname +'‘s' + ' information from pulsar. It will take a few minutes')){
                $(this).text('processing ...');
                $('#' + productname ).attr('id', productid);
                $.ajax({
                    url: "/syncpulsarinfo",
                    type: "get",
                    data: {productid:productid},
                    dataType: "json",
                    success: function(res){
                        $('#' + productid).text(res['data'])
                    }
                });
            }
        }
    });
});