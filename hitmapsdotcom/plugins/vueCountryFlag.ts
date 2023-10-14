import CountryFlag from 'vue-country-flag-next'

//@ts-ignore
export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('country-flag', CountryFlag);
})