$(function () {
//点击缓慢回到顶部
  
  var $btn = $('.target_list li').eq(2).find('a');
  $btn.on('click', function () {
    
    $('html,body').animate({'scrollTop': '0'}, 500)
    // $('html,body').animate({
    //   'scrollTop': 0
    // },500)
    
    
    return false
  })
  
  
})

function getSearch(key) {
  // 获取地址栏参数  "?name=pp&age=18&desc=%E5%B8%85"
  var search = location.search;
  // 需要解码  "?name=pp&age=18&desc=帅"
  search = decodeURI(search);
  // 去掉 ?
  search = search.slice(1);
  // 根据 & 将字符串, 切割成数组   ["name=pp", "age=18", "desc=帅"]
  var arr = search.split("&");
  
  var obj = {};
  
  arr.forEach(function (element, index) {
    // "name=pp"
    var k = element.split("=")[0];
    var v = element.split("=")[1];
    // obj["name"]="pp";
    obj[k] = v;
  });
  
  // return obj["name"];
  return obj[key];
  
  
}

/* 可以类似下面这样的处理，封装成函数，放到common.js中 */

function Api() {
  /* 自己本地IP加上项目端口号 */
  this.base = 'http://169.254.115.155';
  
  /*首页接口地址管理*/
  this.getindexmenu = this.base + '/api/getindexmenu';
  
  /* 省钱控接口地址管理 */
  // 获取折扣商品的列表信息   传参：pageid 不传默认返回第一页数据
  this.getmoneyctrl = this.base + '/api/getmoneyctrl';
  // 获取省钱控商品详情信息     传参：productid
  this.getmoneyctrlproduct = this.base + '/api/getmoneyctrlproduct';
  
  // ...
}

/* 将api接口暴露到全局 */
window.getApi = new Api();


