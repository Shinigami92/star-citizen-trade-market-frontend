import { CreateGameVersionInput } from '@/shared/graphql.schema';
import { GraphQLError } from 'graphql';
import gql from 'graphql-tag';
import { Component, Model, Vue } from 'vue-property-decorator';

export type ValidationRule<V = string> = (v: V) => V | boolean;

@Component
export default class CreateGameVersion extends Vue {
	@Model('close', { type: Boolean })
	public open!: boolean;

	public identifier: string = '';

	public readonly identifierRules: ValidationRule[] = [
		(v: string): boolean | string => !!v || 'Identifier is required',
		(v: string): boolean | string => v.length >= 16 || 'Identifier must be greater than or equals 16 characters',
		(v: string): boolean | string => v.length <= 18 || 'Identifier must be less than or equals 18 characters'
	];

	public errors: GraphQLError[] | null = null;
	public errorMessage: any | null = null;

	constructor() {
		super();
	}

	public get invalid(): boolean {
		return this.identifier.length < 16 || this.identifier.length > 18;
	}

	public async create(): Promise<void> {
		try {
			this.errors = null;
			this.errorMessage = null;
			await this.$apollo.mutate({
				mutation: gql`
					mutation CreateGameVersion($input: CreateGameVersionInput!) {
						createGameVersion(input: $input) {
							id
							identifier
						}
					}
				`,
				variables: {
					input: {
						identifier: this.identifier
					} as CreateGameVersionInput
				},
				context: { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth')!).token}` } }
			});
		} catch (error) {
			console.error(error.graphQLErrors);
			this.errors = error.graphQLErrors as GraphQLError[];
			this.errorMessage = this.errors[0].message;
			return;
		}

		this.$emit('close');
	}
}
