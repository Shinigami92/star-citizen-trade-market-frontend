import { ApolloQueryResult } from 'apollo-client';
import gql from 'graphql-tag';
import Vue from 'vue';
import Component from 'vue-class-component';
import { APOLLO_AUTH_TOKEN, onLogout } from './plugins/apollo';
import { CURRENT_USER_DATA, CurrentUser, currentUser } from './shared/current-user';
import { Account } from './shared/graphql.schema';

@Component
export default class App extends Vue {
  public currentUser: CurrentUser | null = currentUser();

  public drawer: boolean = true;

  public constructor() {
    super();
  }

  public async signOut(): Promise<void> {
    localStorage.removeItem(CURRENT_USER_DATA);
    await onLogout(this.$apolloProvider.defaultClient);
    this.$router.go(0);
  }

  protected async beforeMount(): Promise<void> {
    this.$root.$on('USER_CHANGED', () => this.checkUser());
    await this.checkUser();
  }

  private async checkUser(): Promise<void> {
    const cu: CurrentUser | null = currentUser();
    if (cu === null) {
      return;
    }
    const queryResult: ApolloQueryResult<{ me: Account | null }> = await this.$apollo.query({
      query: gql`
        query me {
          me {
            id
            username
            roles
          }
        }
      `,
      errorPolicy: 'ignore',
      fetchPolicy: 'network-only'
    });
    const me: Account | null = queryResult.data.me;
    if (me === null) {
      localStorage.removeItem(CURRENT_USER_DATA);
      localStorage.removeItem(APOLLO_AUTH_TOKEN);
      this.$router.push('/sign-in');
      this.$router.go(0);
    } else {
      const data: string | null = localStorage.getItem(CURRENT_USER_DATA);
      if (!data) {
        console.error('LocalStorage:CURRENT_USER_DATA was null');
        return;
      }
      const account: Account = JSON.parse(data);
      account.id = me.id;
      account.roles = me.roles;
      account.username = me.username;
      localStorage.setItem(CURRENT_USER_DATA, JSON.stringify(account));
      this.currentUser = cu;
    }
  }
}
