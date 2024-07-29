import MicroFrontendVue from "http://localhost:7400/bundle.js";
import { createApp, ref, h, render } from 'vue';
console.log('a', MicroFrontendVue)

const Vue = createApp({
  setup() {
    const message = ref('Hello World!')
    return () => render(MicroFrontendVue.setup())
  }
}).mount('#app');

export default Vue;
