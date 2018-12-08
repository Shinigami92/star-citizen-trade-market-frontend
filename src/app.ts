import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
	public drawer: boolean = true;

	constructor() {
		super();
	}
}
