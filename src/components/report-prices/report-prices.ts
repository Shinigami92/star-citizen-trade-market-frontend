import { Commodity, CreateItemPriceInput, GameVersion, ItemPriceType, Location } from '@/shared/graphql.schema';
import { VDataTableHeader, VDataTablePagination } from '@/shared/vuetify/v-data-table';
import gql from 'graphql-tag';
import { QueryResult } from 'vue-apollo/types/vue-apollo';
import { Component, Model, Prop, Vue } from 'vue-property-decorator';

@Component({
	apollo: {
		locations: gql`
			query locations {
				locations {
					id
					name
					type {
						name
					}
					parentLocation {
						name
					}
				}
			}
		`,
		commodities: gql`
			query commodities {
				commodities {
					id
					name
					... on Commodity {
						commodityCategory {
							name
						}
					}
				}
			}
		`
	}
})
export default class ReportPrice extends Vue {
	@Model('close', { type: Boolean })
	public open!: boolean;

	@Prop({ default: null })
	public location: Location | null = null;

	@Prop({ default: 1 })
	public quantity: number = 1;
	public price: number = 1;
	public type: ItemPriceType = ItemPriceType.BUY;

	public selectedCommodity: Commodity | null = null;

	public selectedGameVersion: GameVersion | null = null;

	public readonly itemPrices: any[] = [];
	public gameVersions: GameVersion[] = [];

	public pagination: VDataTablePagination = {
		sortBy: 'type'
	};

	public headers: VDataTableHeader[] = [
		{ text: 'Commodity ', value: 'commodity.name' },
		{ text: 'Quantity ', value: 'quantity' },
		{ text: 'Price ', value: 'price' },
		{ text: 'Price per Unit ', value: 'unitPrice' },
		{ text: 'Type ', value: 'type' },
		{ text: '', value: 'action', sortable: false }
	];

	constructor() {
		super();
	}

	public get invalidCommodity(): boolean {
		return this.selectedCommodity === null;
	}

	public get invalid(): boolean {
		return this.location === null || this.itemPrices.length === 0;
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
		return `${commodity.name} (${commodity.commodityCategory.name})`;
	}

	public addItemPrice(): void {
		this.itemPrices.push({
			commodity: this.selectedCommodity,
			quantity: this.quantity,
			price: this.price,
			type: this.type
		});
	}

	public removeItemPrice(index: number): void {
		this.itemPrices.splice(index, 1);
	}

	public async reportItemPrices(): Promise<void> {
		// TODO: report prices
		console.log({
			location: this.location,
			itemPrices: this.itemPrices
		});
		const promises: Array<Promise<QueryResult<any>>> = [];
		for (const itemPrice of this.itemPrices) {
			promises.push(
				this.$apollo.mutate({
					mutation: gql`
						mutation CreateItemPrice($input: CreateItemPriceInput!) {
							createItemPrice(input: $input) {
								id
							}
						}
					`,
					variables: {
						input: {
							itemId: itemPrice.commodity.id,
							locationId: this.location!.id,
							price: itemPrice.price,
							quantity: itemPrice.quantity,
							type: itemPrice.type,
							scannedInGameVersionId: this.selectedGameVersion ? this.selectedGameVersion.id : undefined
						} as CreateItemPriceInput
					}
				})
			);
		}
		await Promise.all(promises);

		this.itemPrices.splice(0, this.itemPrices.length);

		this.$emit('close');
	}

	protected async beforeMount(): Promise<void> {
		const gameVersionResult: QueryResult<any> = await this.$apollo.query({
			query: gql`
				query gameVersions {
					gameVersions {
						id
						identifier
					}
				}
			`
		});
		this.gameVersions = gameVersionResult.data.gameVersions;
		this.selectedGameVersion = this.gameVersions[0];
	}
}
