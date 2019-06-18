import { Location } from '@/shared/graphql.schema';
import { VDataTableHeader, VDataTablePagination } from '@/shared/vuetify/v-data-table';
import gql from 'graphql-tag';
import moment from 'moment';
import { QueryResult } from 'vue-apollo/types/vue-apollo';
import { Component, Vue } from 'vue-property-decorator';
import { VDataTable, VLayout } from 'vuetify-tsx';

@Component
export default class Index extends Vue {
	public readonly elements: Location[] = [];

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

	public render(): JSX.Element {
		return (
			<VLayout align-space-between justify-start column>
				<h1 class="display-1">Locations</h1>
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
						items: ({ item }: { item: Location }): JSX.Element => (
							<tr>
								<router-link tag="td" to={`/location/${item.id}`}>
									<span class="cursor-pointer">{item.name}</span>
								</router-link>
								<td>{item.type.name}</td>
								<td>
									{item.parentLocation && (
										<router-link tag="div" to={`/location/${item.parentLocation.id}`}>
											<span class="cursor-pointer">{item.parentLocation.name}</span>
										</router-link>
									)}
								</td>
								<td>{item.inGameSince && <span>{moment(item.inGameSince).format('LLL')}</span>}</td>
								<td class="mono">{item.inGameSinceVersion.identifier}</td>
								<td>{item.canTrade.toString()}</td>
								<td class="mono">{item.id}</td>
							</tr>
						)
					}}
				></VDataTable>
			</VLayout>
		);
	}

	protected async beforeMount(): Promise<void> {
		const queryResult: QueryResult<{ elements: Location[] }> = await this.$apollo.query({
			query: gql`
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
		});
		this.elements.push(...queryResult.data.elements);
	}
}
