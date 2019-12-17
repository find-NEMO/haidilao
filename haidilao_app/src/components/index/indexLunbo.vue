<template>
  <div id="lunbo">
  <mt-swipe :auto="4000">
    <mt-swipe-item><a href=""> <img src="../../assets/index/lunbo1.png" alt=""></a></mt-swipe-item>
    <mt-swipe-item><router-link to="/lunboDetail/2"> <img src="../../assets/index/lunbo2.png" alt=""></router-link></mt-swipe-item>
    <mt-swipe-item><a href=""> <img src="../../assets/index/lunbo3.png" alt=""></a></mt-swipe-item>
    <mt-swipe-item><a href=""> <img src="../../assets/index/lunbo4.png" alt=""></a></mt-swipe-item>
    <mt-swipe-item><a href=""> <img src="../../assets/index/lunbo5.png" alt=""></a></mt-swipe-item>
  </mt-swipe>
  </div>
</template>
<script>
export default {
  data(){
    return {
      
    }
  }
}
</script>
<style scoped>
  #lunbo{
    height:200px;
    text-align: center;
  }
  #lunbo img{
    width:100%;
    height:100%;
  }
</style>
<style >
  #lunbo .mint-swipe-indicator.is-active{
    background: #000;
    opacity:0.4;
  }
  #lunbo .mint-swipe-indicators{
    bottom:-4px;
  }
</style>
