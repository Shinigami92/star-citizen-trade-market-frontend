import Vue from 'vue';
import Router from 'vue-router';
import { administrationRoutes } from './views/administration/router';
import Home from './views/home/home.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			// @ts-ignore
			component: (): Promise<any> => import(/* webpackChunkName: "about" */ './views/about/about.vue')
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
			path: '/item',
			name: 'item',
			// @ts-ignore
			component: (): Promise<any> => import('./views/item/item.vue')
		},
		...administrationRoutes
	]
});
