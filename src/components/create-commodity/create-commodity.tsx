import { CommodityCategory, GameVersion } from '@/shared/graphql.schema';
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
	VContainer,
	VDialog,
	VFlex,
	VLayout,
	VSpacer,
	VTextField
} from 'vuetify-tsx';

@Component
export default class CreateCommodity extends Vue {
	@Model('close', { type: Boolean })
	public open!: boolean;

	public name: string = '';

	public selectedCommodityCategory: CommodityCategory | null = null;

	public selectedGameVersion: GameVersion | null = null;

	public gameVersions: GameVersion[] = [];
	public commodityCategories: CommodityCategory[] = [];

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
		if (this.selectedCommodityCategory === null) {
			return;
		}
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
						commodityCategoryId: this.selectedCommodityCategory.id,
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
						<span class="headline">Register new Commodity</span>
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
										v-model={this.selectedCommodityCategory}
										items={this.commodityCategories}
										return-object
										item-text="name"
										label="Category"
										// required
									></VAutocomplete>
								</VFlex>
								<VFlex md4>
									<VAutocomplete
										v-model={this.selectedGameVersion}
										items={this.gameVersions}
										return-object
										item-text="identifier"
										label="Game Version"
										// required
									></VAutocomplete>
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
		const queryResult: QueryResult<{
			gameVersions: GameVersion[];
			commodityCategories: CommodityCategory[];
		}> = await this.$apollo.query({
			query: gql`
				query gameVersions {
					gameVersions {
						id
						identifier
					}
					commodityCategories {
						id
						name
					}
				}
			`
		});
		this.gameVersions = queryResult.data.gameVersions;
		this.commodityCategories = queryResult.data.commodityCategories;
		this.selectedGameVersion = this.gameVersions[0];
	}
}
