var vm = Vue.createApp({
    data(){
        return{
            good : {
                storeId: '',
                store: '',
                id : '',
                name: '',
                price: '',
                count : ''
            },
            shopcar : {
                //同学们可以使用这个allChecked去控制所有商品全选
                //当然有其他思路的也可以
                allChecked: false,
                infos: [
                    {
                        storeId: '1',
                        storeName: '华为旗舰店',
                        //同学们可以使用这个checked去控制某个商店所有商品的全选,
                        //当然有其他思路的也可以
                        checked: false,
                        goods:[
                            {
                                id : 1,
                                name: '华为手机',
                                price: 2000,
                                count : 1,
                                 //同学们可以使用这个checked去控制某个商品的选择,
                                checked : false
                            },
                            {
                                id : 2,
                                name: '华为Mate30手机',
                                price: 5000,
                                count : 1,
                                checked : false
                            },
                        ]
                    },
                    {
                        storeId: '2',
                        storeName: '体育用品店',
                        //同学们可以使用这个checked去控制某个商店所有商品的全选,
                        //当然有其他思路的也可以
                        checked: false,
                        goods:[
                            {
                                id : 3,
                                name: '篮球',
                                price: 200,
                                count : 1,
                                checked : false
                            }
                        ]
                    },
                    {
                        storeId: '3',
                        storeName: '手机用品店',
                        //同学们可以使用这个checked去控制某个商店所有商品的全选,
                        //当然有其他思路的也可以
                        checked: false,
                        goods:[
                            {
                                id : 2,
                                name: '手机膜',
                                price: 30,
                                count : 1,
                                checked : false
                            }
                        ]
                    }       
                ]
            }
        }
    }
}).mount("#app");