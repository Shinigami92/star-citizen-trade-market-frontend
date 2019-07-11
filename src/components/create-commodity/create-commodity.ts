import { CommodityCategory, GameVersion } from '@/shared/graphql.schema';
import { ValidationRule } from '@/shared/validation-rule';
import { ApolloQueryResult } from 'apollo-client';
import { GraphQLError } from 'graphql';
import gql from 'graphql-tag';
import Vue from 'vue';
import { Component, Model } from 'vue-property-decorator';

@Component({
	apollo: {
		commodityCategories: gql`
			query commodityCategories {
				commodityCategories {
					id
					name
				}
			}
		`
	}
})
export default class CreateCommodity extends Vue {
	@Model('close', { type: Boolean })
	public open!: boolean;

	public name: string = '';

	public selectedCommodityCategory: CommodityCategory | null = null;

	public selectedGameVersion: GameVersion | null = null;

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
		return this.name.length < 3 || this.selectedCommodityCategory === null;
	}

	public async create(): Promise<void> {
		try {
			this.errors = null;
			this.errorMessage = null;
			await this.$apollo.mutate({
				mutation: gql`
					mutation CreateCommodity($input: CreateCommodityInput!) {
						createCommodity(input: $input) {
							id
							name
						}
					}
				`,
				variables: {
					input: {
						name: this.name,
						commodityCategoryId: this.selectedCommodityCategory!.id,
						inGameSinceVersionId: this.selectedGameVersion ? this.selectedGameVersion.id : undefined
					}
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
		const gameVersionResult: ApolloQueryResult<any> = await this.$apollo.query({
			query: gql`
				query gameVersions {
					gameVersions {
						id
						identifier
					}
				}
			`
		});
		this.gameVersions = gameVersionResult.data.gameVersions;
		this.selectedGameVersion = this.gameVersions[0];
	}
}
