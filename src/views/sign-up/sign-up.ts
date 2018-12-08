// import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SignUp extends Vue {
	public readonly mutation: DocumentNode = gql`
		mutation SignUp($user: CreateAccountInput!) {
			signUp(createAccountInput: $user) {
				id
				username
			}
		}
	`;

	public username: string = '';
	public handle: string = '';
	public email: string = '';
	public confirmEmail: string = '';

	constructor() {
		super();
	}

	public get formValid(): boolean {
		return true;
	}
	public get variables(): {
		user: {
			username: string;
			email: string;
			handle: string;
		};
	} {
		return {
			user: {
				username: this.username,
				email: this.email,
				handle: this.handle
			}
		};
	}

	public signUp(): void {
		console.log('Test 2');
	}
}
