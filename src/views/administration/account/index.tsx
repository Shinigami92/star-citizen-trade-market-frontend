import { Account } from '@/shared/graphql.schema';
import { VDataTableHeader, VDataTablePagination } from '@/shared/vuetify/v-data-table';
import gql from 'graphql-tag';
import { QueryResult } from 'vue-apollo/types/vue-apollo';
import { Component, Vue } from 'vue-property-decorator';
import { VDataTable, VLayout } from 'vuetify-tsx';

@Component
export default class Index extends Vue {
	public readonly elements: Account[] = [];
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

	public render(): JSX.Element {
		return (
			<VLayout align-space-between justify-start column>
				<h1 class="display-1">Accounts</h1>
				<VDataTable
					class="elevation-1"
					headers={this.headers}
					items={this.elements}
					scopedSlots={{
						items: (props: { item: Account }): JSX.Element => {
							// <td>{ props.item.email }</td>
							return (
								<tr>
									<td class="mono">{props.item.id}</td>
									<td>{props.item.username}</td>
									<td>{props.item.handle}</td>
									<td>{props.item.roles.join(', ')}</td>
								</tr>
							);
						}
					}}
					pagination_sync={this.pagination}
				/>
			</VLayout>
		);
	}

	protected async beforeMount(): Promise<void> {
		const queryResult: QueryResult<{ accounts: Account[] }> = await this.$apollo.query({
			query: gql`
				query {
					accounts {
						id
						username
						handle
						# email
						roles
					}
				}
			`
		});
		this.elements.push(...queryResult.data.accounts);
	}
}
