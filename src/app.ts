import { Component, Vue } from 'vue-property-decorator';
import { CurrentUser, currentUser } from './shared/current-user';

@Component
export default class App extends Vue {
	public readonly currentUser: CurrentUser | null = currentUser();

	public drawer: boolean = true;

	constructor() {
		super();
	}

	public signOut(): void {
		localStorage.removeItem('auth');
		this.$router.go(0);
	}
}
