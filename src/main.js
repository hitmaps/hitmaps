import {createApp, nextTick} from "vue";
import App from './App.vue'
import router from './router'
import axios from 'axios'
import i18n from './i18n.js';
import CountryFlag from 'vue-country-flag-next'
import {VueToastr} from 'vue-toastr';
import 'vue-toastr/dist/style.css';
import 'animate.css';
import titleMixin from './util/title.js';
import opengraphMixin from './util/opengraph.js';


axios.interceptors.request.use((config) => {
    if (localStorage.getItem('token') !== null) {
        config.headers = {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
    return config;
});
axios.interceptors.response.use((response) => {
    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
    }

    return response;
});

const app = createApp(App);

//For Copyright
app.config.globalProperties.$currentYear = new Date().getFullYear()
app.config.globalProperties.$http = axios
app.config.globalProperties.$domain = window.location.hostname.includes('localhost') ?
    'http://localhost:8000' :
    `${document.location.protocol}//${window.location.hostname}`;
app.config.globalProperties.$hostname = window.location.hostname;
const port = document.location.port ? `:${document.location.port}` : '';
app.config.globalProperties.$vueDomain = `${document.location.protocol}//${window.location.hostname}${port}`;

app.component('country-flag', CountryFlag);
app.use(i18n);
app.mixin(titleMixin);
app.mixin(opengraphMixin);

/**
 * Enable Bootstrap tooltips using Vue directive
 * @author Vitim.us
 * @see https://gist.github.com/victornpb/020d393f2f5b866437d13d49a4695b47
 * @example
 *   <button v-tooltip="foo">Hover me</button>
 *   <button v-tooltip.click="bar">Click me</button>
 *   <button v-tooltip.html="baz">Html</button>
 *   <button v-tooltip:top="foo">Top</button>
 *   <button v-tooltip:left="foo">Left</button>
 *   <button v-tooltip:right="foo">Right</button>
 *   <button v-tooltip:bottom="foo">Bottom</button>
 *   <button v-tooltip:auto="foo">Auto</button>
 *   <button v-tooltip:auto.html="clock" @click="clock = Date.now()">Updating</button>
 *   <button v-tooltip:auto.html.live="clock" @click="clock = Date.now()">Updating Live</button>
 */
app.use(VueToastr, {
    defaultPosition: 'toast-top-left',
    defaultTimeout: 3000,
    defaultProgressBar: true,
    defaultClassNames: ['animated', 'zoomInUp']
});
app.use(router);
app.mount('#app');