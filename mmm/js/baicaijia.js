$(function () {
  
 
  var id = 0;
  render()
  var myScroll;

//发送ajax求情获取数据渲染导航栏
  $.ajax({
    type: 'get',
    url: getApi.base + '/api/getbaicaijiatitle',
    success: function (info) {
      console.log(info);
      
      var htmlStr = template('bcjTpl', info);
      
      $('.warp ul').html(htmlStr)
      
      
    },
    complete: function () {
     
      
      // 动态的渲染ul的宽度
      // 获取li的宽度
      var num = 0;
      var liWidth = $('.bcjNav li')
      liWidth.each(function (i, v) {
        
        num += $(v).width();
      })
      
      document.querySelector('.bcjNav ul').style.width = num + 10 + 'px';
  
      myScroll = new IScroll('#wrapper', {
        scrollX: true,
        scrollY: false,
      });
    }
  })


//给导航栏添加点击事件
  $('.warp').on('click', 'li a', function () {
    
    $(this).addClass('current').parent().siblings().find('a').removeClass('current')
    myScroll.scrollToElement(this, 500, true, true);
     id = $(this).data('id');
    
    //  发送ajax请求获取列表对应的信息
    render()
    
  })
  
  function render() {
    
    $.ajax({
      type: 'get',
      url: getApi.base + '/api/getbaicaijiaproduct',
      data: {
        titleid: id
      },
      success: function (info) {
        console.log(info);
        
        var htmlStr = template('bcjProTpl', info);
        
        $('.list ul').html(htmlStr)
      }
    })
  }
  
 
})