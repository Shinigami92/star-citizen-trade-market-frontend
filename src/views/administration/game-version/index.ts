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
				}
			}
		`
	}
})
export default class Index extends Vue {
	public pagination: VDataTablePagination = {
		rowsPerPage: 10,
		sortBy: 'identifier',
		descending: true
	};

	public headers: VDataTableHeader[] = [{ text: 'Identifier ', value: 'identifier' }, { text: 'ID ', value: 'id' }];
	constructor() {
		super();
	}
}
