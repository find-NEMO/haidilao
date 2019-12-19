<template>
  <div class="goods">
    <!-- title -->
    <div class="title">
        <h4>热兑好货</h4>
        <a>更多商品<img src="../../assets/index/coin_go_black.png" alt=""> </a>
    </div>
    <!-- content -->
    <!--one -->
    <div class="goodsOne">
        <a href="" v-for="(item,i) of goods" :key="i">
            <img :src="axios.defaults.baseURL + item.img_url" :alt="axios.defaults.baseURL">
            <p>{{item.goods_title}}</p>
            <span>{{item.price}}捞币</span>
            <span>兑换{{item.goods_count}}</span>
        </a>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            goods:[]
        }
    },
    beforeCreate() {
        var url = "index/goods";
        console.log(3);
        this.axios.get(url).then(res=>{
        console.log(res.data);
        this.goods=res.data;
    })
    },
}
</script>
<style scoped>
.goods .title{
    padding:0px 13px;
}
.title{
    display:flex;
    justify-content: space-between;
    margin-top:10px;
}
.goodsOne{
    display:flex;
    justify-content: flex-start;
    margin-top:10px;
    flex-wrap: wrap;
}
h4{
    margin-bottom:10px;
}
.title a{
   margin-top:20px;
   font-size:12px;
}
.title img{
    width:5px;
    margin-left:5px;
}
.goodsOne a{
    padding:0 10px;
}
.goodsOne img{
    width:167px;
}
.goodsOne p{
    color:#000;
    font-size:14px;
}
.goodsOne a>span:nth-child(3){
    font-weight:bold;
    margin-right:10px;
    color:#e4c289;
}
.goodsOne a>span:last-child{
    color:#666;
    font-size:12px;
}
</style>