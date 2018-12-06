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
export default class ItemDashboard extends Vue {}
