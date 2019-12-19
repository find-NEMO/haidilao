import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carCount:0,
  },
  mutations: {
    // 增加购物车数量
    addCarCount(state,num){
      state.carCount+=num;
    },
    // 减少购物车数量
    subCarCount(state,num){
      state.carCount-=num;
    },
    // 清空购物车
    clearCarCount(state){
      state.carCount=0;
    }
  },
  getters:{
    getCarCount(state){
      return state.carCount;
    }
  },
  actions: {
    changeCount(i){
      var url;
      var data;
      // if(this.count<1){
      //     url="/cart/del",
      //     data={id:this.id}
      // }else{
          url="/cart/add";
          data={
              cid:this.cid,
              cname:this.cname,
              price:this.price,
              tid:this.tid,
              cnt:i
          }
      // }
      axios.get(url,{params:data})
      .then((res)=>{
          // console.log(res);
      })
  }

  },
  modules: {
  }
})
