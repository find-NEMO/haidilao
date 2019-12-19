import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Member from '../views/Member'
import Jump from '../views/Jump'

import Index from '../views/Index.vue'
import lunboDetail from '../views/lunboDetail.vue'

Vue.use(VueRouter)

const routes = [
    {path:'/Jump',component:Jump},
    {path:'/Member',component:Member},
  // {path: '/',name: 'home',component: Home},
  // {path: '/about',name: 'about',
  //  route level code-splitting
  //  this generates a separate chunk (about.[hash].js) for this route
  //  which is lazy-loaded when the route is visited.
  //  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {path:"/menu",component:()=>import(/* webpackChunkName:"menu" */ "../views/Menu.vue")},
  {path:"/menudetails/:lid",component:()=>import(/* webpackChunkName:"menudetails" */ "../views/MenuDetails.vue")},
  {path:"/index",component:Index},
  {path:"/lunboDetail/2",component:lunboDetail}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
//http://127.0.0.1:8080/#/Exam02