import { createApp } from 'vue'
import './global.css'
import './assets/scss/style.scss'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia';

createApp(App).use(createPinia()).use(router).mount('#app')
