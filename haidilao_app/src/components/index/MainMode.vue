<template>
  <div id="firstFloor">
    <div class="one">
      <a href=""><h4>排号/预定</h4><span> 早预定不等位</span></a>
      <router-link to="/menu"><h4>在线点餐</h4><span>让你快人一步</span></router-link>
      <a href=""><h4>商城</h4><span>好物任你兑换</span></a>
    </div>
    <ul>
      <li v-for="(item,i) of list" :key="i">
       <a href=""> <img :src="item.url" alt=""></a>
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list:[
        {name:"评价",url:require("../../assets/index/evaluate_small.png")},
        {name:"外卖",url:require("../../assets/index/takeout_small.png")},
        {name:"游戏",url:require("../../assets/index/game_small.png")},
        {name:"征集",url:require("../../assets/index/collection_small.png")}
      ]
    }
  }
}
</script>
<style scoped>
*{
  padding:0;
  margin:0;
  font-family: "Microsoft YaHei";
}
  #firstFloor{
    padding:5px;
  }
  .one{
    display:flex;
    justify-content: space-around;
  }
  .one>a{
    display:block;
    text-align: center; 
    width:140px;
    height:150px;
  }
  .one>a>span{
    color:#666;
    font-size:14px;
  }
  h4{
    color:#000;
    font-size:16px;
    font-weight: bold;
  }
  .one>a:first-child{
    background:url("../../assets/index/row_num_big.png") no-repeat;
    background-size:100% 100%;
  }
  .one>a:nth-child(2){
    background:url("../../assets/index/reserve_big.png") no-repeat;
    background-size:100% 100%;
  }
  .one>a:last-child{
    background:url("../../assets/index/store_big.png") no-repeat;
    background-size:100% 100%;
  }
  ul{
    list-style: none;
    display: flex;
    justify-content: space-around;
    font-size:14px;
    color:#666;
    border-bottom:1px solid #ddd;
    padding-bottom:25px;
    margin:20px 0 15px 0;
  }
  ul img{
    width:30px;
  }
  
  
</style>
