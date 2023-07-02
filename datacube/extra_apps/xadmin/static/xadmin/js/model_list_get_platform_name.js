// 监听下拉框的input事件
$("#platform").on('input', function() {
    var inputValue = $(this).val();
    $.ajax({
      url: '/select/platforms/?platform=' + inputValue,
      method: 'GET',
      data: { input: inputValue },
      success: function(response) {
        // Clear the datalist options
        $("#prod").empty();
        // Add new options based on the response
        response.forEach(function(option) {
              $("#prod").append("<option value='" + Object.values(option) + "'>");
            });
          },
      error: function(xhr, status, error) {
        console.log(error);
      }
    });
  });

