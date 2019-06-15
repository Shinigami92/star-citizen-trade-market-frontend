import { Component, Vue } from 'vue-property-decorator';
import { VLayout } from 'vuetify-tsx';

@Component
export default class MyTransactions extends Vue {
	public render(): JSX.Element {
		return (
			<VLayout align-start justify-start column>
				<h1 class="display-1">soon™</h1>
			</VLayout>
		);
	}
}
