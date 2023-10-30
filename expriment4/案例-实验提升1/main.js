const vm = Vue.createApp({
    data (){
        return {
            good : {
                id : '',
                name: '',
                price: '',
                count : ''
            },
            goods:[
                {
                    id : 1,
                    name: '华为手机',
                    price: 2000,
                    count : 1
                },
                {
                    id : 2,
                    name: '手机膜',
                    price: 30,
                    count : 1
                },
                {
                    id : 3,
                    name: '篮球',
                    price: 200,
                    count : 1
                }
            ]
        }
    },
    methods:{
        //购物车数量减
        decrease: function(index){
            this.goods[index].count --;
        },
        //购物车数量加
        increase : function(index){
            this.goods[index].count ++;

        },
        //防止出现负数
        disabledDecrease : function(index){
            return this.goods[index].count <= 1;
        },
        //移除商品
        deleteGood : function(index){
            this.goods.splice(index, 1);
        },
        //添加商品
        addGood : function(){
            if(!this.judgeGood()){
                //校验不通过直接返回
                return;
            }
            var jsonGood = JSON.stringify(this.good);
            var addG = JSON.parse(jsonGood);
            this.goods.push(addG);
            this.clearAddGood()
        },
        //添加后清空"添加用的表单"
        clearAddGood: function(){
            this.good.id = '';
            this.good.name = '';
            this.good.price = '';
            this.good.count = '';
        },
        //添加前校验
        judgeGood:function(){
            //实际生产环境中, 除了判空之外, 还会有更多的校验
            //比如金额大小, 不能为负数, 
            //后端开发者对于用户提交的表单, 应该要再校验一次
            if(this.isNull(this.good.id)){
                alert("商品编号不能为空!");
                return false;
            }
            if(this.isNull(this.good.name)){
                alert("商品名称不能为空!");
                return false;
            }
            if(this.isNull(this.good.price)){
                alert("商品价格不能为空!");
                return false;
            }
            if(this.isNull(this.good.count)){
                alert("商品数量不能为空!");
                return false;
            }
            return true;
        },
        //是否为空, true 为空
        isNull : function(val){
            return val == null || val == undefined || val == '';
        },
         //金额格式化
         twoFixed : function(val){
            return '¥ ' + parseFloat(val).toFixed(2);
        }
    },
    computed: {
        //商品总价格
        totalPrice:function(){
            var total = 0;
            for (var index = 0; index < this.goods.length; index++) {
                var good = this.goods[index];
                total += good.price * good.count; 
            }
            return total;
        }
    }
    
}).mount("#app");