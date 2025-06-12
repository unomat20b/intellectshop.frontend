import { createRouter, createWebHistory } from 'vue-router'

// Страницы
import Home from '../pages/Home.vue'
import Catalog from '../pages/Catalog.vue'
import About from '../pages/About.vue'
import Services from '../pages/Services.vue'
import Projects from '../pages/Projects.vue'
import ServiceApple from '../pages/services/ServiceApple.vue'
import ServiceAI from '../pages/services/ServiceAI.vue'
import ServiceAudit from '../pages/services/ServiceAudit.vue'

// Основной массив маршрутов
const routes = [
  { path: '/', component: Home },
  { path: '/catalog', component: Catalog },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/services/apple', component: ServiceApple },
  { path: '/services/ai', component: ServiceAI },
  { path: '/services/audit', component: ServiceAudit },
  { path: '/projects', component: Projects },

  // --- iPhone ---
  { path: '/services/apple/iphone/IPhoneBasics', component: () => import('../pages/services/Apple/iPhone/IPhoneBasics.vue') },
  { path: '/services/apple/iphone/IPhonePrivacy', component: () => import('../pages/services/Apple/iPhone/IPhonePrivacy.vue') },
  { path: '/services/apple/iphone/ICloudDocs', component: () => import('../pages/services/Apple/iPhone/ICloudDocs.vue') },
  { path: '/services/apple/iphone/DataBackup', component: () => import('../pages/services/Apple/iPhone/DataBackup.vue') },
  { path: '/services/apple/iphone/IPhoneApps', component: () => import('../pages/services/Apple/iPhone/IPhoneApps.vue') },
  { path: '/services/apple/iphone/Accessibility', component: () => import('../pages/services/Apple/iPhone/Accessibility.vue') },

  // --- iPad ---
  { path: '/services/apple/ipad/apple-pencil-usage', component: () => import('../pages/services/Apple/iPad/apple-pencil-usage.vue') },
  { path: '/services/apple/ipad/ipad-workflow-tools', component: () => import('../pages/services/Apple/iPad/ipad-workflow-tools.vue') },
  { path: '/services/apple/ipad/ipad-remote-learning', component: () => import('../pages/services/Apple/iPad/ipad-remote-learning.vue') },
  { path: '/services/apple/ipad/ipad-apps-sync', component: () => import('../pages/services/Apple/iPad/ipad-apps-sync.vue') },
  { path: '/services/apple/ipad/ipad-in-education', component: () => import('../pages/services/Apple/iPad/ipad-in-education.vue') },

  // --- Mac ---
  { path: '/services/apple/mac/macos-basics', component: () => import('../pages/services/Apple/Mac/macos-basics.vue') },
  { path: '/services/apple/mac/macos-navigation-tools', component: () => import('../pages/services/Apple/Mac/macos-navigation-tools.vue') },
  { path: '/services/apple/mac/macos-time-machine', component: () => import('../pages/services/Apple/Mac/macos-time-machine.vue') },
  { path: '/services/apple/mac/macos-apps-install', component: () => import('../pages/services/Apple/Mac/macos-apps-install.vue') },
  { path: '/services/apple/mac/macos-file-management', component: () => import('../pages/services/Apple/Mac/macos-file-management.vue') },
  { path: '/services/apple/mac/macos-thirdparty-workflow', component: () => import('../pages/services/Apple/Mac/macos-thirdparty-workflow.vue') },

  // --- Business ---
  { path: '/services/apple/business/AppleInBusiness', component: () => import('../pages/services/Apple/Business/AppleInBusiness.vue') },
  { path: '/services/apple/business/Keynote', component: () => import('../pages/services/Apple/Business/Keynote.vue') },
  { path: '/services/apple/business/MacAndiPhone', component: () => import('../pages/services/Apple/Business/MacAndiPhone.vue') },

  // --- Creative ---
  { path: '/services/apple/creative/Davinci', component: () => import('../pages/services/Apple/Creative/Davinci.vue') },
  { path: '/services/apple/creative/AbletonLogic', component: () => import('../pages/services/Apple/Creative/AbletonLogic.vue') },
  { path: '/services/apple/creative/GarageBand', component: () => import('../pages/services/Apple/Creative/GarageBand.vue') },
  { path: '/services/apple/creative/PhotoEditingMobile', component: () => import('../pages/services/Apple/Creative/PhotoEditingMobile.vue') },
  { path: '/services/apple/creative/PhotoEditingMac', component: () => import('../pages/services/Apple/Creative/PhotoEditingMac.vue') },
  { path: '/services/apple/creative/CGIEffects', component: () => import('../pages/services/Apple/Creative/CGIEffects.vue') },
  { path: '/services/apple/creative/ThreeD', component: () => import('../pages/services/Apple/Creative/ThreeD.vue') },
  { path: '/services/apple/creative/Vector', component: () => import('../pages/services/Apple/Creative/Vector.vue') },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router