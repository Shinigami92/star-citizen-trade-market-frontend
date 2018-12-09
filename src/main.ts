import '@fortawesome/fontawesome-free/css/all.css';
import Vue, { CreateElement, VNode } from 'vue';
import App from './app.vue';
import { createProvider } from './plugins/apollo';
import './plugins/moment';
import './plugins/vuetify';
import router from './router';

Vue.config.productionTip = false;

new Vue({
	apolloProvider: createProvider(),
	render: (h: CreateElement): VNode => h(App),
	router
}).$mount('#app');
