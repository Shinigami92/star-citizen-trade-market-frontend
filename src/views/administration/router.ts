import { RouteConfig } from 'vue-router';

export const administrationRoutes: RouteConfig[] = [
  {
    path: '/administration/account',
    name: 'administration-account',
    component: () => import('./account/index.vue')
  },
  {
    path: '/administration/game-version',
    name: 'administration-game-version',
    component: () => import('./game-version/index.vue')
  },
  {
    path: '/administration/item',
    name: 'administration-item',
    component: () => import('./item/index.vue')
  },
  {
    path: '/administration/item-price',
    name: 'administration-item-price',
    component: () => import('./item-price/index.vue')
  },
  {
    path: '/administration/location',
    name: 'administration-location',
    component: () => import('./location/index.vue')
  },
  {
    path: '/administration/location-type',
    name: 'administration-location-type',
    component: () => import('./location-type/index.vue')
  }
];
