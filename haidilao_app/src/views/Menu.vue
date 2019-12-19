<template>
    <div>
        <menu-head class="head"></menu-head>
        <!-- 左侧导航栏 -->
        <!-- <navbar-left class="left"></navbar-left>  -->
        <div class="left">
            <van-sidebar v-model="activeKey">
                <van-sidebar-item v-for="(tab,i) of tabs" :key="i" :title="tab.tname" @click="show(i)">
                </van-sidebar-item>   
            </van-sidebar>
        </div>
        <!-- 菜单列表 -->
        <!-- <menu-list class="right"></menu-list>   -->
        <div class="right">
            <ul class="menuList">
                <li v-for="(cai,i) of rows" :key="i">
                    <router-link :to="`/menudetails/${cai.cid}`">
                        <img :src="`http://127.0.0.1:4000/${cai.cpic}`" alt="">
                    </router-link>
                    <p class="caiTitle">{{cai.ctitle}}</p>
                    <!-- <van-icon name="add-o" color="#f00" class="iconPlus" size="3rem" /> -->
                    <change-count class="count"
                        :cid="cai.cid"
                        :cname="cai.ctitle"
                        :price="cai.price"
                        :tid="tNum"
                    ></change-count>
                    <p class="caiDes">
                        <span class="caitext">{{cai.soutitle}}</span>
                        <span class="price">¥{{cai.price}}</span>
                    </p>
                </li>
            </ul>
        </div>

        <menu-foot class="foot"></menu-foot>
    </div>
</template>
<script>
import navbarLeft from "../components/navbar_left";
import menuList from "../components/menuList.vue";
import menuHead from "../components/menuheader";
import menuFoot from "../components/menufoot";
import changeCount from "../components/changeCount";

export default {
    created() {
        this.types();
        this.show(0);
        // this.showlist();
    },
    components:{
        "navbar-left":navbarLeft,
        "menu-list":menuList,
        "menu-head":menuHead,
        "menu-foot":menuFoot,
        "change-count":changeCount

    },
    data() {
        return {
            rows:[],
            activeKey:0,
            tabs:[],
            tNum:1,
            cartlist:[],
            info:0,
            totalprice:0
        }
    },
    methods: {
        show(i){
            var url="product/list";
            var obj={tno:i+1};
            this.tNum=i+1;
            this.axios.get(url,{params:obj})
            .then((res)=>{
                this.rows=res.data.data;
            })
        } ,
        types(){
            var url="product/type";
            this.axios.get(url)
            .then((res)=>{
                this.tabs=res.data.data;
            })
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
    .left{
        position: fixed;
        z-index: 1;
        top: 3rem;
    }
    .right{
        margin-left: 5rem;
        padding-top: 3rem;
        margin-bottom: 3rem;
    }
    .head{
        position: fixed;
        z-index: 1;
    }
    .foot{
        position: fixed;
        bottom: 0;
        z-index: 2;
        width: 100%;
    }
    .menuList{
        display: flex;
        flex-wrap: wrap;
    }
    .menuList>li{
        width: 20rem;height: 20rem;
        position: relative;
        box-shadow: 0.3rem -0.3rem 1rem 0.2rem #333;
        border-radius: 1rem;
        margin: 1rem 1rem;
        overflow: hidden;
    }
    .menuList>li img{
        width: 100%;
        border-radius: 1rem;
    }
    .caiTitle{
        position: absolute;
        top: 1rem;left: 1rem;
        background: url("../assets/menu/icon/2019071617360947323.png") no-repeat 0 center;
        font-size: 1.2rem;
        color: #fff;
        line-height: 45px;
        padding-left: 1rem;
        margin: 0;
    }

    .caiDes{
        position: absolute;
        bottom: 0;
        width: 100%;
        /* background: #e60012; */
        background-image:-webkit-linear-gradient(bottom,#e60012 0%,#e60012 80%,rgba(0,0,0,0) 100%);
        color: #e60012;
        font-size: 1rem;
        margin: 0;
        display: flex;
        justify-content: space-around;
    }
    .caitext{
        /* background: #fff; */
        background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,0) 0%,#fff 20%,#fff 70%,rgba(0,0,0,0) 100%);
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        margin: 0.5rem 0;
    }
    .price{
        color: #fff;
        font-size: 2.5rem;
    }
    .count{
        position: absolute;
        top: 1rem; right: 1rem;
        width: 35%;
    }


</style>