import {
  Commodity,
  CreateItemPriceInput,
  GameVersion,
  ItemPriceType,
  Location,
  LocationSearchInput
} from '@/shared/graphql.schema';
import { VuetifyTableHeader } from '@/shared/vuetify/v-data-table';
import { SELECTED_GAME_VERSION } from '@/store/constant';
import { ApolloQueryResult } from 'apollo-client';
import { FetchResult } from 'apollo-link';
import gql from 'graphql-tag';
import Vue from 'vue';
import { Component, Model, Prop } from 'vue-property-decorator';

@Component
export default class ReportPrice extends Vue {
  @Model('close', { type: Boolean })
  public open!: boolean;

  @Prop({ default: null })
  public readonly location!: Location | null;

  @Prop({ default: 1 })
  public readonly quantity!: number;
  public price: number = 1;
  public type: ItemPriceType = ItemPriceType.BUY;

  public selectedCommodity: Commodity | null = null;

  public selectedGameVersion: GameVersion | null = null;

  public readonly itemPrices: any[] = [];
  public readonly locations: Location[] = [];
  public readonly gameVersions: GameVersion[] = [];
  public readonly commodities: Commodity[] = [];

  public readonly headers: VuetifyTableHeader[] = [
    { text: 'Commodity ', width: 160, value: 'commodity.name' },
    { text: 'Quantity ', value: 'quantity' },
    { text: 'Price ', value: 'price' },
    { text: 'Price per Unit ', value: 'unitPrice' },
    { text: 'Type ', value: 'type' },
    { text: '', value: 'action', sortable: false }
  ];

  public constructor() {
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
    console.log({ location: this.location, itemPrices: this.itemPrices });
    const promises: Array<Promise<FetchResult<any, Record<string, any>, Record<string, any>>>> = [];
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
    const queryResult: ApolloQueryResult<{
      locations: Location[];
      gameVersions: GameVersion[];
      commodities: Commodity[];
    }> = await this.$apollo.query({
      query: gql`
        query data($locationSearchInput: LocationSearchInput) {
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
            ... on Commodity {
              commodityCategory {
                id
                name
              }
            }
          }
        }
      `,
      variables: {
        locationSearchInput: { canTrade: true } as LocationSearchInput
      }
    });
    this.gameVersions.push(...queryResult.data.gameVersions);
    this.locations.push(...queryResult.data.locations);
    this.commodities.push(...queryResult.data.commodities);
    const selectedGameVersion: string | null = sessionStorage.getItem(SELECTED_GAME_VERSION);
    if (selectedGameVersion !== null) {
      this.selectedGameVersion = JSON.parse(selectedGameVersion);
    } else {
      this.selectedGameVersion = this.gameVersions[0];
    }
  }
}
