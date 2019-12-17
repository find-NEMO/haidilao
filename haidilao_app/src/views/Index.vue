<template>
  <div>
    <!-- 顶部导航栏 -->
    <titlebar></titlebar>
    <!-- 面板 -->
    <!-- firstFloor -->
    <first-floor></first-floor>
    <!-- 轮播 -->
    <index-lunbo></index-lunbo>
    <!-- 商品 -->
    <index-goods></index-goods>
    <!-- 话题 -->
    <topic></topic>
    <!-- 底部导航条 -->
    
  </div>
</template>
<script>
import titlebar from "../components/index/titleBar"
import firstFloor from "../components/index/firstFloor"
import indexLunbo from "../components/index/indexLunbo"
import indexGoods from "../components/index/indexGoods"
import topic from "../components/index/topic"
import tabBar from "../components/index/tabBar"

export default {
  components:{
    titlebar,
    firstFloor,
    indexLunbo,
    indexGoods,
    topic,
    // tabBar
  },
//   data(){
//     return {
//        active:"message",
//       //创建数组保存图片焦点状态
//       currentIndex:[
//         {isSelect:true},
//         {isSelect:false},
//         {isSelect:false},
//         {isSelect:false}
//       ]
//     }
//   },
//   methods: {
//     changeState(n){
//       //函数功能:将当前参数下标
//       //对应数组值修改true其它修改false
//       //1:创建循环,循环数组中内容
//       for(var i=0;i<this.currentIndex.length;i++){
//        //2:判断如果循环下标与n相等 20
//        if(n==i){
//         //3:当前下标元素true 10:22
//         this.currentIndex[i].isSelect=true;
//        }else{
//         //4:其它元素修改false
//         this.currentIndex[i].isSelect=false;
//        }
       
//       }

//     }
//   },
  
}
</script>
<style scoped>
/* .mint-tabbar>.mint-tab-item{
  color:#999999;
}
.mint-tabbar>.mint-tab-item.is-selected{
  background-color: transparent;
  color:#45c018;
} */
</style>