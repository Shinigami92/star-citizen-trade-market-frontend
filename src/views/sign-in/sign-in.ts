import { AuthToken } from '@/shared/graphql.schema';
import { ValidationRule } from '@/shared/validation-rule';
import { GraphQLError } from 'graphql';
import gql from 'graphql-tag';
import { QueryResult } from 'vue-apollo/types/vue-apollo';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SignUp extends Vue {
	public valid: boolean = false;
	public errors: GraphQLError[] | null = null;
	public errorMessage: any | null = null;

	public username: string = '';
	public password: string = '';

	public showPassword: boolean = false;

	public readonly usernameRules: ValidationRule[] = [
		(v: string): boolean | string => !!v || 'Username is required',
		(v: string): boolean | string => v.length >= 3 || 'Username must be greater than or equals 3 characters'
	];
	public readonly passwordRules: ValidationRule[] = [(v: string): boolean | string => !!v || 'Password is required'];

	constructor() {
		super();
	}

	public async submit(): Promise<void> {
		try {
			const result: QueryResult<{ signIn: AuthToken }> = await this.$apollo.query({
				query: gql`
					query SignIn($username: String!, $password: String!) {
						signIn(username: $username, password: $password) {
							id
							username
							roles
							token
						}
					}
				`,
				variables: {
					username: this.username,
					password: this.password
				}
			});
			localStorage.setItem('auth', JSON.stringify(result.data.signIn));
			this.$router.push('/trading');
			this.$router.go(0);
		} catch (error) {
			console.error(error.graphQLErrors);
			this.errors = error.graphQLErrors as GraphQLError[];
		}
	}
}
