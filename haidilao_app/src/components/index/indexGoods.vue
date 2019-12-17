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
        <a href="">
            <img src="../../assets/index/goods1.png" alt="">
            <p>海底捞口袋坚果1盒375克</p>
            <span>1380捞币</span>
            <span>兑换5805</span>
        </a>
        <a href="">
             <img src="../../assets/index/goods2.png" alt="">
            <p>小龙虾1盒装 6~8钱/只...</p>
            <span>999捞币</span>
            <span>兑换598</span>
        </a>
    </div>
    <!-- two -->
    <div class="goodsOne">
        <a href="">
            <img src="../../assets/index/goods3.png" alt="">
            <p>海底捞 捞派滑牛肉1盒...</p>
            <span>900捞币</span>
            <span>兑换292</span>
        </a>
        <a href="">
             <img src="../../assets/index/goods4.png" alt="">
            <p>海底捞捞派虾滑1盒 火...</p>
            <span>1099捞币</span>
            <span>兑换254</span>
        </a>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.goods .title{
    padding:0px 13px;
}
.title,.goodsOne{
    display:flex;
    justify-content: space-between;
    margin-top:10px;
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
    display:block;
    padding:0 10px;
}
.goodsOne img{
    width:100%;
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