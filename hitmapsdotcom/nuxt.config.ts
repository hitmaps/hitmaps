import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      '@nuxtjs/i18n',
      'nuxt-icon'
  ],
  //@ts-ignore
  i18n: {
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        redirectOn: 'root'
      },
      strategy: 'no_prefix',
      vueI18n: './i18n.config.ts'
  },
  devtools: { enabled: true },
  css: [
      "@/assets/css/main.scss"
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/_colors.scss" as *;',
        },
      },
    },
  }
})
