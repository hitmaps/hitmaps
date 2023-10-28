import {defineNuxtConfig} from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/i18n',
        'nuxt-icon',
        'nuxt-vuefire'
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
    //@ts-ignore
    vuefire: {
        config: {
            apiKey: "AIzaSyDEqqb-AA5R7V6GjmvY4QPQN7ZHJzKsX64",
            authDomain: "hitman2maps.firebaseapp.com",
            databaseURL: "https://hitman2maps.firebaseio.com",
            projectId: "hitman2maps",
            storageBucket: "hitman2maps.appspot.com",
            messagingSenderId: "458558604415",
            appId: "1:458558604415:web:9c0365be0363486339ab4a",
            measurementId: "G-PEY4KPF9WM"
        }
    },
    devtools: {enabled: true},
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
    },
    runtimeConfig: {
        public: {
            apiDomain: process.env.API_DOMAIN,
            firebaseEnvironment: process.env.FIREBASE_ENVIRONMENT
        }
    }
})
