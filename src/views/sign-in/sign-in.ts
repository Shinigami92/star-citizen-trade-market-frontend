import { onLogin } from '@/plugins/apollo';
import { CURRENT_USER_DATA } from '@/shared/current-user';
import { AuthToken } from '@/shared/graphql.schema';
import { ValidationRule } from '@/shared/validation-rule';
import { ApolloQueryResult } from 'apollo-client';
import { GraphQLError } from 'graphql';
import gql from 'graphql-tag';
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';

@Component
export default class SignIn extends Vue {
  // Error message must be outside the component, otherwise rules cannot find it
  private static errorMessage: string | null = null;

  public username: string = '';
  public password: string = '';

  public showPassword: boolean = false;

  public readonly usernameRules: ValidationRule[] = [
    (v) => !!v || 'Username is required',
    (v) => v.length >= 3 || 'Username must be greater than or equals 3 characters',
    (v) => !SignIn.errorMessage || SignIn.errorMessage !== 'Unauthorized' || 'That username or password is incorrect'
  ];
  public readonly passwordRules: ValidationRule[] = [(v) => !!v || 'Password is required'];

  public constructor() {
    super();
  }

  public get invalid(): boolean {
    return (
      this.usernameRules.some((rule) => rule(this.username) !== true) ||
      this.passwordRules.some((rule) => rule(this.password) !== true)
    );
  }

  public async submit(): Promise<void> {
    try {
      SignIn.errorMessage = null;
      const result: ApolloQueryResult<{ signIn: AuthToken }> = await this.$apollo.query({
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
      localStorage.setItem(CURRENT_USER_DATA, JSON.stringify(result.data.signIn));
      await onLogin(this.$apolloProvider.defaultClient, result.data.signIn.token);
      this.$root.$emit('USER_CHANGED');
      this.$router.push('/trading');
    } catch (error) {
      console.error(error.graphQLErrors);
      const errors: GraphQLError[] = error.graphQLErrors;
      SignIn.errorMessage = JSON.parse(JSON.stringify(errors[0].message)).error;
      (this.$refs.form as any).validate();
    }
  }

  @Watch('username')
  @Watch('password')
  protected clearErrorMessage(): void {
    SignIn.errorMessage = null;
  }
}
