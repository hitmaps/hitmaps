//@ts-ignore
export default defineNuxtPlugin(nuxtApp => {
    //@ts-ignore
    const cookie = useCookie('i18n_redirected');
    nuxtApp.$i18n.setLocale(cookie.value || 'en-US');
});