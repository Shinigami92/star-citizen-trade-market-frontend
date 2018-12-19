import { RouteConfig } from 'vue-router';

export const administrationRoutes: RouteConfig[] = [
	{
		path: '/administration/account',
		name: 'administration-account',
		// @ts-ignore
		component: (): Promise<any> => import('./account/index.vue')
	},
	{
		path: '/administration/game-version',
		name: 'administration-game-version',
		// @ts-ignore
		component: (): Promise<any> => import('./game-version/index.vue')
	},
	{
		path: '/administration/item',
		name: 'administration-item',
		// @ts-ignore
		component: (): Promise<any> => import('./item/index.vue')
	},
	{
		path: '/administration/location',
		name: 'administration-location',
		// @ts-ignore
		component: (): Promise<any> => import('./location/index.vue')
	},
	{
		path: '/administration/location-type',
		name: 'administration-location-type',
		// @ts-ignore
		component: (): Promise<any> => import('./location-type/index.vue')
	}
];