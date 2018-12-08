import Vue from 'vue';
import Vuetify, {
	VApp,
	VBtn,
	VContainer,
	VContent,
	VDataTable,
	VFlex,
	VFooter,
	VForm,
	VIcon,
	VLayout,
	VList,
	VListTile,
	VListTileAction,
	VListTileContent,
	VNavigationDrawer,
	VSpacer,
	VTextField,
	VToolbar,
	VToolbarSideIcon,
	VToolbarTitle
	// @ts-ignore
} from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
	components: {
		VApp,
		VBtn,
		VContainer,
		VContent,
		VDataTable,
		VFlex,
		VFooter,
		VForm,
		VIcon,
		VLayout,
		VList,
		VListTile,
		VListTileAction,
		VListTileContent,
		VNavigationDrawer,
		VSpacer,
		VTextField,
		VToolbar,
		VToolbarSideIcon,
		VToolbarTitle
	},
	theme: {
		primary: '#00e7ff',
		secondary: '#424242',
		accent: '#FFB400',
		error: '#D05656',
		info: '#53A7C5',
		success: '#7ED321',
		warning: '#FFB400'
	},
	customProperties: true,
	iconfont: 'fa'
});
