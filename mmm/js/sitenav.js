
$(function () {
    $.ajax({
      type:'get',
      url:getApi.base+'/api/getsitenav',
      success:function (info) {
        console.log(info);
        var htmlStr = template('navlistTpl',info);
        
        $('.navlist ul').html(htmlStr);
      }
    })
})