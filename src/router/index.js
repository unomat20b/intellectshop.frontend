import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Catalog from '../pages/Catalog.vue'
import About from '../pages/About.vue'
import Services from '../pages/Services.vue'
import Projects from '../pages/Projects.vue'
import ServiceApple from '../pages/ServiceApple.vue'
import ServiceAI from '../pages/ServiceAI.vue'
import ServiceAudit from '../pages/ServiceAudit.vue'




export default createRouter({
  history: createWebHistory('/'), // ⚠️ важно!
  routes: [
    { path: '/',        component: Home },
    { path: '/catalog', component: Catalog },
    { path: '/about', component: About },
    { path: '/services', component: Services },
    { path: '/services/apple', component: ServiceApple },
    { path: '/services/ai', component: ServiceAI },
    { path: '/services/audit', component: ServiceAudit },
    { path: '/projects', component: Projects }
  ],
})