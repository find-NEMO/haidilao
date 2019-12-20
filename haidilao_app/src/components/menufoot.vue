<template>
    <div>
        <van-goods-action>
            <van-goods-action-icon icon="cart-o" text="购物车" :info="$store.getters.gettotalcount" @click="onshow"/>
            <p class="price">{{$store.getters.gettotalprice}}</p>
            <van-goods-action-button type="danger" text="下单" @click="toCart"/>
        </van-goods-action> 
        <van-popup v-model="show" position="bottom" class="menuCar">
            <main>
                <div class="carhead">
                    <h3>购物车</h3>
                    <a href="javascript:;" @click="clearCart">
                        <van-icon name="delete" />
                        清空购物车
                    </a>
                </div>
                <div class="carbox">
                    <div v-for="(item,i) of $store.getters.getcarlist" :key="i" class="carlist" >
                        <p>{{item.cname}}</p>
                        <p class="price">¥{{item.count*item.price}}</p>
                        <div class="count" >
                            <div>
                                <a href="javascript:;" class="del" @click="subCount(item.id,item.count)">-</a>
                                <p>{{item.count}}</p>
                            </div>
                            <van-icon name="add" class="plus" color="#f00" @click="changeCount(item.id,1)"/>
                        </div>
                            <!-- <change-count class="count"
                                :count="item.count"
                                :id="item.id"
                                :showlist="showlist"
                            ></change-count> -->
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
            this.$store.commit("showlist");
        },
        toCart(){
            this.$router.push("/cart")
        },
        // 添加购物车
        changeCount(id,i){
            var data={
                id:id,
                count:i
                }
            console.log(data);
            this.axios.get("/cart/updatecount",{params:data})
            .then((res)=>{
                this.$store.commit("showlist");    
            })          
        },
        // 减少购物车
        subCount(id,count){
            console.log(id,count);
            if(count<=1){
                this.axios.get("/cart/del",{params:{id:id}})
                .then((res)=>{
                    this.$store.commit("showlist");   
                })          
            }else{
                this.changeCount(id,-1);
            }
        },

        // changeCount(e,id,i){
        //     console.log(i);
        //     var p;
        //     if(i==1)
        //     {
        //         p=e.currentTarget.previousElementSibling.children[1];
        //     }else if(i==-1){
        //         p=e.currentTarget.nextElementSibling;
        //         console.log(p);
        //     }
        //     var url;
        //     var data;
        //     // if(p.innerText==1){
        //     //     url="/cart/del",
        //     //     data={id:this.id}
        //     // }else{
        //     //     url="/cart/add";
        //     //     data={
        //     //         cid:this.cid,
        //     //         cname:this.cname,
        //     //         price:this.price,
        //     //         tid:this.tid,
        //     //         cnt:i
        //     //     }
        //     // }
        //     // this.axios.get(url,{params:data})
        //     // .then((res)=>{
        //     //     // console.log(res);
        //     // })
        // },
        clearCart(){
            this.axios.get("cart/clear")
            .then(res=>{
                this.$store.commit("showlist");
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
    .carbox{overflow: auto;height: 30rem;}
    .carlist{
        border-bottom: 1px solid #9391a6;
        line-height: 41px;
    }
    .carlist>p:first-child{width: 30%;}
    .carlist .price{
        color: #f00;
        font-weight: bold;
    }
    .count{
        color: #9391a6;
        display: flex;
        justify-content: flex-end;
        font-size: 2rem;
    }
    .del{
        color: #f00;
        background:transparent;
        border:1px solid #f00;
        width: 25px;height: 25px;
        margin-top: 7.5px;
        border-radius: 50%;
        line-height: 25px;
        text-align: center;
    }
    .plus{
        border-radius: 50%;
        margin-top:5px;
    }
    .count p{
        margin: 0 1rem;
        text-align: center;
    }
    .count>div{
        display: flex;
    }

</style>