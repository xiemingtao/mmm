

$(function () {
  
  var id = getSearch('couponId')||0;
  // console.log(id);
  
  $.ajax({
    type:'get',
    url:getApi.base+'/api/getcouponproduct',
    data:{
      couponid:id
    },
    success:function (info) {
      console.log(info);
      var htmlStr = template('cpProListTpl',info);
      
      $('.productList').html(htmlStr)
    }
  })
  
//  给每个商品添加点击事件显示模态框
  $('.productList').on('click','.productList li a',function () {
      $('.modal').show()
    //获取当前点击列表的图片放入模态框中的img中
    // console.log($(this).find('.img').find('img').attr('src'));
      
      $('.modal').find('img').attr('src',$(this).find('.img').find('img').attr('src'))
  })
  $('.modal').click(function () {
    $('.modal').hide()
   
  })
})