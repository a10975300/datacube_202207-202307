function change(){
            var select =$('#select option:selected').val(); // 获取下拉框 选中得值

            $.ajax({
            type: 'get',
            url: '/DfmCategoryselect/',
            data: {
                "select": select
            },
            async: true,
            datatype: 'json',
            beforeSend: function (xhr, settings) {
                xhr.setRequestHeader('X-CSRFToken', '{{ csrf_token }}')
            },
            success: function (data) {
<!--                data = JSON.parse(data.products)//将JSON转换-->
<!--                    for (var i = 0; i < data.length; i++) {-->
<!--                        var option = document.createElement("option");-->
<!--                        $(option).val(data[i].fields.ProductName);-->
<!--                        $(option).text(data[i].fields.ProductName);-->
<!--                        $('#autoValue').append(option);-->
<!--                    }-->

//                data = JSON.parse(data.fixCategory)//将JSON转换
//                alert(data)
//                    for (var i = 0; i < data.length; i++) {
//                        var option = document.createElement("option");
//                        $(option).val(data[i]);
//                        $(option).text(data[i];
//                        $('#autoValue').append(option);
//                    }
            },
            error: function (xhr, textStatus) {
                console.log('error')
            }
            })
        }