import $ from 'jquery';

export default defineNuxtPlugin(nuxtApp => {
    window.jQuery = window.$ = $;
    return jQuery;
});