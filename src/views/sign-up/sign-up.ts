import { CreateAccountInput } from '@/shared/graphql.schema';
import { ValidationRule } from '@/shared/validation-rule';
import { FetchResult } from 'apollo-link';
import { GraphQLError } from 'graphql';
import gql from 'graphql-tag';
import { isEmail } from 'validator';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

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
		(v: string): boolean | string =>
			v === (this.$refs.emailInput as HTMLInputElement).value || 'Must be equals to E-Mail'
	];

	constructor() {
		super();
	}

	public async submit(): Promise<void> {
		try {
			this.errors = null;
			this.errorMessage = null;
			const result: FetchResult<any, Record<string, any>, Record<string, any>> = await this.$apollo.mutate({
				mutation: gql`
					mutation SignUp($input: CreateAccountInput!) {
						signUp(input: $input) {
							id
							username
						}
					}
				`,
				variables: {
					input: {
						username: this.username,
						email: this.email,
						handle: this.handle
					} as CreateAccountInput
				}
			});
			console.log(result.data);
			this.$router.push('/sign-in');
		} catch (error) {
			console.error(error.graphQLErrors);
			this.errors = error.graphQLErrors as GraphQLError[];
			this.errorMessage = JSON.parse(this.errors[0].message);
		}
	}
}
