import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
	public fontSize: number = 12;

	public increaseFontSize(): void {
		if (this.fontSize < 16) {
			this.fontSize++;
		}
	}

	public decreaseFontSize(): void {
		if (this.fontSize > 10) {
			this.fontSize--;
		}
	}
}
