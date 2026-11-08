// Empty stub for Nuxt
// @ts-ignore
export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.directive('tooltip', {
        beforeMount: function bsTooltipCreate(el, binding) {
        }
    });
});