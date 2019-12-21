import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import App from './app.vue';
import { apolloProvider } from './plugins/apollo';
import './plugins/moment';
import vuetify from './plugins/vuetify';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  apolloProvider,
  render: (h) => h(App),
  router
}).$mount('#app');
