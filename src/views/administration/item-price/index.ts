import { VDataTableHeader, VDataTablePagination } from '@/shared/vuetify/v-data-table';
import gql from 'graphql-tag';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
	apollo: {
		elements: gql`
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
	}
})
export default class Index extends Vue {
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
}
