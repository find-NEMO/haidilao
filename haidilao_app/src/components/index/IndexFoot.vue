<template>
  <div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="">
        <img slot="icon" src="../../assets/index/main_navbar_home_select.png">
        
      </mt-tab-item>
      <mt-tab-item id="社区">
        <img slot="icon" src="../../assets/index/main_navbar_explore_normal.png">
        社区
      </mt-tab-item>
      <mt-tab-item id="会员">
        <img slot="icon" src="../../assets/index/main_navbar_associator_normal.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../../assets/index/main_navbar_mine_normal.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return {
      selected:""
    }
  }
}
</script>
<style scoped>
  .mint-tabbar > .mint-tab-item.is-selected{
    color:red;
    background-color:#fff;
  }
  .mint-tabbar > .mint-tab-item:first-child img{
    width:40px;
    height:40px;
  }
  .mint-tabbar{
    border-top:1px solid #ddd;
  }
</style>
