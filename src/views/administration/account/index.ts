import { VDataTableHeader, VDataTablePagination } from '@/shared/vuetify/v-data-table';
import gql from 'graphql-tag';
import { Component, Vue } from 'vue-property-decorator';

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
	public pagination: VDataTablePagination = {
		rowsPerPage: 10,
		sortBy: 'username'
	};

	public headers: VDataTableHeader[] = [
		{ text: 'ID ', value: 'id', width: '306' },
		{ text: 'Username ', value: 'username' },
		{ text: 'Handle ', value: 'handle' },
		// { text: 'Email ', value: 'email' },
		{ text: 'Roles ', value: 'roles' }
	];
	constructor() {
		super();
	}
}
