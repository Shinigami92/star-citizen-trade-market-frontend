import { CreateLocationInput, GameVersion, Location, LocationType } from '@/shared/graphql.schema';
import { ValidationRule } from '@/shared/validation-rule';
import { GraphQLError } from 'graphql';
import gql from 'graphql-tag';
import { QueryResult } from 'vue-apollo/types/vue-apollo';
import { Component, Model, Vue } from 'vue-property-decorator';

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
