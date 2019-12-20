<template>
  <div>
    <!-- 顶部导航栏 -->
    <title-bar></title-bar>
    <!-- 面板 -->
    <!-- 主要功能 -->
    <main-mode></main-mode>
    <!-- 轮播 -->
    <index-lunbo></index-lunbo>
    <!-- 商品 -->
    <index-goods></index-goods>
    <!-- 话题 -->
    <topic></topic>
    <!-- 底部导航条 -->
    <index-foot></index-foot>
  </div>
</template>
<script>
import TitleBar from "../components/index/TitleBar"
import MainMode from "../components/index/MainMode"
import IndexLunbo from "../components/index/IndexLunbo"
import IndexGoods from "../components/index/IndexGoods"
import Topic from "../components/index/Topic"
import IndexFoot from "../components/index/IndexFoot"
export default {
  components:{
    TitleBar,
    MainMode,
    IndexLunbo,
    IndexGoods,
    Topic,
    IndexFoot
  },
  data(){
    return {
       active:"home",
      //创建数组保存图片焦点状态
      currentIndex:[
        {isSelect:true},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false}
      ]
    }
  },
  methods: {
    changeState(n){
      //函数功能:将当前参数下标
      //对应数组值修改true其它修改false
      console.log(1);
      //1:创建循环,循环数组中内容
      for(var i=0;i<this.currentIndex.length;i++){
       //2:判断如果循环下标与n相等 20
       if(n==i){
        //3:当前下标元素true
        this.currentIndex[i].isSelect=true;
       }else{
        //4:其它元素修改false
        this.currentIndex[i].isSelect=false;
       }
       
      }
      if(n==1){
       this.$router.go(0); 
       } else if(n==2) {
         this.$router.go(0); 
       }  else if(n==3){
          this.$router.push("/member");
       }else if(n==4){
          this.$router.go(0); 
       }
    }
  },
  
}
</script>
<style scoped>
.mint-tabbar>.mint-tab-item{
  color:#000;
}
.mint-tabbar>.mint-tab-item.is-selected{
  background-color: transparent;
  color:red;
}
</style>