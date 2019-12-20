import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Member from '../views/Member'
import Jump from '../views/Jump'
import IndexMessage from '../views/IndexMessage'

//my-four
import Firstpage from '../views/four/Firstpage'
import Enrollpage from '../views/four/Enrollpage'
import Replace from '../views/four/Replace'
import userName from '../views/replace/userName'
import styleSign from '../views/replace/styleSign'
import emall from '../views/replace/emall'
import trueName from '../views/replace/trueName'
import phone from '../views/replace/phone'
import QRcode from '../views/four/QRcode'
import aboutQY from '../views/list/aboutQY'
import collect from '../views/list/collect'
import haixuan from '../views/list/haixuan'
import pleaseHelp from '../views/list/pleaseHelp'
import Message from '../views/list/Message'
import notice from '../views/list/notice'
import tousuBiao from '../views/list/tousuBiao'
import laobi from '../views/four/laobi'


import Index from '../views/Index.vue'
import IndexLunboDetails from '../views/IndexLunboDetails.vue'
import Login from '../components/Login.vue'
import Loginp from '../components/Loginp.vue'
import Findpwd from '../components/Findpwd.vue'
import Privacy from '../components/Privacy.vue'



Vue.use(VueRouter)

const routes = [
  {path:'/laobi',component:laobi},
  {path:'/notice',component:notice},
  {path:'/tousubiao',component:tousuBiao},
  {path:'/message',component:Message},
  {path:'/pleasehelp',component:pleaseHelp},
  {path:'/haixuan',component:haixuan},
  {path:'/collect',component:collect},
  {path:'/aboutqy',component:aboutQY},
  {path:'/qrcode',component:QRcode},
  {path:'/phone',component:phone},
  {path:'/firstpage',component:Firstpage},
  {path:'/enrollpage',component:Enrollpage},
  {path:'/replace',component:Replace},
  {path:'/username',component:userName},
  {path:'/stylesign',component:styleSign},
  {path:'/emall',component:emall},
  {path:'/truename',component:trueName},
  //以上为my-four
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
  {path:"/cart",component:()=>import(/* webpackChunkName:"cart" */ "../views/Cart.vue")},

  {path:"/home",component:Index},
  {path:"/IndexLunboDetails/:id",
  component:IndexLunboDetails},
  {path:"/IndexLunboDetails/2",component:IndexLunboDetails},
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
