import { VuetifyTableHeader } from '@/shared/vuetify/v-data-table';
import gql from 'graphql-tag';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
	apollo: {
		elements: gql`
			query {
				elements: accounts {
					id
					username
					handle
					# email
					roles
				}
			}
		`
	}
})
export default class Index extends Vue {
	public readonly headers: VuetifyTableHeader[] = [
		{ text: 'ID', width: 340, value: 'id' },
		{ text: 'Username', width: 200, value: 'username' },
		{ text: 'Handle', width: 200, value: 'handle' },
		// { text: 'Email', value: 'email' },
		{ text: 'Roles', width: 300, value: 'roles' }
	];

	public tableHeight: number = 0;

	constructor() {
		super();
	}

	public updateTableHeight(): void {
		this.tableHeight = window.innerHeight - this.$vuetify.application.top - 204;
	}

	protected mounted(): void {
		this.updateTableHeight();
		window.addEventListener('resize', () => this.updateTableHeight());
	}
}
