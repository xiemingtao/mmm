$(function () {
  //发送ajax请求获取列表数据进行渲染
  $.ajax({
    url: getApi.base + '/api/getcategorytitle',
    type: 'get',
    success: function (info) {
      console.log(info);
      var htmlStr = template('listTpl', info);
      $('.List').html(htmlStr)
      
    }
  })
  
  // 点击列表发送ajax请求获取数据进行渲染
  $('.List').on('click', 'a[data-id]', function () {
    var id = $(this).data('id');
    var that = $(this)
    $.ajax({
      url: getApi.base + '/api/getcategory',
      type: 'get',
      data: {
        titleid: id
      },
      success: function (info) {
        console.log(info);
        var htmlStr = template('smListTpl', info);
        $('.smList').html(htmlStr)
  
       
      }
    })
  
    $(that).next().toggleClass('hide').parent().siblings().find('.smList').addClass('hide')
    
  })
  
})