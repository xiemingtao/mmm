$(function () {
//    发送ajax请求获取数据渲染页面
  //定义一个变声标识页面
  var page = parseInt(getSearch("currentPage")) || 0;
  //需要封装成一个函数来重复使用
  
  render()
  
  function render() {
    $.ajax({
      type: 'get',
      url: getApi.base + '/api/getmoneyctrl',
      data: {
        pageid: page
      },
      success: function (info) {
        
        //总页码
        var totalPage = info.totalCount;
        var size = info.pagesize;
        var pages = Math.ceil(totalPage / size);
        info.pages = pages;
        
        info.prev = page - 1;
        if (info.prev < 0) {
          info.prev = -1;
        }
        
        info.next = page + 1;
        if (info.next > info.pages) {
          info.next = pages - 1
        }
        
        console.log(info);
        var htmlStr = template('productTpl', info);
        $('.mm_product').html(htmlStr);
        console.log(info);
      }
    })
  }

//  给下拉列表添加点击事件
  $('.mm_product').on('change', '.selecList', function () {
    console.log($(this).val());
    page = $(this).val()
    console.log(page);
    page = page - 1
    render()
  })
})