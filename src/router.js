import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Location from './views/Location.vue'
import TermsOfUse from './views/TermsOfUse.vue'
import PrivacyPolicy from './views/PrivacyPolicy.vue'
import About from "./views/About";
import OneYear from "./views/SpecialEvents/OneYear";
import SupportTheSite from "./views/SupportTheSite";
import Brand from "./views/Brand";
import MissionAdmin from "./views/MissionAdmin.vue";

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/terms-of-use',
            name: 'terms-of-use',
            component: TermsOfUse,
        },
        {
            path: '/privacy-policy',
            name: 'privacy-policy',
            component: PrivacyPolicy,
        },
        {
            path: '/one-year',
            name: 'one-year',
            component: OneYear
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/brand',
            name: 'brand',
            component: Brand,
        },
        {
            path: '/support-the-site',
            name: 'support-the-site',
            component: SupportTheSite,
        },
        {
            path: '/games/:slug',
            name: 'level-select',
            component: Location,
        },
        {
            path: '/admin/:game/:location/:mission',
            name: 'mission-admin',
            component: MissionAdmin,
            props: true
        },
        {
            path: '/games/:game/:location/:mission/:difficulty?',
            name: 'map-view',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "map-view" */ './views/Map.vue'),
        },
        {
            path: '/auth',
            name: 'auth',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "auth" */ './views/DiscordAuth.vue'),
        },
        {
            path: '*',
            name: '404',
            component: () => import('./views/404.vue')
        },
        {
            path: '/error',
            name: '500',
            component: () => import('./views/500.vue')
        }
    ],
})
