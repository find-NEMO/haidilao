<template>
  <div>
    <img :src="focused?selectedImage:normalImage" alt="" class="imgstyle"/>
  </div>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  props:{
    focused:false,
    selectedImage:{default:""},
    normalImage:{default:""}
  }
}
</script>
<style scoped>
  /* .mint-tabbar > .mint-tab-item.is-selected{
    color:red;
    background-color:#fff;
  } */
  .imgstyle{
    width:35px;
    height:35px;
  }
  /* .mint-tabbar{
    border-top:1px solid #ddd;
  } */
</style>
  }
</style>
