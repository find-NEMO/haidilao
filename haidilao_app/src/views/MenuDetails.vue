<template>
    <div>
        <menu-head class="head"></menu-head>
        <div class="headimg">
            <a href="/menu" class="back">
                <van-icon name="arrow-left" />
                继续选购
            </a>
            <div class="img">
                <img :src="`http://121.36.9.253:4000/${rows.cpic}`" alt="">
            </div>    
            <p>图片仅供参考，请以实物为准</p>
        </div>
        <div>
            <h3>{{rows.ctitle}}</h3>
            <div class="pricerow">
                <div class="price">¥{{rows.price}}</div>
                <!-- <div class="count">
                    <div v-show="count>0">
                        <a href="javascript:;" @click="changeCount(-1)">－</a>
                        <span>{{count}}</span>
                    </div>
                    <a href="javascript:;" @click="changeCount(1)">＋</a>
                </div> -->
                <change-count class="changecount"
                    :cid="cid"
                    :cname="rows.ctitle"
                    :price="rows.price"
                    :tid="rows.tno"
                
                ></change-count>
            </div>
        </div>
        <div class="details">
            <h4>商品介绍</h4>
            <p>{{rows.details}}</p>
        </div>
        <menu-foot class="foot"></menu-foot>
    </div>
</template>
<script>
import menuFoot from "../components/menufoot";
import changeCount from "../components/changeCount";
import menuHead from "../components/menuheader";

export default {
    created() {
        this.showDetails();
    },
    components:{
        "menu-foot":menuFoot,
        "change-count":changeCount,
        "menu-head":menuHead
    },
    data() {
        return {
            rows:{cpic:"wait.gif"},
            cid:1
        }
    },
    methods: {
        showDetails(){
            var arr=window.location.href.split("/");
            var cid=arr[arr.length-1];
            this.cid=cid;
            var url="/product/detail/"+cid;
            this.axios.get(url)
            .then(res => {
                 this.rows=res.data.data[0];
                 console.log(this.rows.cpic);
            })
        }
    },
}
</script>
<style scoped>
    .foot{
        position: fixed;
        bottom: 0;
        z-index: 2;
    }
    .headimg{position: relative;}
    .headimg>.back{
        display: block;
        color: #9391a6;
        position: absolute;
        top: 0.5rem;left: 0.5rem;
        padding: 1rem;
        border-radius: 50%;
    }
    .img{
        width: 100%;height: 20rem;
        overflow: hidden;
    }
    .img img{
        margin-top: -5rem;
        width: 100%;
    }
    .headimg>p{
        background: #000;
        opacity: 0.8;
        color: #9391a6;
        font-size: 0.5rem;
        width: 100%;
        position: absolute;
        bottom: 0;
        margin: 0;
        padding: 0.2rem;
        text-align: end;
    }
    h3,.pricerow,.details{
       padding: 0 1rem; 
    }
    .pricerow{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        color: #f00;
        font-weight: bold;
        font-size: 2rem;
    }
    .details p{
        color: #9391a6;
    }
    .changecount{
        color: #9391a6;
        font-weight: normal;
    }

</style>