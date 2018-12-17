import CreateCommodity from '@/components/create-commodity/create-commodity';
import ReportPrice from '@/components/report-prices/report-prices';
import { Location, Trade } from '@/shared/graphql.schema';
import { VDataTableHeader, VDataTablePagination } from '@/shared/vuetify/v-data-table';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { QueryResult } from 'vue-apollo/types/vue-apollo';
import { Component, Vue, Watch } from 'vue-property-decorator';

const TRADE_QUERY: DocumentNode = gql`
	query tradeData($searchInput: TradeSearchInput) {
		trades(searchInput: $searchInput) {
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
`;

@Component({
	components: { ReportPrice, CreateCommodity }
})
export default class TradingDashboard extends Vue {
	public readonly locations: Location[] = [];
	public readonly trades: Trade[] = [];
	public startLocation: Location | null = null;
	public endLocation: Location | null = null;
	public maxScu: number = 1;
	public startCurrency: number = 1;

	public reportPricesModal: boolean = false;
	public createCommodityModal: boolean = false;

	public pagination: VDataTablePagination = {
		rowsPerPage: 10,
		sortBy: 'profit',
		descending: true
	};

	public headers: VDataTableHeader[] = [
		{ text: 'Commodity ', value: 'item.name' },
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
		await this.search();
	}

	public async createCommodityModalClosed(): Promise<void> {
		this.createCommodityModal = false;
	}

	public async search(): Promise<void> {
		const queryResult: QueryResult<any> = await this.$apollo.query({
			query: TRADE_QUERY,
			variables: {
				searchInput: {
					startLocationId: this.startLocation ? this.startLocation.id : undefined,
					endLocationId: this.endLocation ? this.endLocation.id : undefined
				}
			}
		});
		this.trades.splice(0, this.trades.length);
		this.trades.push(...queryResult.data.trades);
	}

	protected async beforeMount(): Promise<void> {
		const queryResult: QueryResult<any> = await this.$apollo.query({
			query: gql`
				query tradeData {
					locations {
						id
						name
					}
				}
			`
		});
		this.locations.push(...queryResult.data.locations);
		await this.search();
	}

	@Watch('startLocation')
	protected async onStartLocationChanged(): Promise<void> {
		await this.search();
	}

	@Watch('endLocation')
	protected async onEndLocationChanged(): Promise<void> {
		await this.search();
	}
}
