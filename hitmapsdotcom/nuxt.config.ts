import {defineNuxtConfig} from "nuxt/config";
import type {HookResult} from "@nuxt/schema";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/i18n',
        'nuxt-icon',
        'nuxt-vuefire',
        'nuxt3-leaflet',
        '@nuxtjs/google-fonts',
        'dayjs-nuxt',
        'nuxt-umami'
    ],
    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ],
    ssr: true,
    //@ts-ignore
    i18n: {
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root'
        },
        strategy: 'no_prefix',
        langDir: 'locales',
        locales: [
            {
                code: 'de-DE',
                file: 'de-DE.json'
            },
            {
                code: 'en-US',
                file: 'en-US.json'
            },
            {
                code: 'es-ES',
                file: 'es-ES.json'
            },
            {
                code: 'fr-FR',
                file: 'fr-FR.json'
            },
            {
                code: 'it-IT',
                file: 'it-IT.json'
            },
            {
                code: 'ja-JP',
                file: 'ja-JP.json'
            },
            {
                code: 'pl-PL',
                file: 'pl-PL.json'
            },
            {
                code: 'pt-BR',
                file: 'pt-BR.json'
            },
            {
                code: 'ru-RU',
                file: 'ru-RU.json'
            },
            {
                code: 'zh-CN',
                file: 'zh-CN.json'
            },
            {
                code: 'zh-TW',
                file: 'zh-TW.json'
            }
        ],
        vueI18n: './i18n.config.ts',
        defaultLocale: 'en-US'
    },
    //@ts-ignore
    googleFonts: {
        families: {
            Roboto: [500]
        }
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
    //@ts-ignore
    umami: {
        id: '1ed4878f-7269-411b-b876-16e63f032ab2',
        host: 'https://analytics.hitmaps.com',
        autoTrack: true
    },
    dayjs: {
        plugins: ['timezone']
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
            firebaseEnvironment: process.env.FIREBASE_ENVIRONMENT,
            tournamentsDomain: process.env.TOURNAMENTS_DOMAIN
        }
    },
    hooks: {
        // fetch missions that need prerendering
        async 'prerender:routes'(ctx) {
            const games = await fetch(`${process.env.API_DOMAIN}/api/games`).then(res => res.json());
            for (const game of games) {
                const locationsWithMissions = await fetch(`${process.env.API_DOMAIN}/api/games/${game.slug}/locations`)
                    .then(res => res.json());

                for (const location of locationsWithMissions) {
                    for (const mission of location.missions) {
                        console.log(`/games/${game.slug}/${location.slug}/${mission.slug}`);
                        ctx.routes.add(`/games/${game.slug}/${location.slug}/${mission.slug}`);
                    }
                }
            }
        }
    }
})