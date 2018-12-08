import { GraphQLError } from 'graphql';
import gql from 'graphql-tag';
import { isEmail } from 'validator';
import { QueryResult } from 'vue-apollo/types/vue-apollo';
import { Component, Vue } from 'vue-property-decorator';

export type ValidationRule<V = string> = (v: V) => V | boolean;

@Component
export default class SignUp extends Vue {
	public valid: boolean = false;
	public errors: GraphQLError[] | null = null;
	public errorMessage: any | null = null;

	public username: string = '';
	public handle: string = '';
	public email: string = '';
	public confirmEmail: string = '';

	public readonly usernameRules: ValidationRule[] = [
		(v: string): boolean | string => !!v || 'Username is required',
		(v: string): boolean | string => v.length >= 3 || 'Username must be greater than or equals 3 characters'
	];
	public readonly handleRules: ValidationRule[] = [
		(v: string): boolean | string => !!v || 'Handle is required',
		(v: string): boolean | string => v.length <= 50 || 'Handle must be less than 50 characters'
	];
	public readonly emailRules: ValidationRule[] = [
		(v: string): boolean | string => !!v || 'E-Mail is required',
		(v: string): boolean | string => isEmail(v) || 'E-Mail must be valid'
	];
	public readonly confirmEmailRules: ValidationRule[] = [
		(v: string): boolean | string => !!v || 'Confirm E-Mail is required',
		(v: string): boolean | string => v !== this.email || 'Must be equals to E-Mail'
	];

	constructor() {
		super();
	}

	public async submit(): Promise<void> {
		try {
			const result: QueryResult<any> = await this.$apollo.mutate({
				mutation: gql`
					mutation SignUp($user: CreateAccountInput!) {
						signUp(createAccountInput: $user) {
							id
							username
						}
					}
				`,
				variables: {
					user: {
						username: this.username,
						email: this.email,
						handle: this.handle
					}
				}
			});
			console.log(result.data);
		} catch (error) {
			console.error(error.graphQLErrors);
			this.errors = error.graphQLErrors as GraphQLError[];
			this.errorMessage = JSON.parse(this.errors[0].message);
		}
	}
}
