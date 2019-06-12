import { CreateLocationInput, GameVersion, Location, LocationType } from '@/shared/graphql.schema';
import { ValidationRule } from '@/shared/validation-rule';
import { GraphQLError } from 'graphql';
import gql from 'graphql-tag';
import { QueryResult } from 'vue-apollo/types/vue-apollo';
import { Component, Model, Vue } from 'vue-property-decorator';
import {
	VAutocomplete,
	VBtn,
	VCard,
	VCardActions,
	VCardText,
	VCardTitle,
	VCheckbox,
	VContainer,
	VDialog,
	VFlex,
	VLayout,
	VSpacer,
	VTextField
} from 'vuetify-tsx';

@Component
export default class CreateLocation extends Vue {
	@Model('close', { type: Boolean })
	public open!: boolean;

	public name: string = '';
	public selectedParent: Location | null = null;
	public selectedType: LocationType | null = null;
	public selectedGameVersion: GameVersion | null = null;
	public canTrade: boolean = false;
	public locations: Location[] = [];
	public locationTypes: LocationType[] = [];
	public gameVersions: GameVersion[] = [];

	public readonly nameRules: ValidationRule[] = [
		(v: string): boolean | string => !!v || 'Name is required',
		(v: string): boolean | string => v.length >= 3 || 'Name must be greater than or equals 3 characters'
	];

	public errors: GraphQLError[] | null = null;
	public errorMessage: any | null = null;

	constructor() {
		super();
	}

	public get invalid(): boolean {
		return this.name.length < 3 || this.selectedType === null || this.selectedGameVersion === null;
	}

	public displayWithLocation(location: Location): string {
		let displayValue: string = location.name;
		displayValue += ` (${location.type.name})`;
		if (location.parentLocation) {
			displayValue += ` - (${location.parentLocation.name})`;
		}
		return displayValue;
	}

	public async create(): Promise<void> {
		try {
			this.errors = null;
			this.errorMessage = null;
			await this.$apollo.mutate({
				mutation: gql`
					mutation CreateLocation($input: CreateLocationInput!) {
						createLocation(input: $input) {
							id
							name
						}
					}
				`,
				variables: {
					input: {
						name: this.name,
						parentLocationId: this.selectedParent ? this.selectedParent.id : undefined,
						typeId: this.selectedType!.id,
						inGameSinceVersionId: this.selectedGameVersion!.id,
						inGameSince: new Date().toISOString(),
						canTrade: this.canTrade
					} as CreateLocationInput
				}
			});
		} catch (error) {
			console.error(error.graphQLErrors);
			this.errors = error.graphQLErrors as GraphQLError[];
			this.errorMessage = this.errors[0].message;
			return;
		}

		this.$emit('close');
	}

	public render(): JSX.Element {
		let errorContent: JSX.Element | null = null;
		if (this.errorMessage) {
			errorContent = (
				<VFlex md12>
					<p class="red--text">{this.errorMessage.message}</p>
				</VFlex>
			);
		}
		return (
			<VDialog v-model={this.open} persistent max-width="540px">
				<VCard>
					<VCardTitle>
						<span class="headline">Register new Location</span>
					</VCardTitle>
					<VCardText>
						<VContainer grid-list-md>
							<VLayout row wrap>
								<VFlex md12>
									<VTextField
										v-model={this.name}
										rules={this.nameRules}
										label="Name"
										required
									></VTextField>
								</VFlex>
								<VFlex md8>
									<VAutocomplete
										v-model={this.selectedType}
										items={this.locationTypes}
										return-object
										item-text="name"
										label="Type"
										// required
									></VAutocomplete>
								</VFlex>
								<VFlex md4>
									<VAutocomplete
										v-model={this.selectedGameVersion}
										items={this.gameVersions}
										return-object
										item-text="identifier"
										label="Exists since version"
										// required
									></VAutocomplete>
								</VFlex>
								<VFlex md12>
									<VAutocomplete
										v-model={this.selectedParent}
										items={this.locations}
										return-object
										item-text={this.displayWithLocation}
										label="Parent"
										clearable
									></VAutocomplete>
								</VFlex>
								<VFlex md12>
									<VCheckbox label="Can Trade" v-model={this.canTrade}></VCheckbox>
								</VFlex>
								{errorContent}
							</VLayout>
						</VContainer>
					</VCardText>
					<VCardActions>
						<VSpacer></VSpacer>
						<VBtn color="warning" onClick={(): this => this.$emit('close')}>
							Cancel
						</VBtn>
						<VBtn color="success" onClick={(): Promise<void> => this.create()} disabled={this.invalid}>
							Create
						</VBtn>
					</VCardActions>
				</VCard>
			</VDialog>
		);
	}

	protected async beforeMount(): Promise<void> {
		const gameVersionResult: QueryResult<{
			locations: Location[];
			locationTypes: LocationType[];
			gameVersions: GameVersion[];
		}> = await this.$apollo.query({
			query: gql`
				query data {
					locations {
						id
						name
						parentLocation {
							id
							name
						}
						type {
							id
							name
						}
					}
					locationTypes {
						id
						name
					}
					gameVersions {
						id
						identifier
					}
				}
			`
		});
		this.locations = gameVersionResult.data.locations;
		this.locationTypes = gameVersionResult.data.locationTypes;
		this.gameVersions = gameVersionResult.data.gameVersions;
		this.selectedGameVersion = this.gameVersions[0];
	}
}
