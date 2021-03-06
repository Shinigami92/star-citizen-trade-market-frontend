import { CreateGameVersionInput } from '@/shared/graphql.schema';
import { ValidationRule } from '@/shared/validation-rule';
import { GraphQLError } from 'graphql';
import gql from 'graphql-tag';
import Vue from 'vue';
import { Component, Model } from 'vue-property-decorator';

@Component
export default class CreateGameVersion extends Vue {
  @Model('close', { type: Boolean })
  public open!: boolean;

  public identifier: string = '';

  public release: Date | null = null;

  public releaseMenu: boolean = false;

  public readonly identifierRules: ValidationRule[] = [
    (v) => !!v || 'Identifier is required',
    (v) => v.length >= 16 || 'Identifier must be greater than or equals 16 characters',
    (v) => v.length <= 18 || 'Identifier must be less than or equals 18 characters'
  ];

  public errors: GraphQLError[] | null = null;
  public errorMessage: any | null = null;

  public constructor() {
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
            identifier: this.identifier,
            release: this.release !== null ? this.release.toISOString() : undefined
          } as CreateGameVersionInput
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
}
