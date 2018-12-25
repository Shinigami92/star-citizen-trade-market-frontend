import { CurrentUser, currentUser } from '@/shared/current-user';
import { GameVersion, Location } from '@/shared/graphql.schema';
import { VBreadcrumbItem } from '@/shared/vuetify/v-breadcrumb';
import gql from 'graphql-tag';
import { QueryResult } from 'vue-apollo/types/vue-apollo';
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component
export default class LocationDashboard extends Vue {
	public readonly currentUser: CurrentUser | null = currentUser();

	public locationId?: string | null = null;
	public location?: Location | null = null;
	public readonly breadcrumbItems: VBreadcrumbItem[] = [];

	public selectedLocation: Location | null = null;

	public readonly locations: Location[] = [];

	public readonly gameVersions: GameVersion[] = [];
	public gameVersion: GameVersion | null = null;

	constructor() {
		super();
	}

	public displayWithLocation(location: Location): string {
		let displayValue: string = location.name;
		displayValue += ` (${location.type.name})`;
		if (location.parentLocation) {
			displayValue += ` - (${location.parentLocation.name})`;
		}
		return displayValue;
	}

	protected async beforeMount(): Promise<void> {
		this.locationId = this.$route.params.id;
		const queryResult: QueryResult<{
			gameVersions: GameVersion[];
		}> = await this.$apollo.query({
			query: gql`
				query tradeData {
					gameVersions {
						id
						identifier
					}
				}
			`
		});
		this.gameVersions.push(...queryResult.data.gameVersions);
		this.gameVersion = this.gameVersions[0];
	}

	@Watch('$route')
	protected onRouteChanged(to: Route, from: Route): void {
		if (to.params.id !== from.params.id) {
			this.locationId = to.params.id;
		}
	}

	@Watch('selectedLocation')
	protected onSelectedLocationChanged(selectedLocation: Location | null): void {
		if (selectedLocation) {
			this.locationId = selectedLocation.id;
		}
		this.selectedLocation = null;
	}

	@Watch('locationId')
	protected async onLocationIdChanged(to?: string | null, from?: string | null): Promise<void> {
		console.log({ to, from });
		if (to === from) {
			return;
		} else if (to === undefined || to === null) {
			const result: QueryResult<{ locations: Location[] }> = await this.$apollo.query({
				query: gql`
					query locations {
						locations {
							id
							name
							type {
								name
							}
							parentLocation {
								name
							}
						}
					}
				`
			});
			this.locations.splice(0, this.locations.length);
			this.locations.push(...result.data.locations);
			this.location = null;
			return;
		}

		const result: QueryResult<{ location: Location }> = await this.$apollo.query({
			query: gql`
				query location($id: ID!) {
					location(id: $id) {
						id
						name
						type {
							name
						}
						parentLocation {
							id
							name
							parentLocation {
								id
								name
								parentLocation {
									id
									name
									parentLocation {
										id
										name
									}
								}
							}
						}
						children {
							id
							name
							type {
								name
							}
						}
					}
				}
			`,
			variables: { id: to },
			fetchPolicy: 'no-cache'
		});
		this.location = result.data.location;
		this.breadcrumbItems.splice(0, this.breadcrumbItems.length);
		if (this.location) {
			let parentLocation: Location | null | undefined = this.location.parentLocation;
			while (parentLocation) {
				this.breadcrumbItems.push({
					text: parentLocation.name,
					to: `/location/${parentLocation.id}`
				});
				parentLocation = parentLocation.parentLocation;
			}
			this.breadcrumbItems.reverse();
			this.breadcrumbItems.push({
				text: this.location.name,
				disabled: true
			});
		}
	}
}
