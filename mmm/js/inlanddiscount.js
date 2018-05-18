

$(function () {
//  发送ajax请求获取数据渲染你页面
  $.ajax({
    type:'get',
    url:getApi.base+'/api/getinlanddiscount',
    success:function (info) {
      console.log(info);
      var htmlStr = template('inlandTpl',info);
      
      $('.inlans_list ul').html(htmlStr)
    }
  })
})