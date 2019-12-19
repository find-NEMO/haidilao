<template>
    <div>
        <van-goods-action>
            <van-goods-action-icon icon="cart-o" text="购物车" info="5" @click="onshow"/>
            <p class="price">¥112</p>
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
                <div class="carlist">
                    <p>全锅底</p>
                    <div>
                        <p class="price">¥72</p>
                        <change-count class="count"></change-count>
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
    components:{
        "menu-car":menuCar,
        "change-count":changeCount
    },
    data() {
        return {
            show:false
        }
    },
    methods: {
        onshow(){
            // if(!this.show){
                this.show=true;
            // }else{
            //     this.show=false;
            // }
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
    .carlist{border-bottom: 1px solid #9391a6;margin-bottom:3.2rem;}
    .carlist>div{width: 40%;}
    .carlist .price{
        color: #f00;
        font-weight: bold;
    }
    .count{color: #9391a6}
</style>