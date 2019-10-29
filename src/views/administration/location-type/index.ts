import { VuetifyTableHeader } from '@/shared/vuetify/v-data-table';
import gql from 'graphql-tag';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
	apollo: {
		elements: gql`
			query {
				elements: locationTypes {
					id
					name
				}
			}
		`
	}
})
export default class Index extends Vue {
	public readonly headers: VuetifyTableHeader[] = [
		{ text: 'Name', value: 'name' },
		{ text: 'ID', width: 340, value: 'id' }
	];

	constructor() {
		super();
	}
}
