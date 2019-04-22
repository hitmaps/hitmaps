import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store/store'
import titleMixin from './util/title'

axios.defaults.withCredentials = true;

Vue.config.productionTip = false
//For Copyright
Vue.prototype.$currentYear = new Date().getFullYear()
Vue.prototype.$http = axios
Vue.prototype.$domain = document.location.protocol + "//" + window.location.hostname

Vue.mixin(titleMixin)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
