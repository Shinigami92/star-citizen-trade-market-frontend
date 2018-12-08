import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
	public drawer: boolean = true;

	constructor() {
		super();
	}

	public get currentUser(): any | null {
		const auth: string | null = localStorage.getItem('auth');
		if (auth === null) {
			return null;
		}
		return JSON.parse(auth);
	}

	public signOut(): void {
		localStorage.removeItem('auth');
		this.$router.go(0);
	}
}
