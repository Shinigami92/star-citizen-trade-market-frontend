import Vue from 'vue';
import Router from 'vue-router';
import { administrationRoutes } from './views/administration/router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'trading'
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('./views/sign-up/sign-up.vue')
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('./views/sign-in/sign-in.vue')
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('./views/privacy-policy/privacy-policy.vue')
    },
    {
      path: '/trading',
      name: 'trading',
      component: () => import('./views/trading/trading.vue')
    },
    {
      path: '/location/:id?',
      name: 'location',
      component: () => import('./views/location/location.vue')
    },
    {
      path: '/my-ships',
      name: 'my-ships',
      component: () => import('./views/my-ships/my-ships.vue')
    },
    {
      path: '/my-transactions',
      name: 'my-transactions',
      component: () => import('./views/my-transactions/my-transactions.vue')
    },
    {
      path: '/shout-out',
      name: 'shout-out',
      component: () => import('./views/shout-out/shout-out.vue')
    },
    ...administrationRoutes,
    {
      path: '*',
      redirect: 'trading'
    }
  ]
});
