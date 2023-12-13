import * as bootstrap from 'bootstrap';
//@ts-ignore
export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('bootstrap', bootstrap);
})