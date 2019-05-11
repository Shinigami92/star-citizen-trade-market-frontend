import gql from 'graphql-tag';
import { QueryResult } from 'vue-apollo/types/vue-apollo';
import { Component, Vue } from 'vue-property-decorator';
import { APOLLO_AUTH_TOKEN, onLogout } from './plugins/apollo';
import { CURRENT_USER_DATA, CurrentUser, currentUser } from './shared/current-user';
import { Account } from './shared/graphql.schema';

@Component
export default class App extends Vue {
	public readonly currentUser: CurrentUser | null = currentUser();

	public drawer: boolean = true;

	constructor() {
		super();
	}

	public async signOut(): Promise<void> {
		localStorage.removeItem(CURRENT_USER_DATA);
		await onLogout(this.$apolloProvider!.defaultClient);
		this.$router.go(0);
	}

	protected async beforeMount(): Promise<void> {
		const cu: CurrentUser | null = currentUser();
		if (cu === null) {
			return;
		}
		const queryResult: QueryResult<{ me: Account | null }> = await this.$apollo.query({
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
			const account: Account = JSON.parse(localStorage.getItem(CURRENT_USER_DATA)!);
			account.id = me.id;
			account.roles = me.roles;
			account.username = me.username;
			localStorage.setItem(CURRENT_USER_DATA, JSON.stringify(account));
		}
	}
}
