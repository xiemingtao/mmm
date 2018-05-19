$(function () {
  
  $('.shop_btn').click(function () {
    
    
    $.ajax({
      type: 'get',
      url: getApi.base + "/api/getgsshop",
      success: function (info) {
        console.log(info);
        var htmlStr = template('warpListTpl', info);
        
        $('.warpList').html(htmlStr)
        
        $('.warpList').stop().slideToggle(200)
      }
    })
  })
  
  $('.city_btn').click(function () {
    
    $.ajax({
      type: 'get',
      url: getApi.base + '/api/getgsshoparea',
      success: function (info) {
        console.log(info);
        var htmlStr = template('cityTpl', info);
        
        $('.warpList').html(htmlStr)
        
        $('.warpList').stop().slideToggle(200)
      }
    })
  })

//  点击商店发送ajax请求获取相应的数据渲染页面
  render(0,0)
  $('.warpList').on('click', ' a', function () {
    var shopid = $(this).data('shopid') || 0;
    
    var areaid = $(this).data('areaid') || 0;
    //关闭列表
    $('.warpList').slideToggle(200)
    //改变商店名称
    
    
    $(this).find('i').addClass('img')
    
    
    render(shopid, areaid)
  })
  
  function render(shopid, areaid) {
    $.ajax({
      type: 'get',
      url: getApi.base + '/api/getgsproduct',
      data: {
        shopid: shopid,
        areaid: areaid
      },
      success: function (info) {
        console.log(info);
        var htmlStr = template('listTpl', info)
        
        $('.content_list ul').html(htmlStr)
      }
    })
  }
})