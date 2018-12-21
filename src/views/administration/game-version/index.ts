import { VDataTableHeader, VDataTablePagination } from '@/shared/vuetify/v-data-table';
import gql from 'graphql-tag';
import { Component, Vue } from 'vue-property-decorator';

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
	public pagination: VDataTablePagination = {
		rowsPerPage: 10,
		sortBy: 'release',
		descending: true
	};

	public headers: VDataTableHeader[] = [
		{ text: 'Identifier ', value: 'identifier' },
		{ text: 'Release ', value: 'release' },
		{ text: 'ID ', value: 'id', width: '306' }
	];
	constructor() {
		super();
	}
}
