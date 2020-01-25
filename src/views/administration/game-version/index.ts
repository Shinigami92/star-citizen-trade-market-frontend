import { CurrentUser, currentUser } from '@/shared/current-user';
import { GameVersion } from '@/shared/graphql.schema';
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
  public readonly currentUser: CurrentUser | null = currentUser();
  public readonly headers: VuetifyTableHeader[] = [
    { text: 'Identifier', width: 190, value: 'identifier' },
    { text: 'Release', width: 230, value: 'release' },
    { text: 'ID', width: 340, value: 'id' }
  ];

  public selected!: GameVersion;
  public release: string = '';

  public tableHeight: number = 0;

  public constructor() {
    super();
  }

  public updateTableHeight(): void {
    this.tableHeight = window.innerHeight - this.$vuetify.application.top - 204;
  }

  public openEditDialog(selected: GameVersion): void {
    this.selected = selected;
    this.release = selected.release ?? '';
  }

  public async updateRelease(): Promise<void> {
    try {
      await this.$apollo.mutate({
        mutation: gql`
          mutation UpdateGameVersion($id: ID!, $input: UpdateGameVersionInput!) {
            updateGameVersion(id: $id, input: $input) {
              id
              identifier
              release
            }
          }
        `,
        variables: {
          id: this.selected.id,
          input: {
            release: this.release || null
          }
        }
      });
    } catch (error) {
      console.error(error.graphQLErrors);
      return;
    }
    this.selected.release = this.release;
  }

  protected mounted(): void {
    this.updateTableHeight();
    window.addEventListener('resize', () => this.updateTableHeight());
  }
}
