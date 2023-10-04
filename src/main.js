import { createApp } from "vue";
import App from "../src/App.vue";
import vuetify from "../src/plugins/vuetify";
import router from "../src/router/index.js";

createApp(App).use(router).use(vuetify).use(router).mount("#app");
