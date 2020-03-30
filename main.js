Vue.filter('number_format',function(val) {
    return val.toLocaleString();
  });

var app = new Vue({
    el: "#app",
    data:{
      
    taxRate: 0.1,
    // 料金
    basePrice_A: 1000,
    basePrice_B: 2000,
    basePrice_C: 3000,
    basePrice_D: 2500,
    basePrice_E: 2000,
    basePrice_F: 1500,
      
    optPrice: 0,

    opt1: 0,                 
    opt2: 0,
    opt3: 0,           
    opt4: 0,           
    opt5: 0,           
    opt6: 0,           

    },
    computed: {
        sum:function() {
            return this.opt1 * this.basePrice_A + 
                   this.opt2 * this.basePrice_B +
                   this.opt3 * this.basePrice_C + 
                   this.opt4 * this.basePrice_D + 
                   this.opt5 * this.basePrice_E + 
                   this.opt6 * this.basePrice_F 
                   
        },
    },
  });
