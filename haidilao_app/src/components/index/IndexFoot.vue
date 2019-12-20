<template>
  <div>
    <mt-tabbar v-model="active" fixed>
        <mt-tab-item id="message" @click.native="changeState(0)">
        <img slot="icon" 
          :selectedImage="require('../../assets/index/main_navbar_home_select.png')"
          :normalImage="require('../../assets/index/main_navbar_home_normal.png')"
          :focused="currentIndex[0].isSelect"
          :src="require('../../assets/index/main_navbar_home_select.png')" class="imgstyle"/>
         首页   
        </mt-tab-item>
        <mt-tab-item id="contact" @click.native="changeState(1)">
         <img slot="icon" 
         :normalImage="require('../../assets/index/main_navbar_explore_select.png')"
         :selectedImage="require('../../assets/index/main_navbar_explore_normal.png')"
         :src="require('../../assets/index/main_navbar_explore_select.png')" class="imgstyle"/>
         社区
        </mt-tab-item>
        <mt-tab-item id="find" @click.native="changeState(2)">
          <img slot="icon" 
          :normalImage="require('../../assets/index/main_navbar_associator_select.png')"
          :selectedImage="require('../../assets/index/main_navbar_associator_normal.png')"
          :src="require('../../assets/index/main_navbar_associator_select.png')" class="imgstyle"/>
          会员
        </mt-tab-item>
        <mt-tab-item id="me" @click.native="changeState(3)">
          <img slot="icon" 
           :normalImage="require('../../assets/index/main_navbar_mine_select.png')"
           :selectedImage="require('../../assets/index/main_navbar_mine_normal.png')"
          :src="require('../../assets/index/main_navbar_mine_select.png')" class="imgstyle"/>
          我的
        </mt-tab-item>
      </mt-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return {
      //面板中显示子组件id
      active:"message",
      //创建数组保存图片焦点状态
      currentIndex:[
        {isSelect:true},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false}
      ],
      focused:false,
      selectedImage:{default:""},
      normalImage:{default:""}
    }
  },
  methods:{
    changeState(n){
      if(n==0){
        this.$router.go(0);
      }else if(n==1){
       this.$router.go(0); 
      }else if(n==2){
        this.$router.push("/Member");
      }else if(n==3){
        this.$router.go(0);
      }
    }
  }
}
</script>
<style scoped>
  .mint-tabbar > .mint-tab-item.is-selected{
    color:red;
    background-color:#fff;
  }
  .imgstyle{
    width:35px;
    height:35px; 
    margin-right:10px;
  }
  .mint-tabbar{
    border-top:1px solid #ddd;
  }
  
</style>
