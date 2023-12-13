import { ScrollSpy } from 'bootstrap'

// @ts-ignore
export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.directive('scrollspy', {
        beforeMount(el, binding) {
            console.log(binding.value);
            //@ts-ignore
            nextTick(() => {
                const scrollspy = new ScrollSpy(el, {
                    target: binding.value,
                    offset: 20
                });
                //@ts-ignore
                console.log(scrollspy);

            });
        }
    });
});