$(function () {
  //根据地址栏获取响应的ID和名字
  var id = getSearch('productid')
  
  // 请求数据
  $.ajax({
    type: 'get',
    url: getApi.base + '/api/getproduct',
    data: {
      productid: id
    },
    success: function (info) {
      info.name = getSearch('name')
      console.log(info);
      console.log(info.result[0].bjShop);
      var htmlStr = template('tvTPL', info);
      
      $('.box_txt').html(htmlStr);
    }
  })
  $.ajax({
    url:getApi.base+'/api/getproductcom',
    type:'get',
    data:{
      productid:id
    },
    success:function (info) {
      console.log(info);
      var htmlStr = template('evaluateTpl',info);
      $('.comment').append(htmlStr)
    }
  })
})