import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as LaIconsFlat from "oh-vue-icons/icons/la";

const La = Object.values({ ...LaIconsFlat });

addIcons(...La);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app')
