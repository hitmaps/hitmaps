import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store/store'
import titleMixin from './util/title'
import ImageLoader from './plugins/ImageLoader'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

axios.defaults.withCredentials = true

Vue.config.productionTip = false
//For Copyright
Vue.prototype.$currentYear = new Date().getFullYear()
Vue.prototype.$http = axios
Vue.prototype.$domain =
    document.location.protocol + '//' + window.location.hostname

//Better method to deciding what type of request
Vue.prototype.$request = (post, endpoint, data) => {
    var header = {}
    if (localStorage.getItem('token') != null) {
        header = {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        }
    }
    return new Promise((resolve, reject) => {
        if (post) {
            axios
                .post(Vue.prototype.$domain + '/api/' + endpoint, data, {
                    headers: header,
                })
                .then(resp => {
                    if (resp.data.token != null) {
                        localStorage.setItem('token', resp.data.token)
                    }
                    resolve(resp)
                })
        } else {
            axios
                .get(Vue.prototype.$domain + '/api/' + endpoint, {
                    headers: header,
                })
                .then(resp => {
                    if (resp.data.token != null) {
                        localStorage.setItem('token', resp.data.token)
                    }
                    resolve(resp)
                })
        }
    })
}

Vue.mixin(titleMixin)
Vue.use(ImageLoader)

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
