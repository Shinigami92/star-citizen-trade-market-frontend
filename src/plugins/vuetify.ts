import Vue from 'vue';
// @ts-ignore
import DatetimePicker from 'vuetify-datetime-picker';
import 'vuetify-datetime-picker/src/stylus/main.styl';
import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);
Vue.use(DatetimePicker);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#096689',
        secondary: '#0E1F79',
        accent: '#DA7406',
        error: '#DA2B06',
        info: '#44BF72',
        success: '#008030',
        warning: '#DA9D06'
      }
    },
    options: {
      customProperties: true
    }
  },
  icons: {
    iconfont: 'fa'
  }
});
