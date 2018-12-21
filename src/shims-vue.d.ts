declare module '*.vue' {
	import ApolloClient from 'apollo-client';
	import Vue from 'vue';
	module 'vue/types/vue' {
		interface Vue {
			$apolloProvider: { defaultClient: ApolloClient<{}> };
		}
	}
	export default Vue;
}
