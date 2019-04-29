import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Location from './views/Location.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/games/:slug',
      name: 'level-select',
      component: Location
    },
    {
      path: '/games/:slug/:location/:mission/:difficulty',
      name: 'map-view',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "map-view" */ './views/Map.vue')
    },
    {
      path: '/user/auth/:redirect?',
      name: 'user-auth',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "user-auth" */ './views/Auth.vue')
    },
  ]
})
