import HelloWorld from '@/components/hello-world/hello-world.component.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
	components: {
		HelloWorld
	}
})
export default class Home extends Vue {}
