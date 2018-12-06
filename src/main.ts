import Vue, { CreateElement, VNode } from 'vue';
import App from './app.vue';
import router from './router';
import { createProvider } from './vue-apollo';

Vue.config.productionTip = false;

new Vue({
	apolloProvider: createProvider(),
	render: (h: CreateElement): VNode => h(App),
	router
}).$mount('#app');
