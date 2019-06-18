import { Component, Vue } from 'vue-property-decorator';
import { VBtn, VCard, VCardActions, VCardTitle, VContainer, VFlex, VImg, VLayout } from 'vuetify-tsx';

@Component
export default class ShoutOut extends Vue {
	constructor() {
		super();
	}

	public render(): JSX.Element {
		return (
			<VLayout align-start justify-start column>
				<h1 class="display-2">Shout Outs</h1>
				<VContainer grid-list-md fluid>
					<VLayout row wrap>
						<VFlex style="min-width: 505px" lg5 md6 sm11 xs12>
							<VCard>
								<div class="pa-2">
									<VImg
										// tslint:disable-next-line:max-line-length
										src="https://yt3.ggpht.com/UjLOwPyJDQ_y4EBi_s3biuPZNIac9DVbbdCATk4TVha7a0LUoo13T_bHVGJ-8B9aaRh-i78z2mdQyGI=s1121-nd"
										aspect-ratio="1.01326259947"
										max-width="200"
									></VImg>
								</div>
								<VCardTitle primary-title>
									<div>
										<h3 class="headline mb-0">KnebelDE</h3>
										<div>
											Supported this website in the following video (15:02):
											<iframe
												width="465"
												height="262"
												src="https://www.youtube.com/embed/65y8GTI6GSI?start=902"
												frameborder="0"
												allowfullscreen
												{...{
													attrs: { allow: 'autoplay; encrypted-media; picture-in-picture' }
												}}
											></iframe>
										</div>
									</div>
								</VCardTitle>
								<VCardActions>
									<VBtn
										href="https://www.youtube.com/user/Knebelinolein"
										target="_blank"
										color="red accent-4"
									>
										YouTube
									</VBtn>
									<VBtn href="https://www.twitch.tv/knebelde" target="_blank" color="deep-purple">
										Twitch
									</VBtn>
									<VBtn href="https://www.patreon.com/KnebelDE" target="_blank" color="deep-orange">
										Patreon
									</VBtn>
									<VBtn
										href="https://www.facebook.com/KnebelDE"
										target="_blank"
										color="indigo darken-1"
									>
										Facebook
									</VBtn>
								</VCardActions>
							</VCard>
						</VFlex>
						<VFlex style="min-width: 400px" lg5 md6 sm11 xs12>
							<VCard style="background-image: url(https://www.black-horizons.space/images/background_20170430.jpg);">
								<div class="pa-2">
									<VImg
										src="https://www.black-horizons.space/styles/pbtech/theme/images/bh_logo.png"
										aspect-ratio="10.9264705882"
									></VImg>
								</div>
								<VCardTitle primary-title>
									<div>
										<h3 class="headline mb-0">Black Horizons</h3>
										<div>Clan of the website owner</div>
									</div>
								</VCardTitle>
								<VCardActions>
									<VBtn href="https://www.black-horizons.space" target="_blank" color="orange">
										Forum
									</VBtn>
								</VCardActions>
							</VCard>
						</VFlex>
						<VFlex style="min-width: 400px" lg5 md6 sm11 xs12>
							<VCard>
								<VImg
									src="https://starcitizenbase.de/wp-content/uploads/2018/02/Bild_2_Knusper_Logo-800x445.jpg"
									aspect-ratio="1.79775280899"
								></VImg>
								<VCardTitle primary-title>
									<div>
										<h3 class="headline mb-0">Knusper</h3>
										<div>Hey creates great German content for Star Citizen</div>
									</div>
								</VCardTitle>
								<VCardActions>
									<VBtn
										href="https://www.youtube.com/channel/UCoRflWTWHvr0jbKzIVYtGzw"
										target="_blank"
										color="red accent-4"
									>
										YouTube
									</VBtn>
									<VBtn href="https://www.patreon.com/Knusper" target="_blank" color="deep-orange">
										Patreon
									</VBtn>
									<VBtn
										href="https://www.facebook.com/KNUSPERLIVE"
										target="_blank"
										color="indigo darken-1"
									>
										Facebook
									</VBtn>
								</VCardActions>
							</VCard>
						</VFlex>
					</VLayout>
				</VContainer>
			</VLayout>
		);
	}
}
