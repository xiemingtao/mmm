$(function () {
  var shopid = 0;
  var areaid = 0;
  //进入页面默认渲染
  render()
  
  
  //发送ajax请求获取商店数据
  $.ajax({
    type: 'get',
    url: getApi.base + "/api/getgsshop",
    success: function (info) {
      console.log(info);
      var htmlStr = template('warpListTpl', info);
      $('.warpList').html(htmlStr)
    },
    complete: function () {
      //绑定点击商店按钮事件
      $('.shop_btn').click(function () {
        $('.warpList').slideToggle(200)
        $('.warpCity').hide()
      })
    }
  })
  
  
  //点击地区按钮发送ajax请求
  $.ajax({
    type: 'get',
    url: getApi.base + '/api/getgsshoparea',
    success: function (info) {
      console.log(info);
      var htmlStr = template('cityTpl', info);
      // console.log(htmlStr);
      $('.warpCity').html(htmlStr)
      
    },
    complete: function () {
      $('.city_btn').click(function () {
        $('.warpCity').slideToggle(200)
        $('.warpList').hide()
      })
    }
  })


//  点击商店发送ajax请求获取相应的数据渲染页面
  
  $('.warpList').on('click', ' a', function () {
    $('.shop_btn').text($(this).text())
    $(this).find('i').addClass('img').parent().siblings().find('i').removeClass('img')
    
    shopid = $(this).data('shopid');
    
    //关闭列表
    
    $('.warpList').slideToggle(200)
    //改变商店名称
    
    console.log(shopid);
    render()
  })
  
  $('.warpCity').on('click', 'a', function () {
    $(this).find('i').addClass('img').parent().siblings().find('i').removeClass('img')
    areaid = $(this).data('areaid');
    $('.city_btn').text($(this).text().slice(0,2))
    
    $('.warpCity').slideToggle(200)
    //改变商店名称
    
    console.log(shopid);
    
    render()
  })
  
  function render() {
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