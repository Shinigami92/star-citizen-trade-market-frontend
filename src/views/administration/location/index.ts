import { VuetifyTableHeader } from '@/shared/vuetify/v-data-table';
import gql from 'graphql-tag';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
	apollo: {
		elements: gql`
			query {
				elements: locations {
					id
					name
					type {
						id
						name
					}
					parentLocation {
						id
						name
					}
					inGameSince
					inGameSinceVersion {
						id
						identifier
					}
					canTrade
				}
			}
		`
	}
})
export default class Index extends Vue {
	public readonly headers: VuetifyTableHeader[] = [
		{ text: 'Name', width: 240, value: 'name' },
		{ text: 'Type', width: 150, value: 'type.name' },
		{ text: 'Parent Location', width: 130, value: 'parentLocation.name' },
		{ text: 'First Time Seen', width: 240, value: 'inGameSince' },
		{ text: 'Since Version', width: 190, value: 'inGameSinceVersion.identifier' },
		{ text: 'Can Trade', width: 100, value: 'canTrade' },
		{ text: 'ID', width: 340, value: 'id' }
	];

	public tableHeight: number = 0;

	constructor() {
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
