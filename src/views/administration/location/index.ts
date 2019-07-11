import { VDataTableHeader, VDataTablePagination } from '@/shared/vuetify/v-data-table';
import gql from 'graphql-tag';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
	apollo: {
		elements: gql`
			query {
				elements: locations {
					id
					name
					type {
						id
						name
					}
					parentLocation {
						id
						name
					}
					inGameSince
					inGameSinceVersion {
						id
						identifier
					}
					canTrade
				}
			}
		`
	}
})
export default class Index extends Vue {
	public pagination: VDataTablePagination = {
		rowsPerPage: 10,
		sortBy: 'name'
	};

	public headers: VDataTableHeader[] = [
		{ text: 'Name ', value: 'name' },
		{ text: 'Type ', value: 'type.name' },
		{ text: 'Parent Location ', value: 'parentLocation.name' },
		{ text: 'First Time Seen ', value: 'inGameSince' },
		{ text: 'Since Version ', value: 'inGameSinceVersion.identifier' },
		{ text: 'Can Trade ', value: 'canTrade' },
		{ text: 'ID ', value: 'id', width: '306' }
	];
	constructor() {
		super();
	}
}
