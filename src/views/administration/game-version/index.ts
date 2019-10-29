import { VuetifyTableHeader } from '@/shared/vuetify/v-data-table';
import gql from 'graphql-tag';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
	apollo: {
		elements: gql`
			query {
				elements: gameVersions {
					id
					identifier
					release
				}
			}
		`
	}
})
export default class Index extends Vue {
	public readonly headers: VuetifyTableHeader[] = [
		{ text: 'Identifier', width: 190, value: 'identifier' },
		{ text: 'Release', width: 230, value: 'release' },
		{ text: 'ID', width: 340, value: 'id' }
	];

	constructor() {
		super();
	}
}
