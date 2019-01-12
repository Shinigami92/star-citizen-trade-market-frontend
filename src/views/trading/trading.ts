import CreateCommodity from '@/components/create-commodity/create-commodity';
import CreateGameVersion from '@/components/create-game-version/create-game-version';
import CreateLocation from '@/components/create-location/create-location';
import ReportPrice from '@/components/report-prices/report-prices';
import { CurrentUser, currentUser } from '@/shared/current-user';
import { Commodity, GameVersion, Location, LocationSearchInput, Trade } from '@/shared/graphql.schema';
import { VDataTableHeader, VDataTablePagination } from '@/shared/vuetify/v-data-table';
import { SELECTED_GAME_VERSION } from '@/store/constant';
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
				... on Commodity {
					commodityCategory {
						id
						name
					}
				}
			}
			startLocation {
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
			endLocation {
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
			profit
			margin
			scanTime
		}
	}
`;

@Component({
	components: { ReportPrice, CreateCommodity, CreateGameVersion, CreateLocation }
})
export default class TradingDashboard extends Vue {
	public readonly currentUser: CurrentUser | null = currentUser();

	public readonly locations: Location[] = [];
	public readonly gameVersions: GameVersion[] = [];
	public readonly commodities: Commodity[] = [];
	public readonly trades: Trade[] = [];
	public startLocation: Location | null = null;
	public endLocation: Location | null = null;
	public gameVersion: GameVersion | null = null;
	public readonly selectedCommodities: Commodity[] = [];
	// public maxScu: number = 1;
	// public startCurrency: number = 1;

	public reportPricesModal: boolean = false;
	public createCommodityModal: boolean = false;
	public createGameVersionModal: boolean = false;
	public createLocationModal: boolean = false;

	public pagination: VDataTablePagination = {
		rowsPerPage: 25,
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
		{ text: 'Scanned ', value: 'scanTime' }
	];
	constructor() {
		super();
	}

	public displayWithLocation(location: Location): string {
		let displayValue: string = location.name;
		displayValue += ` (${location.type.name})`;
		if (location.parentLocation) {
			displayValue += ` - (${location.parentLocation.name})`;
		}
		return displayValue;
	}

	public displayWithCommodity(commodity: Commodity): string {
		if (Array.isArray(commodity)) {
			// catches if no commodity have been selected
			return '';
		}
		return `${commodity.name} (${commodity.commodityCategory.name})`;
	}

	public async reportPricesModalClosed(): Promise<void> {
		this.reportPricesModal = false;
		await this.search({ fetchPolicy: 'network-only' });
	}

	public async createCommodityModalClosed(): Promise<void> {
		this.createCommodityModal = false;
	}

	public async createGameVersionModalClosed(): Promise<void> {
		this.createGameVersionModal = false;
	}

	public async createLocationModalClosed(): Promise<void> {
		this.createLocationModal = false;
	}

	public async search({
		fetchPolicy
	}: {
		fetchPolicy?: 'cache-first' | 'cache-and-network' | 'network-only' | 'cache-only' | 'no-cache' | 'standby';
	} = {}): Promise<void> {
		const queryResult: QueryResult<{ trades: Trade[] }> = await this.$apollo.query({
			query: TRADE_QUERY,
			variables: {
				searchInput: {
					startLocationId: this.startLocation ? this.startLocation.id : undefined,
					endLocationId: this.endLocation ? this.endLocation.id : undefined,
					gameVersionId: this.gameVersion ? this.gameVersion.id : undefined,
					itemIds:
						this.selectedCommodities.length > 0
							? this.selectedCommodities.map((c: Commodity) => c.id)
							: undefined
				}
			},
			fetchPolicy
		});
		this.trades.splice(0, this.trades.length);
		this.trades.push(...queryResult.data.trades);
	}

	protected async beforeMount(): Promise<void> {
		const queryResult: QueryResult<{
			locations: Location[];
			gameVersions: GameVersion[];
			commodities: Commodity[];
		}> = await this.$apollo.query({
			query: gql`
				query tradeData($locationSearchInput: LocationSearchInput) {
					locations(searchInput: $locationSearchInput) {
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
					gameVersions {
						id
						identifier
					}
					commodities {
						id
						name
						commodityCategory {
							id
							name
						}
					}
				}
			`,
			variables: {
				locationSearchInput: { canTrade: true } as LocationSearchInput
			}
		});
		this.gameVersions.push(...queryResult.data.gameVersions);
		const selectedGameVersion: string | null = sessionStorage.getItem(SELECTED_GAME_VERSION);
		if (selectedGameVersion !== null) {
			this.gameVersion = JSON.parse(selectedGameVersion);
		} else {
			this.gameVersion = this.gameVersions[0];
		}
		this.locations.push(...queryResult.data.locations);
		this.commodities.push(...queryResult.data.commodities);
		await this.search({ fetchPolicy: 'network-only' });
	}

	@Watch('startLocation')
	protected async onStartLocationChanged(): Promise<void> {
		await this.search();
	}

	@Watch('endLocation')
	protected async onEndLocationChanged(): Promise<void> {
		await this.search();
	}

	@Watch('gameVersion')
	protected async onGameVersionChanged(value: GameVersion): Promise<void> {
		sessionStorage.setItem(SELECTED_GAME_VERSION, JSON.stringify(value));
		await this.search();
	}

	@Watch('selectedCommodities')
	protected async onSelectedCommoditiesChanged(): Promise<void> {
		await this.search();
	}
}
