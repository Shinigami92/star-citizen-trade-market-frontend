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
			// @ts-ignore
			component: (): Promise<any> => import('./views/sign-up/sign-up.vue')
		},
		{
			path: '/sign-in',
			name: 'sign-in',
			// @ts-ignore
			component: (): Promise<any> => import('./views/sign-in/sign-in.vue')
		},
		{
			path: '/trading',
			name: 'trading',
			// @ts-ignore
			component: (): Promise<any> => import('./views/trading/trading.vue')
		},
		{
			path: '/my-ships',
			name: 'my-ships',
			// @ts-ignore
			component: (): Promise<any> => import('./views/my-ships/my-ships.vue')
		},
		{
			path: '/my-transactions',
			name: 'my-transactions',
			// @ts-ignore
			component: (): Promise<any> => import('./views/my-transactions/my-transactions.vue')
		},
		...administrationRoutes,
		{
			path: '*',
			redirect: 'trading'
		}
	]
});
