import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Catalog from '../pages/Catalog.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/catalog', component: Catalog }
]

export default createRouter({
  history: createWebHistory(),
  routes,
})