import $ from 'jquery';

// @ts-ignore
export default defineNuxtPlugin(nuxtApp => {
    // @ts-ignore
    window.jQuery = window.$ = $;
    return jQuery;
});