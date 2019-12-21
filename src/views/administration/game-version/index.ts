import { VuetifyTableHeader } from '@/shared/vuetify/v-data-table';
import gql from 'graphql-tag';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  apollo: {
    elements: gql`
      query {
        elements: gameVersions {
          id
          identifier
          release
        }
      }
    `
  }
})
export default class Index extends Vue {
  public readonly headers: VuetifyTableHeader[] = [
    { text: 'Identifier', width: 190, value: 'identifier' },
    { text: 'Release', width: 230, value: 'release' },
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
