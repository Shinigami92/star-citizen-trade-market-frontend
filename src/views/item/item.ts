import gql from 'graphql-tag';
import { Component, Vue } from 'vue-property-decorator';

@Component({
	apollo: {
		commodities: gql`
			query commodities {
				commodities {
					id
					name
					... on Commodity {
						commodityCategory {
							name
						}
					}
				}
			}
		`
	}
})
export default class ItemDashboard extends Vue {
	public pagination: {
		descending?: boolean;
		page?: number;
		rowsPerPage?: number;
		sortBy?: string;
		totalItems?: number;
	} = {
		rowsPerPage: 10
	};

	public headers: Array<{
		text: string;
		value: string;
		align?: 'left' | 'center' | 'right';
		sortable?: boolean;
		class?: string[] | string;
		width?: string;
	}> = [
		{ text: 'ID ', value: 'id', width: '400' },
		{ text: 'Name ', value: 'name' },
		{ text: 'Category ', value: 'commodityCategory.name' }
	];
	constructor() {
		super();
	}
}
