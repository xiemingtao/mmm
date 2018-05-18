$(function () {
  //发送ajax请求导航数据
  $.ajax({
    url: getApi.base + '/api/getindexmenu',
    type: 'get',
    dataType: 'json',
    success: function (info) {
      console.log(info);
      var htmlStr = template('navTpl', info);
      
      $('.mm_nav ul').html(htmlStr)
    }
  })

//  点击更多按钮来实现开关
  $('.mm_nav').on('click', '.current', function () {
    $('.mm_nav li:nth-last-of-type(-n+4)').toggleClass('item')
  })

//  发送ajax请求获取商品列表数据
  $.ajax({
    type: 'get',
    url: getApi.base + "/api/getmoneyctrl",
    success: function (info) {
      console.log(info);
      var htmlStr = template('productTpl', info);
      
      $('.productList').html(htmlStr);
    }
  })
  
  
})
