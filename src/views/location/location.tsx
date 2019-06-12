import { CurrentUser, currentUser } from '@/shared/current-user';
import { GameVersion, Location } from '@/shared/graphql.schema';
import { VBreadcrumbItem } from '@/shared/vuetify/v-breadcrumb';
import gql from 'graphql-tag';
import { QueryResult } from 'vue-apollo/types/vue-apollo';
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import 'vue-tsx-support/enable-check';
import {
	VAutocomplete,
	VBreadcrumbs,
	VBtn,
	VCard,
	VCardActions,
	VCardTitle,
	VContainer,
	VFlex,
	VIcon,
	VLayout
} from 'vuetify-tsx';

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

	public render(): JSX.Element {
		let content: JSX.Element | JSX.Element[];
		if (this.location) {
			const children: JSX.Element[] = [];
			for (const child of this.location.children) {
				children.push(
					<VFlex xs4>
						<VCard>
							<VCardTitle primary-title>
								<div>
									<h3 class="headline mb-0">{child.name}</h3>
									<div>Type: {child.type.name}</div>
									<div>Can Trade: {child.canTrade}</div>
									{/* <div>{child.description}</div> */}
								</div>
							</VCardTitle>
							<VCardActions>
								<VBtn to={`/location/${child.id}`} flat color="orange">
									Details
								</VBtn>
							</VCardActions>
						</VCard>
					</VFlex>
				);
			}
			content = [
				<VBreadcrumbs items={this.breadcrumbItems} large>
					<VIcon slot="divider">fas fa-chevron-right</VIcon>
				</VBreadcrumbs>,
				<VContainer grid-list-md fluid>
					<VLayout row wrap>
						<VFlex xs12>
							<VCard>
								<VCardTitle primary-title>
									<div>
										<h3 class="headline mb-0">{this.location.name}</h3>
										<div>Type: {this.location.type.name}</div>
										<div>Can Trade: {this.location.canTrade}</div>
										{/* <div>{location.description}</div> */}
									</div>
								</VCardTitle>
							</VCard>
						</VFlex>
						{children}
					</VLayout>
				</VContainer>
			];
		} else {
			content = (
				<VAutocomplete
					v-model={this.selectedLocation}
					items={this.locations}
					return-object
					item-text={this.displayWithLocation}
					label="Select Location"
				></VAutocomplete>
			);
		}

		return (
			<VLayout align-space-between justify-start column>
				{content}
			</VLayout>
		);
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
								id
								name
							}
							parentLocation {
								id
								name
							}
							canTrade
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
							id
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
						canTrade
						children {
							id
							name
							type {
								id
								name
							}
							canTrade
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
