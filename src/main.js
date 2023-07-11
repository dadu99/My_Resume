import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
//import { loadFonts } from './plugins/webfontloader'
import router from './router/index.js'



createApp(App).use(router)
    .use(vuetify)
    .use(router)
    .mount('#app')



