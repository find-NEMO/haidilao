<template>
    <div>
         <mt-tabbar v-model="active" fixed>
      <mt-tab-item id="home" @click.native="changeState(1)">
        
        <div
        :selectedImage="require('../assets/index/main_navbar_home_select.png')"
        :normalImage="require('../assets/index/main_navbar_home_normal.png')"
        :focused="currentIndex[0].isSelect"
        >
        <img :src="focused?selectedImage:normalImage" alt="" class="imgstyle"/>
        </div>首页  
      </mt-tab-item>
      <mt-tab-item id="shequ" @click.native="changeState(2)">
        <div
        :selectedImage="require('../assets/index/main_navbar_explore_select.png')"
        :normalImage="require('../assets/index/main_navbar_explore_normal.png')"
        :focused="currentIndex[0].isSelect"
        >
        <img :src="focused?selectedImage:normalImage" alt="" class="imgstyle"/>
        </div>社区 
      </mt-tab-item>
      <mt-tab-item id="vip" @click.native="changeState(3)">
        <div
        :selectedImage="require('../assets/index/main_navbar_associator_select.png')"
        :normalImage="require('../assets/index/main_navbar_associator_normal.png')"
        :focused="currentIndex[0].isSelect"
        >
        <img :src="focused?selectedImage:normalImage" alt="" class="imgstyle"/>
        </div>会员 
      </mt-tab-item>
      <mt-tab-item id="my" @click.native="changeState(4)">
        <div
        :selectedImage="require('../assets/index/main_navbar_mine_select.png')"
        :normalImage="require('../assets/index/main_navbar_mine_normal.png')"
        :focused="currentIndex[0].isSelect"
        >
        <img src="`focused?'../assets/index/main_navbar_mine_select.png':'../assets/index/main_navbar_mine_normal.png'`" alt="" class="imgstyle"/>
        </div>我的 
      </mt-tab-item>
    </mt-tabbar>
    </div>
</template>
<script>
export default {
  data(){
    return {
       active:"home",
      //创建数组保存图片焦点状态
      currentIndex:[
        {isSelect:true},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false}
      ],
      focused:true,
    selectedImage:{default:""},
    normalImage:{default:""}
    }
  },
  methods:{
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
    }
  }
}
</script>