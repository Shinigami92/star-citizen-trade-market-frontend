import { Item } from '@/shared/graphql.schema';
import { VDataTableHeader, VDataTablePagination } from '@/shared/vuetify/v-data-table';
import gql from 'graphql-tag';
import moment from 'moment';
import { QueryResult } from 'vue-apollo/types/vue-apollo';
import { Component, Vue } from 'vue-property-decorator';
import { VDataTable, VLayout } from 'vuetify-tsx';

@Component
export default class Index extends Vue {
	public readonly elements: Item[] = [];

	public pagination: VDataTablePagination = {
		rowsPerPage: 10,
		sortBy: 'name'
	};

	public headers: VDataTableHeader[] = [
		{ text: 'Name ', value: 'name' },
		{ text: 'Type ', value: 'type' },
		{ text: 'First Time Seen ', value: 'inGameSince' },
		{ text: 'Since Version ', value: 'inGameSinceVersion.identifier' },
		{ text: 'ID ', value: 'id', width: '306' }
	];

	constructor() {
		super();
	}

	public render(): JSX.Element {
		return (
			<VLayout align-space-between justify-start column>
				<h1 class="display-1">Items</h1>
				<VDataTable
					headers={this.headers}
					items={this.elements}
					pagination={this.pagination}
					on={{
						'update:pagination': (pagination: VDataTablePagination): void => {
							this.pagination = pagination;
						}
					}}
					class="elevation-1"
					scopedSlots={{
						items: ({ item }: { item: Item }): JSX.Element => (
							<tr>
								<td>{item.name}</td>
								<td>{item.type}</td>
								<td>{item.inGameSince ? moment(item.inGameSince).format('LLL') : ''}</td>
								<td class="mono">{item.inGameSinceVersion.identifier}</td>
								<td class="mono">{item.id}</td>
							</tr>
						)
					}}
				></VDataTable>
			</VLayout>
		);
	}

	protected async beforeMount(): Promise<void> {
		const queryResult: QueryResult<{ elements: Item[] }> = await this.$apollo.query({
			query: gql`
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
		});
		this.elements.push(...queryResult.data.elements);
	}
}
