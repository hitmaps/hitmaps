import { createApp } from "vue";
import App from './App.vue'
import router from './router'
import axios from 'axios'
import i18n from './i18n.js';
import CountryFlag from 'vue-country-flag-next'
import {VueToastr} from 'vue-toastr';
import 'vue-toastr/dist/style.css';
import 'animate.css';


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

//Vue.mixin(titleMixin);
//Vue.mixin(opengraphMixin);
//Vue.use(ImageLoader);

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
app.directive('tooltip', {
    bind: function bsTooltipCreate(el, binding) {
        let trigger = 'hover focus';
        binding.modifiers.html = false;

        if (binding.modifiers.focus || binding.modifiers.hover || binding.modifiers.click) {
            const t = [];
            if (binding.modifiers.focus) t.push('focus');
            if (binding.modifiers.hover) t.push('hover');
            if (binding.modifiers.click) t.push('click');
            trigger = t.join(' ');
        }

        Vue.nextTick(() => {
            $(el).tooltip({
                title: binding.value,
                placement: binding.arg,
                trigger: trigger,
                html: binding.modifiers.html
            });
        });
    },
    update: function bsTooltipUpdate(el, binding) {
        const $el = $(el);
        $el.attr('title', binding.value).tooltip();

        const data = $el.data('bs.tooltip');
        if (binding.modifiers.live) { // update live without flickering (but it doesn't reposition)
            if (data.$tip) {
                if (data.options.html) data.$tip.find('.tooltip-inner').html(binding.value);
                else data.$tip.find('.tooltip-inner').text(binding.value);
            }
        } else {
            if (data.inState !== undefined && (data.inState.hover || data.inState.focus || data.inState.click)) {
                $el.tooltip('show');
            }
        }
    },
    unbind(el, binding) {
        $(el).tooltip('dispose');
    },
});
app.use(VueToastr, {
    defaultPosition: 'toast-top-left',
    defaultTimeout: 3000,
    defaultProgressBar: true,
    defaultClassNames: ['animated', 'zoomInUp']
});
app.use(router);
app.mount('#app');