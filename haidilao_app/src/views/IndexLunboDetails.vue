<template>
  <div>
    <!-- 头部 -->
    <div class="head">
      <router-link to="/"><img src="../assets/index/su_header_bar_back.png" alt=""></router-link>
      <span>商品详情</span>
    </div>
    <!-- 主图 -->
    <div class="img1"><img src="../assets/index/lunbo_detail0.png" alt=""></div>
    <!-- 主题 -->
    <div class="title">
      <h2>【新品】瑞幸咖啡饮品代金券</h2>
      <p>吃完火锅，来杯咖啡压压惊~</p>
      <h4>369</h4>
      <span>捞币</span>
    </div>
    <!-- 会员等级 -->
    <div class="vip">
      <p>会员等级</p>
      <p><span>红海<img src="../assets/index/red_right.png" alt=""></span>
      <span>银海<img src="../assets/index/red_right.png" alt=""></span>
      <span>金海<img src="../assets/index/red_right.png" alt=""></span>
      <span>黑海<img src="../assets/index/red_right.png" alt=""></span></p>
    </div>
    <!--库存 -->
    <div class="stock">
      <span>库存：</span>
      <span>999+件</span>
    </div>
    <!-- 推荐商品 -->
    <div class="goods">
      <p>推荐商品</p>
      <mt-swipe :auto="0" :show-indicators="false">
        <mt-swipe-item>
          <a href="">
            <img src="../assets/index/lunbo_detail4.png" alt="">
            <p>海底捞创意耳饰（1副）</p>
          </a>
           <a href="">
            <img src="../assets/index/lunbo_detail5.png" alt="">
            <p>海底捞口袋坚果1盒375克</p>
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="">
            <img src="../assets/index/lunbo_detail6.png" alt="">
            <p>海底捞手做牛油火锅底料500g*2包</p>
          </a>
          <a href="">
            <img src="../assets/index/lunbo_detail7.png" alt="">
            <p>【新品】儿童餐具礼盒装5件套</p>
          </a>
        </mt-swipe-item>
      </mt-swipe> 
    </div>
    <!-- 商品评价 -->
    <div class="stock assess">
      <span>商品评价（0）</span>
      <span>展开 好评率：0 <img src="../assets/index/my_arrow.png" alt=""> </span>
    </div>
    <!-- 商品详情 -->
    <div class="details">
      <p>商品详情</p>
      <img src="../assets/index/lunbo_detail3.png" alt="">
      <h3><img src="../assets/index/title_left.png" alt=""> 产品<span>信息</span><img src="../assets/index/title_right.png" alt=""> </h3>
      <img src="../assets/index/lunbo_detail2.png" alt="">
      <img src="../assets/index/lunbo_detail1.png" alt="">
      <img src="../assets/index/lunbo_detail9.png" alt="">
      <img src="../assets/index/lunbo_detail8.png" alt="">
    </div>
    <!-- 底部导航栏 -->
      <ul class="bottom">
        <li><img src="../assets/index/lunbo_erji.png" alt="">
        <p>客服</p></li>
        <li><img src="../assets/index/star_gray_big.png" alt=""><p>收藏</p></li>
        <li>立即兑换</li>
      </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  }
}
</script>
<style scoped>
.head{
    display:flex;
    height:35px;
    padding:8px 5px; 
  }
.head img{
  width:30px;
  margin-top:5px;
}
.head span{
  font-size:20px;
  padding-top:7px;
  margin:0 auto;
}
.img1 img{
    width:100%;
}
.title,.vip,.stock,.goods,.details{
  width:350px;
  margin:0 auto;
  box-shadow: 0px 8px 10px 0px #ddd;
  border-radius:5px;
  background:white;
}
.title{
  padding-bottom:30px;
  text-align: center;
  position:relative;
  top:-120px;
} 
.title h2{
  padding-top:15px;
  color:red;
}
.title p:nth-child(2){
  border-bottom:1px dashed #666;
  margin:0 auto;
  width:320px;
  padding-bottom:15px;
  font-size:14px;
}
.title h4{
  font-size:30px;
  color:red;
  margin:15px 0 0 0;
}
.title span{
  font-size:13px;
}
.vip,.stock{
  height:100%;
  border:1px solid #ddd;
  display:flex;
  justify-content: space-between;
}
.vip{
  margin-top:-105px;
  font-size:14px;
  margin-bottom:15px;
}
.vip p,.stock span{
  margin:12px 10px;
}
.vip span{
  font-weight: bold;
  color:red;
  margin:0 2px;
}
.vip>p>span>img{
  vertical-align: bottom;
}
.goods{
  height:210px;
  margin-top:30px;
}
.goods p{
  padding-left:10px;
}
.goods .mint-swipe-item{
  text-align: center;
  display:flex;
  justify-content: space-between;
 } 
.goods a img{
  width:90%;
  height:122px;
}
.goods a>p{
  color:#000;
  font-size:15px;
  padding:0;
  margin:0 5px;
}
.stock img{
  vertical-align: middle;
  height:20px;
}
.stock.assess{
  margin-top:20px;
  margin-bottom:20px;
}
.details{/*不是p标签的元素*/
  text-align: center;
  height:100%;
}
.details p{
  padding:10px 0 10px 0;
  margin:10px 0 10px 10px;
  font-size:16px;
  width:320px;
  border-bottom:1px solid #ddd;
  text-align: start;
}
.details img{
  width:95%;
}
.details h3>span{
  color:red;
}
.details h3>img{
  width:20%;
  position: relative;
  top:10px;
}
.details img:last-child{
  margin-bottom:10px;
}
.bottom{
  width:100%;
  height:100%;
  list-style: none;
  display: flex;
  margin-top:30px;
  border:1px solid #ddd;
  height:100%;
  justify-content:space-around; 
}
.bottom li{
  text-align: center;
  border-right:1px solid #ddd; 
  padding-bottom:5px;
}
.bottom li p{
  margin:0;
  padding:0;
}
.bottom li:first-child,
.bottom li:nth-child(2){
  width:25%;
}
.bottom li:last-child{
  width:50%;
  padding-top:20px;
  color:#fff;
  background:red;
}
.bottom li:first-child>img,
.bottom li:nth-child(2)>img{
  width:30px;
  height:30px;
}
</style>