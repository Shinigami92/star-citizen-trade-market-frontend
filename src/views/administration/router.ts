import { RouteConfig } from 'vue-router';

export const administrationRoutes: RouteConfig[] = [
	{
		path: '/administration/game-version',
		name: 'game-version',
		// @ts-ignore
		component: (): Promise<any> => import('./game-version/index.vue')
	}
];
