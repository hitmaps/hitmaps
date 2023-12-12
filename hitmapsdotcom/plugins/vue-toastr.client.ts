import {VueToastr} from 'vue-toastr';
import 'vue-toastr/dist/style.css';

// @ts-ignore
export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(VueToastr, {
        defaultPosition: 'toast-top-left',
        defaultTimeout: 3000,
        defaultProgressBar: true,
        defaultClassNames: ['animated', 'zoomInUp']
    });
});