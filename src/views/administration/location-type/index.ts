import { VDataTableHeader, VDataTablePagination } from '@/shared/vuetify/v-data-table';
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
	public pagination: VDataTablePagination = {
		rowsPerPage: 10,
		sortBy: 'name'
	};

	public headers: VDataTableHeader[] = [{ text: 'Name ', value: 'name' }, { text: 'ID ', value: 'id', width: '306' }];
	constructor() {
		super();
	}
}
