import { VDataTableHeader, VDataTablePagination } from '@/shared/vuetify/v-data-table';
import gql from 'graphql-tag';
import { Component, Vue } from 'vue-property-decorator';

@Component({
	apollo: {
		elements: gql`
			query {
				elements: items {
					id
					name
					type
					inGameSince
					inGameSinceVersion {
						id
						identifier
					}
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
		{ text: 'Type ', value: 'type' },
		{ text: 'First Time Seen ', value: 'inGameSince' },
		{ text: 'Since Version ', value: 'inGameSinceVersion' },
		{ text: 'ID ', value: 'id', width: '306' }
	];
	constructor() {
		super();
	}
}
