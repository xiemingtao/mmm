$(function () {
  
  var id = getSearch('productId')||20;
  

//    发送ajax请求数据
  $.ajax({
    type: 'get',
    url: getApi.base + '/api/getmoneyctrlproduct',
    data: {
      productid: id
    },
    success: function (info) {
      console.log(info);
      var htmlStr = template('proTpl', info)
      $('.box').html(htmlStr)
    }
  })
})