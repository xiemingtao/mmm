$(function () {
//    根据地址栏获取商品分类ID  回去数据
  var id = getSearch('categoryId');
  var productNmae = getSearch('name');
  //定义一个翻页变量
  var currentPage = getSearch('pageid') || 1;
  render()
  
  function render() {
    $('.selecList').empty()
    
    $.ajax({
      type: 'get',
      url: getApi.base + '/api/getproductlist',
      data: {
        categoryid: id,
        pageid: currentPage
      }, success: function (info) {
        console.log(info);
        info.name = productNmae;
        
        //模板渲染
        var htmlStr = template('proListTpl', info);
        $('.mm_product').html(htmlStr);
        
        
        // 获取每页渲染的数据和总数据算出总页数
        var total = info.totalCount
        var size = info.pagesize;
        
        var totalSize = Math.ceil(total / size);
        console.log(totalSize);
        
        for (var i = 1; i <= totalSize; i++) {
          $('.selecList').append('<option value=' + i + '> ' + i + ' / ' + totalSize + '</option>');
          
          $('.selecList').val(currentPage)
        }
      }
    })
  }
  
  //点击下一页
  $('.next_page').click(function () {
    var num = $('.selecList option').length;
    currentPage++;
    if (currentPage > num) {
      $(this).attr('href', 'javascript:;')
      currentPage = num;
      return
    }
    
    $(this).attr('href', 'productlist.html?categoryId=0&name=电视&pageid=' + currentPage)
  })
  
  //点击上一页
  $('.prev_page').click(function () {
    currentPage--;
    if (currentPage <= 0) {
      $(this).attr('href', 'javascript:;')
      currentPage = 1;
      return
    }
    $(this).attr('href', 'productlist.html?categoryId=0&name=电视&pageid=' + currentPage)
  })

//  点击下拉列表选择翻页
  $('.selecList').change(function () {
    var sizeNum = $(this).val()
    currentPage = sizeNum;
   location.href = 'productlist.html?categoryId=0&name=电视&pageid=' + currentPage
  })
})