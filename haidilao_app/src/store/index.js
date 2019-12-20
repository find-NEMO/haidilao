import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carCount:0,
    cartlist:[],
    totalprice:0,
    totalcount:0,
    cailist:[]
  },
  mutations: {
    // 修改购物车数量
    changeCount(id,count){
      var data={
        id:id,
        count:count
      }
      axios.get("/cart/updatecount",{params:data})
      .then((res)=>{
      })
  },

    // 清空购物车
    clearCarCount(state){
      state.carCount=0;
    },
    // 购物车列表
    showlist(state){
      axios.get("/cart/list")
      .then(res=>{
          state.cartlist=res.data.data;
          state.totalcount=0;
          state.totalprice=0;
          for(var i=0;i<state.cartlist.length;i++){
            state.totalcount+=state.cartlist[i].count;
            state.totalprice+=state.cartlist[i].count*state.cartlist[i].price;
          }
      })            
  }
  
  },
  getters:{
    getCarCount(state){
      return state.carCount;
    },
    getcarlist(state){
      return state.cartlist;
    },
    gettotalprice(state){
      return state.totalprice;
    },
    gettotalcount(state){
      return state.totalcount;
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
  },
//   showlist(state){
//     axios.get("/cart/list")
//     .then(res=>{
//         state.cartlist=res.data.data;
//         state.totalcount=0;
//         state.totalprice=0;
//         for(var i=0;i<state.cartlist.length;i++){
//           state.info+=state.cartlist[i].count;
//           state.totalprice+=state.cartlist[i].count*state.cartlist[i].price;
//         }
//     })            
// }


  },
  modules: {
  }
})
