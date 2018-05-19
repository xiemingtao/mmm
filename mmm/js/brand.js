$(function () {
  var id = getSearch('brandTitleId') || 0;
  var brandName = getSearch('name');
  
  
  //品牌排行ajax请求
  
  $.ajax({
    type: 'get',
    url: getApi.base + '/api/getbrand',
    data: {
      brandtitleid: id
    },
    success: function (info) {
      console.log(info);
      info.name = brandName;
      var htmlStr = template('brandSortTpl', info)
      $('.brand_sort').html(htmlStr)
    }
  })


//销售排行ajax请求
  $.ajax({
    type: 'get',
    url: getApi.base + '/api/getbrandproductlist',
    data: {
      brandtitleid: id,
      pagesize: 5
    },
    success: function (info) {
      
     
      var arr = [];
      info.result.forEach(function (v, i) {
        
        var img = v.productImg
        var proname = v.productName
       
        arr.push({img:img,proname:proname})
      
      })
      
      info.name = brandName
      var htmlStr = template('brandSellTpl', info);
      $('.brand_sell').html(htmlStr)
      
      //  评论ajax请求
      $.ajax({
        type: 'get',
        url: getApi.base + '/api/getproductcom',
        data: {
          productid: id
        },
        success: function (info) {
          info.result.forEach(function (v, i) {
            v.img = arr[i];
          })
          // console.log(info.result[0].img.img);
          console.log(info);
          info.name = brandName;
          var htmlStr = template('brandcommentTpl', info)
          $('.brand_comment').html(htmlStr)
        }
      })
      
      
    }
  })
  
  
})