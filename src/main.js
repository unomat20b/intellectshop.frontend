import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import './assets/tailwind.css'  
import { routes } from './router/routes'

export const createApp = ViteSSG(
  App,
  { routes, base: '/' }
)
