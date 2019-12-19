<template>
    <div>
        <van-goods-action>
            <van-goods-action-icon icon="cart-o" text="购物车" :info="info" @click="onshow"/>
            <p class="price">{{totalprice}}</p>
            <van-goods-action-button type="danger" text="下单" />
        </van-goods-action> 
        <van-popup v-model="show" position="bottom" class="menuCar">
            <main>
                <div class="carhead">
                    <h3>购物车</h3>
                    <a href="">
                        <van-icon name="delete" />
                        清空购物车
                    </a>
                </div>
                <div v-for="(item,i) of cartlist" :key="i" class="carlist">
                    <p>{{item.cname}}</p>
                    <div>
                        <p class="price">¥{{item.count*item.price}}</p>
                        <change-count class="count"
                            :count="item.count"
                            :id="item.id"
                            :showlist="showlist"
                        ></change-count>
                    </div>
                </div>
            </main> 
        </van-popup> 
    </div>
</template>
<script>
import menuCar from "./menucar";
import changeCount from "./changeCount";

export default {
    created() {
        this.showlist();
    },
    components:{
        "menu-car":menuCar,
        "change-count":changeCount
    },
    data() {
        return {
            show:false,
            cartlist:[],
            info:0,
            totalprice:0
        }
    },
    methods: {
        onshow(){
            // if(!this.show){
                this.show=true;
            // }else{
            //     this.show=false;
            // }
            this.showlist();

        },
        showlist(){
            this.axios.get("/cart/list")
            .then(res=>{
                this.cartlist=res.data.data;
                this.info=0;
                this.totalprice=0;
                for(var i=0;i<this.cartlist.length;i++){
                    this.info+=this.cartlist[i].count;
                    this.totalprice+=this.cartlist[i].count*this.cartlist[i].price;
                }
            })            
        }
    },    
}
</script>
<style scoped>
    .price{
        width: 30%;
        text-align: center;
        color: #f00;
        font-weight: bold;
    }
    .carhead,.carlist,.carlist>div{
        display: flex;
        justify-content: space-between;
    }
    .carhead{background: #eee}
    .carhead>a{
        color: #9391a6;
        line-height: 62.75px;
    }
    .carlist{border-bottom: 1px solid #9391a6;}
    .carlist>div{width: 40%;}
    .carlist .price{
        color: #f00;
        font-weight: bold;
    }
    .count{color: #9391a6}
</style>