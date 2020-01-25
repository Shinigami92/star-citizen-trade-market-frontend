import { CreateAccountInput } from '@/shared/graphql.schema';
import { ValidationRule } from '@/shared/validation-rule';
import { FetchResult } from 'apollo-link';
import { GraphQLError } from 'graphql';
import gql from 'graphql-tag';
import isEmail from 'validator/lib/isEmail';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

function checkErrorMessage(message: string | null, expectedMessage: string): string | true {
  return !message || message !== expectedMessage || message;
}

@Component
export default class SignUp extends Vue {
  // Error message must be outside the component, otherwise rules cannot find it
  public static errorMessage: string | null = null;
  public errors: GraphQLError[] | null = null;

  public username: string = '';
  public handle: string = '';
  public email: string = '';
  public confirmEmail: string = '';

  public readonly usernameRules: ValidationRule[] = [
    (v) => !!v || 'Username is required',
    (v) => v.length >= 3 || 'Username must be greater than or equals 3 characters',
    (v) => checkErrorMessage(SignUp.errorMessage, `Username ${v} is already in use`)
  ];
  public readonly handleRules: ValidationRule[] = [
    (v) => !!v || 'Handle is required',
    (v) => v.length <= 50 || 'Handle must be less than 50 characters',
    (v) => checkErrorMessage(SignUp.errorMessage, `Star Citizen Handle ${v} is already taken by another user`)
  ];
  public readonly emailRules: ValidationRule[] = [
    (v) => !!v || 'E-Mail is required',
    (v) => isEmail(v) || 'E-Mail must be valid',
    (v) => checkErrorMessage(SignUp.errorMessage, `Email ${v} is already in use`)
  ];
  public readonly confirmEmailRules: ValidationRule[] = [
    (v) => !!v || 'Confirm E-Mail is required',
    (v) => v === (this.$refs.emailInput as HTMLInputElement).value || 'Must be equals to E-Mail'
  ];

  public constructor() {
    super();
  }

  public get invalid(): boolean {
    return (
      this.usernameRules.some((rule) => rule(this.username) !== true) ||
      this.handleRules.some((rule) => rule(this.handle) !== true) ||
      this.emailRules.some((rule) => rule(this.email) !== true) ||
      this.confirmEmailRules.some((rule) => rule(this.confirmEmail) !== true)
    );
  }

  public async submit(): Promise<void> {
    try {
      this.errors = null;
      SignUp.errorMessage = null;
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
      SignUp.errorMessage = JSON.parse(JSON.stringify(this.errors[0].message)).message;
      (this.$refs.form as any).validate();
    }
  }
}
