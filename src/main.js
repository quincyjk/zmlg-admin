import Vue from 'vue'
import App from './App.vue'
import router from './router/routers'
import store from './store'
import Cookies from  "js-cookie"
Vue.prototype.$cookies=Cookies
// global css
import './assets/styles/index.scss'

import './router/index' // permission control
import './plugins'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
