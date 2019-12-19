<template>
  <div id="lunbo">
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="(item,i) of carousel" :key="i"><router-link to="/IndexLunboDetails/2"> <img :src="axios.defaults.baseURL + item.img_url" :alt="axios.defaults.baseURL"></router-link></mt-swipe-item>
    
  </mt-swipe>
  </div>
</template>
<script>
export default {
  data(){
    return {
      carousel:[]
    }
  },
  beforeCreate(){
    var url = "index/carousel1";
    console.log(1);
    this.axios.get(url).then(res=>{
      console.log(res.data);
      this.carousel=res.data;
    })
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
