import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store/store'

axios.defaults.withCredentials = true;

Vue.config.productionTip = false
//For Copyright
Vue.prototype.$currentYear = new Date().getFullYear()
Vue.prototype.$http = axios
Vue.prototype.$domain = document.location.protocol + "//" + window.location.hostname

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + " | HITMAN™ 2 Maps"
  next()
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
