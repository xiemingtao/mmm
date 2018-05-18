
$(function () {
    $.ajax({
      type:'get',
      url:getApi.base+'/api/getcoupon',
      success:function (info) {
        console.log(info);
        var htmlStr = template('cpTpl',info)
        
        $('.cpList').html(htmlStr);
      }
    })
})