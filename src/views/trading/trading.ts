import ReportPrice from '@/components/report-prices/report-prices';
import { VDataTableHeader, VDataTablePagination } from '@/shared/vuetify/v-data-table';
import gql from 'graphql-tag';
import { QueryResult } from 'vue-apollo/types/vue-apollo';
import { Component, Vue } from 'vue-property-decorator';

@Component({
	components: { ReportPrice }
})
export default class TradingDashboard extends Vue {
	public readonly locations: any[] = [];
	public readonly trades: any[] = [];
	public startLocation: any | null = null;
	public endLocation: any | null = null;
	public maxScu: number = 1;
	public startCurrency: number = 1;

	public reportPricesModal: boolean = false;

	public pagination: VDataTablePagination = {
		rowsPerPage: 10,
		sortBy: 'profit',
		descending: true
	};

	public headers: VDataTableHeader[] = [
		{ text: 'Commodity ', value: 'item.name', width: '400' },
		{ text: 'Start ', value: 'startLocation.name' },
		{ text: 'End ', value: 'endLocation.name' },
		{ text: 'Buy Price ', value: 'buyItemPrice.unitPrice' },
		{ text: 'Sell Price ', value: 'sellItemPrice.unitPrice' },
		{ text: 'Profit ', value: 'profit' },
		{ text: 'Margin ', value: 'margin' },
		{ text: 'Scanned ', value: 'scanTime' },
		{ text: 'Game Version ', value: 'scannedInGameVersion.identifier' }
	];
	constructor() {
		super();
	}

	public async reportPricesModalClosed(): Promise<void> {
		this.reportPricesModal = false;
		const queryResult: QueryResult<any> = await this.$apollo.query({
			query: gql`
				query tradeData {
					trades {
						buyItemPrice {
							id
							unitPrice
							type
						}
						sellItemPrice {
							id
							unitPrice
							type
						}
						item {
							id
							name
						}
						startLocation {
							id
							name
						}
						endLocation {
							id
							name
						}
						profit
						margin
						scanTime
						scannedInGameVersion {
							identifier
						}
					}
				}
			`
		});
		this.trades.splice(0, this.trades.length);
		this.trades.push(queryResult.data.trades);
	}

	protected async beforeMount(): Promise<void> {
		const queryResult: QueryResult<any> = await this.$apollo.query({
			query: gql`
				query tradeData {
					trades {
						buyItemPrice {
							id
							unitPrice
							type
						}
						sellItemPrice {
							id
							unitPrice
							type
						}
						item {
							id
							name
						}
						startLocation {
							id
							name
						}
						endLocation {
							id
							name
						}
						profit
						margin
						scanTime
						scannedInGameVersion {
							identifier
						}
					}
					locations {
						id
						name
					}
				}
			`
		});
		console.log(queryResult.data);
		this.locations.push(...queryResult.data.locations);
		this.trades.push(...queryResult.data.trades);
	}
}
