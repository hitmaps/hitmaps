import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
//For Copyright
Vue.prototype.$currentYear = new Date().getFullYear()
Vue.prototype.$http = axios

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + " | HITMAN™ 2 Maps"
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
