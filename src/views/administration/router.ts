import { RouteConfig } from 'vue-router';

export const administrationRoutes: RouteConfig[] = [
	{
		path: '/administration/account',
		name: 'administration-account',
		// @ts-ignore
		component: (): Promise<any> => import('./account/index.tsx')
	},
	{
		path: '/administration/game-version',
		name: 'administration-game-version',
		// @ts-ignore
		component: (): Promise<any> => import('./game-version/index.tsx')
	},
	{
		path: '/administration/item',
		name: 'administration-item',
		// @ts-ignore
		component: (): Promise<any> => import('./item/index.tsx')
	},
	{
		path: '/administration/item-price',
		name: 'administration-item-price',
		// @ts-ignore
		component: (): Promise<any> => import('./item-price/index.tsx')
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
