import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import vant from "vant"
import "vant/lib/index.css"
import MintUI from "mint-ui"
import "mint-ui/lib/style.css"


axios.defaults.baseURL="http://127.0.0.1:4000";
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios;
Vue.use(vant);
Vue.use(MintUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
