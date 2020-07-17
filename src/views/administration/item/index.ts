import gql from 'graphql-tag';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { DataTableHeader } from 'vuetify';

@Component({
  apollo: {
    elements: gql`
      query {
        elements: items {
          id
          name
          type
          inGameSince
          inGameSinceVersion {
            id
            identifier
          }
        }
      }
    `
  }
})
export default class Index extends Vue {
  public readonly headers: DataTableHeader[] = [
    { text: 'Name', width: 160, value: 'name' },
    { text: 'Type', value: 'type' },
    { text: 'First Time Seen', width: 230, value: 'inGameSince' },
    { text: 'Since Version', width: 190, value: 'inGameSinceVersion.identifier' },
    { text: 'ID', width: 340, value: 'id' }
  ];

  public tableHeight: number = 0;

  public constructor() {
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
