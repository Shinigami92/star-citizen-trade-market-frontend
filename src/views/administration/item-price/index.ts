import { VuetifyTableHeader } from '@/shared/vuetify/v-data-table';
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
  public readonly headers: VuetifyTableHeader[] = [
    { text: 'Item', width: 250, value: 'item.name' },
    { text: 'Location', width: 370, value: 'location.name' },
    { text: 'Price', value: 'price' },
    { text: 'Quantity', value: 'quantity' },
    { text: 'Unit Price', value: 'unitPrice' },
    { text: 'Visibility', value: 'visibility' },
    { text: 'Scan Time', width: 240, value: 'scanTime' },
    { text: 'Type', value: 'type' },
    { text: 'Scanned By', value: 'scannedBy.username' },
    { text: 'Scanned In Version', width: 190, value: 'scannedInGameVersion.identifier' },
    { text: 'ID', width: 340, value: 'id' }
  ];

  public tableHeight: number = 0;

  constructor() {
    super();
  }

  public updateTableHeight(): void {
    this.tableHeight = window.innerHeight - this.$vuetify.application.top - 204;
  }

  protected mounted(): void {
    this.updateTableHeight();
    window.addEventListener('resize', () => this.updateTableHeight());
  }
}
