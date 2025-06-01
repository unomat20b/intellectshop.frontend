import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'  // 👈 сюда

import router from './router'

createApp(App).use(router).mount('#app')