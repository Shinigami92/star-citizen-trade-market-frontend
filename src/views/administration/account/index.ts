import gql from 'graphql-tag';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { DataTableHeader } from 'vuetify';

@Component({
  apollo: {
    elements: gql`
      query {
        elements: accounts {
          id
          username
          handle
          # email
          roles
        }
      }
    `
  }
})
export default class Index extends Vue {
  public readonly headers: DataTableHeader[] = [
    { text: 'ID', width: 340, value: 'id' },
    { text: 'Username', width: 200, value: 'username' },
    { text: 'Handle', width: 200, value: 'handle' },
    // { text: 'Email', value: 'email' },
    { text: 'Roles', width: 300, value: 'roles' }
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
