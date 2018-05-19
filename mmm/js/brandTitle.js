

$(function () {
    $.ajax({
      type:'get',
      url:getApi.base+'/api/getbrandtitle',
      success:function (info) {
        console.log(info);
        console.log(info.result[0].brandTitle.substring(-4,1));
        console.log(info.result[0].brandTitle);
        var htmlStr =template('brandTpl',info);
       
        $('.List').html(htmlStr)
      }
    })
})