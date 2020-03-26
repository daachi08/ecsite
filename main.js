Vue.filter('number_format',function(val) {
  return val.toLocaleString();
});

var app = new Vue({
  el: "#app",
  data:{
    count:0,
    showSaleItem: false,
    showDelvFree:false,
    sortOrder: 1,
    products: [
      { id:1, name: 'タイプA',price: 1100, image:'images/01.jpg',
    delv: 0, isSale: true },
    { id:2, name: 'タイプB',price: 1100, image:'images/02.jpg',
    delv: 0, isSale: true },      
    { id:3, name: 'タイプC',price: 1100, image:'images/03.jpg',
    delv: 240, isSale: true },
    { id:4, name: 'タイプD',price: 990, image:'images/04.jpg',
    delv: 0, isSale: true },
    { id:5, name: 'タイプE',price: 990, image:'images/05.jpg',
    delv: 0, isSale: false },
    {id:6, name: 'タイプF',price: 1100, image:'images/06.jpg',
    delv: 0, isSale: false },

    ]
  },
