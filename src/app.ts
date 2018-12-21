import { Component, Vue } from 'vue-property-decorator';
import { onLogout } from './plugins/apollo';
import { CurrentUser, currentUser } from './shared/current-user';

@Component
export default class App extends Vue {
	public readonly currentUser: CurrentUser | null = currentUser();

	public drawer: boolean = true;

	constructor() {
		super();
	}

	public async signOut(): Promise<void> {
		localStorage.removeItem('auth');
		await onLogout(this.$apolloProvider.defaultClient);
		this.$router.go(0);
	}
}
