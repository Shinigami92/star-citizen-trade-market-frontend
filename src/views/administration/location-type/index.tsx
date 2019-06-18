import { LocationType } from '@/shared/graphql.schema';
import { VDataTableHeader, VDataTablePagination } from '@/shared/vuetify/v-data-table';
import gql from 'graphql-tag';
import { QueryResult } from 'vue-apollo/types/vue-apollo';
import { Component, Vue } from 'vue-property-decorator';
import { VDataTable, VLayout } from 'vuetify-tsx';

@Component
export default class Index extends Vue {
	public readonly elements: LocationType[] = [];

	public pagination: VDataTablePagination = {
		rowsPerPage: 10,
		sortBy: 'name'
	};

	public headers: VDataTableHeader[] = [{ text: 'Name ', value: 'name' }, { text: 'ID ', value: 'id', width: '306' }];

	constructor() {
		super();
	}

	public render(): JSX.Element {
		return (
			<VLayout align-space-between justify-start column>
				<h1 class="display-1">Location Types</h1>
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
						items: ({ item }: { item: LocationType }): JSX.Element => (
							<tr>
								<td class="mono">{item.name}</td>
								<td class="mono">{item.id}</td>
							</tr>
						)
					}}
				></VDataTable>
			</VLayout>
		);
	}

	protected async beforeMount(): Promise<void> {
		const queryResult: QueryResult<{ elements: LocationType[] }> = await this.$apollo.query({
			query: gql`
				query {
					elements: locationTypes {
						id
						name
					}
				}
			`
		});
		this.elements.push(...queryResult.data.elements);
	}
}
