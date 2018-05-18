$(function () {
  var id = getSearch('productid') || 1;
  console.log(id);
  
  $.ajax({
    type: 'get',
    url: getApi.base + '/api/getdiscountproduct',
    data: {
      productid: id
    },
    success: function (info) {
      console.log(info);
      var htmlStr = template('inlandproductTpl', info);
      $('.box').html(htmlStr)
    }
  })
})