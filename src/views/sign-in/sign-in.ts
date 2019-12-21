import { onLogin } from '@/plugins/apollo';
import { CURRENT_USER_DATA } from '@/shared/current-user';
import { AuthToken } from '@/shared/graphql.schema';
import { ValidationRule } from '@/shared/validation-rule';
import { ApolloQueryResult } from 'apollo-client';
import { GraphQLError } from 'graphql';
import gql from 'graphql-tag';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

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
      await onLogin(this.$apolloProvider!.defaultClient, result.data.signIn.token);
      this.$router.push('/trading');
    } catch (error) {
      console.error(error.graphQLErrors);
      this.errors = error.graphQLErrors as GraphQLError[];
    }
  }
}
