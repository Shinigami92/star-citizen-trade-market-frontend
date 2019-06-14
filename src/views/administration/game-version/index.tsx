import { GameVersion } from '@/shared/graphql.schema';
import { VDataTableHeader, VDataTablePagination } from '@/shared/vuetify/v-data-table';
import gql from 'graphql-tag';
import moment from 'moment';
import { QueryResult } from 'vue-apollo/types/vue-apollo';
import { Component, Vue } from 'vue-property-decorator';
import { VDataTable, VLayout } from 'vuetify-tsx';

@Component
export default class Index extends Vue {
	public readonly elements: GameVersion[] = [];

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

	public render(): JSX.Element {
		return (
			<VLayout align-space-between justify-start column>
				<h1 class="display-1">Game Versions</h1>
				<VDataTable
					headers={this.headers}
					items={this.elements}
					pagination_sync={this.pagination}
					class="elevation-1"
					scopedSlots={{
						items: ({ item }: { item: GameVersion }): JSX.Element => (
							<tr>
								<td class="mono">{item.identifier}</td>
								<td>{item.release ? moment(item.release).format('LLL') : ''}</td>
								<td class="mono">{item.id}</td>
							</tr>
						)
					}}
				></VDataTable>
			</VLayout>
		);
	}

	protected async beforeMount(): Promise<void> {
		const queryResult: QueryResult<{ elements: GameVersion[] }> = await this.$apollo.query({
			query: gql`
				query {
					elements: gameVersions {
						id
						identifier
						release
					}
				}
			`
		});
		this.elements.push(...queryResult.data.elements);
	}
}
