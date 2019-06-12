import VDatetimePicker from '@/components/datetime-picker/datetime-picker';
import { CreateGameVersionInput } from '@/shared/graphql.schema';
import { ValidationRule } from '@/shared/validation-rule';
import { GraphQLError } from 'graphql';
import gql from 'graphql-tag';
import { Component, Model, Vue } from 'vue-property-decorator';
import {
	VBtn,
	VCard,
	VCardActions,
	VCardText,
	VCardTitle,
	VContainer,
	VDialog,
	VFlex,
	VIcon,
	VLayout,
	VSpacer,
	VTextField
} from 'vuetify-tsx';

@Component
export default class CreateGameVersion extends Vue {
	@Model('close', { type: Boolean })
	public open!: boolean;

	public identifier: string = '';

	public release: Date | null = null;

	public releaseMenu: boolean = false;

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
			<VDialog v-model={this.open} persistent max-width="360px">
				<VCard>
					<VCardTitle>
						<span class="headline">Register new Game Version</span>
					</VCardTitle>
					<VCardText>
						<VContainer grid-list-md>
							<VLayout row wrap>
								<VFlex md12>
									<VTextField
										v-model={this.identifier}
										rules={this.identifierRules}
										label="Identifier"
										counter="18"
										required
									></VTextField>
								</VFlex>
								<VFlex md12>
									<p>e.g. 3.0.0-live.695052</p>
								</VFlex>
								<VFlex md12>
									<VDatetimePicker v-model={this.release} label="Release" format="YYYY-MM-DD HH:mm">
										<template slot="dateIcon">
											<VIcon>fas fa-calendar</VIcon>
										</template>
										<template slot="timeIcon">
											<VIcon>fas fa-clock</VIcon>
										</template>
									</VDatetimePicker>
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
}
