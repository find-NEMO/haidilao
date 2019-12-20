import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Member from '../views/Member'
import Jump from '../views/Jump'
import IndexMessage from '../views/IndexMessage'

import Index from '../views/Index.vue'
import IndexLunboDetails from '../views/IndexLunboDetails.vue'
import Login from '../components/Login.vue'
import Loginp from '../components/Loginp.vue'
import Findpwd from '../components/Findpwd.vue'
import Privacy from '../components/Privacy.vue'
import test from '../views/test.vue'


Vue.use(VueRouter)

const routes = [
    {path:'/IndexMessage',component:IndexMessage},
    {path:'/Jump/:tid',component:Jump},
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
  {path:"/home",component:Index},
  {path:"/IndexLunboDetails/:id",
  component:IndexLunboDetails},
  {path:"/IndexLunboDetails/2",component:IndexLunboDetails},
  {path:"/test",component:test},
  {
    path:"/login",
    component:()=>import(/* webpackChunkName:"login" */ "../components/Login.vue")
  },
  {
    path:"/loginp",
    component:()=>import(/* webpackChunkName:"loginp" */ "../components/Loginp.vue")
  },
  {
    path:"/findpwd",
    component:()=>import(/* webpackChunkName:"findpwd" */ "../components/Findpwd.vue")
  },
  {
    path:"/findpwd",
    component:()=>import(/* webpackChunkName:"findpwd" */ "../components/Findpwd.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
//http://127.0.0.1:8080/#/Exam02
