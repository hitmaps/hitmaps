import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue'),
        },
        {
            path: '/terms-of-use',
            name: 'terms-of-use',
            component: () => import('./views/TermsOfUse.vue'),
        },
        {
            path: '/privacy-policy',
            name: 'privacy-policy',
            component: () => import('./views/PrivacyPolicy.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue'),
        },
        {
            path: '/brand',
            name: 'brand',
            component: () => import('./views/Brand.vue'),
        },
        {
            path: '/support-the-site',
            name: 'support-the-site',
            component: () => import('./views/SupportTheSite.vue'),
        },
        {
            path: '/games/:slug',
            name: 'level-select',
            component: () => import('./views/Location.vue'),
        },
        {
            path: '/admin/:game/:location/:mission',
            name: 'mission-admin',
            component: () => import('./views/MissionAdmin.vue'),
            props: true
        },
        {
            path: '/games/:game/:location/:mission/:difficulty?',
            name: 'map-view',
            component: () => import('./views/Map.vue'),
        },
        {
            path: '/auth',
            name: 'auth',
            component: () => import('./views/DiscordAuth.vue'),
        },
        {
            path: '/error',
            name: '500',
            component: () => import('./views/500.vue')
        },
        {
            path: '/:catchAll(.*)',
            name: '404',
            component: () => import('./views/404.vue')
        }
    ]
});

export default router;