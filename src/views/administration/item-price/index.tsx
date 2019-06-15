import { ItemPrice } from '@/shared/graphql.schema';
import { VDataTableHeader, VDataTablePagination } from '@/shared/vuetify/v-data-table';
import gql from 'graphql-tag';
import moment from 'moment';
import { QueryResult } from 'vue-apollo/types/vue-apollo';
import { Component, Vue } from 'vue-property-decorator';
import { VDataTable, VLayout } from 'vuetify-tsx';

@Component
export default class Index extends Vue {
	public readonly elements: ItemPrice[] = [];

	public pagination: VDataTablePagination = {
		rowsPerPage: 25,
		sortBy: 'scanTime',
		descending: true
	};

	public headers: VDataTableHeader[] = [
		{ text: 'Item ', value: 'item.name' },
		{ text: 'Location ', value: 'location.name' },
		{ text: 'Price ', value: 'price' },
		{ text: 'Quantity ', value: 'quantity' },
		{ text: 'Unit Price ', value: 'unitPrice' },
		{ text: 'Visibility ', value: 'visibility' },
		{ text: 'Scan Time ', value: 'scanTime', width: '230' },
		{ text: 'Type ', value: 'type' },
		{ text: 'Scanned By ', value: 'scannedBy.username' },
		{ text: 'Scanned In Version ', value: 'scannedInGameVersion.identifier', width: '170' },
		{ text: 'ID ', value: 'id', width: '306' }
	];

	constructor() {
		super();
	}

	public render(): JSX.Element {
		return (
			<VLayout align-space-between justify-start column>
				<h1 class="display-1">Item Prices</h1>
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
						items: ({ item }: { item: ItemPrice }): JSX.Element => (
							<tr>
								<td>
									{item.item.name} ({item.item.type})
								</td>
								<td>
									{item.location.name} ({item.location.type.name}) - (
									{item.location.parentLocation!.name})
								</td>
								<td class="text-md-right">{item.price.toFixed(2)}</td>
								<td class="text-md-right">{item.quantity}</td>
								<td class="text-md-right">{item.unitPrice.toFixed(2)}</td>
								<td>{item.visibility}</td>
								<td>{moment(item.scanTime).format('LLL')}</td>
								<td>{item.type}</td>
								<td>{item.scannedBy.username}</td>
								<td class="mono">{item.scannedInGameVersion.identifier}</td>
								<td class="mono">{item.id}</td>
							</tr>
						)
					}}
				></VDataTable>
			</VLayout>
		);
	}

	protected async beforeMount(): Promise<void> {
		const queryResult: QueryResult<{ elements: ItemPrice[] }> = await this.$apollo.query({
			query: gql`
				query {
					elements: itemPrices {
						id
						item {
							id
							name
							type
						}
						location {
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
						}
						price
						quantity
						unitPrice
						visibility
						scanTime
						type
						scannedBy {
							id
							username
						}
						scannedInGameVersion {
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
