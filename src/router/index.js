import { createRouter, createWebHistory } from 'vue-router'

// Страницы
import Home from '../pages/Home.vue'
import Catalog from '../pages/Catalog.vue'
import About from '../pages/About.vue'
import Services from '../pages/Services.vue'
import Projects from '../pages/Projects.vue'
import AlphabetProject from '../pages/AlphabetProject.vue'
import ServiceApple from '../pages/Services/ServiceApple.vue'
import ServiceAI from '../pages/Services/ServiceAI.vue'
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
  { path: '/alphabet-project', component: AlphabetProject },

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

  // --- AI / Business ---
  { path: '/services/ai/business/process-analysis', component: () => import('../pages/services/ai/business/process-analysis.vue') },
  { path: '/services/ai/business/use-cases', component: () => import('../pages/services/ai/business/use-cases.vue') },
  { path: '/services/ai/business/model-selection', component: () => import('../pages/services/ai/business/model-selection.vue') },
  { path: '/services/ai/business/custom-agents', component: () => import('../pages/services/ai/business/custom-agents.vue') },
  { path: '/services/ai/business/intake-handling', component: () => import('../pages/services/ai/business/intake-handling.vue') },
  { path: '/services/ai/business/automation-requests', component: () => import('../pages/services/ai/business/automation-requests.vue') },
  { path: '/services/ai/business/data-integration', component: () => import('../pages/services/ai/business/data-integration.vue') },
  { path: '/services/ai/business/rag-setup', component: () => import('../pages/services/ai/business/rag-setup.vue') },
  { path: '/services/ai/business/file-sources', component: () => import('../pages/services/ai/business/file-sources.vue') },
  { path: '/services/ai/business/chatbot-deployment', component: () => import('../pages/services/ai/business/chatbot-deployment.vue') },
    { path: '/services/ai/business/n8n-zapier', component: () => import('../pages/services/ai/business/n8n-zapier.vue') },
  { path: '/services/ai/business/crm-workflows', component: () => import('../pages/services/ai/business/crm-workflows.vue') },
  { path: '/services/ai/business/auto-workflows', component: () => import('../pages/services/ai/business/auto-workflows.vue') },
  { path: '/services/ai/business/speech-recognition', component: () => import('../pages/services/ai/business/speech-recognition.vue') },
  { path: '/services/ai/business/voice-generation', component: () => import('../pages/services/ai/business/voice-generation.vue') },
  { path: '/services/ai/business/phone-bots', component: () => import('../pages/services/ai/business/phone-bots.vue') },
  { path: '/services/ai/business/local-llm', component: () => import('../pages/services/ai/business/local-llm.vue') },
  { path: '/services/ai/business/api-privacy', component: () => import('../pages/services/ai/business/api-privacy.vue') },
  { path: '/services/ai/business/staff-training', component: () => import('../pages/services/ai/business/staff-training.vue') },
  { path: '/services/ai/business/gpt-intro', component: () => import('../pages/services/ai/business/gpt-intro.vue') },
  { path: '/services/ai/business/workspace-integration', component: () => import('../pages/services/ai/business/workspace-integration.vue') },
  { path: '/services/ai/business/internal-bots', component: () => import('../pages/services/ai/business/internal-bots.vue') },

  // --- AI / Personal ---
  { path: '/services/ai/personal/goal-based-selection', component: () => import('../pages/services/ai/personal/goal-based-selection.vue') },
  { path: '/services/ai/personal/creative-use', component: () => import('../pages/services/ai/personal/creative-use.vue') },
  { path: '/services/ai/personal/agent-ui', component: () => import('../pages/services/ai/personal/agent-ui.vue') },
  { path: '/services/ai/personal/cloud-agent', component: () => import('../pages/services/ai/personal/cloud-agent.vue') },
  { path: '/services/ai/personal/custom-memory', component: () => import('../pages/services/ai/personal/custom-memory.vue') },
  { path: '/services/ai/personal/materials', component: () => import('../pages/services/ai/personal/materials.vue') },
  { path: '/services/ai/personal/pdf-analysis', component: () => import('../pages/services/ai/personal/pdf-analysis.vue') },
  { path: '/services/ai/personal/doc-generation', component: () => import('../pages/services/ai/personal/doc-generation.vue') },
  { path: '/services/ai/personal/midjourney-prompts', component: () => import('../pages/services/ai/personal/midjourney-prompts.vue') },
  { path: '/services/ai/personal/youtube-generation', component: () => import('../pages/services/ai/personal/youtube-generation.vue') },
  { path: '/services/ai/personal/idea-gen', component: () => import('../pages/services/ai/personal/idea-gen.vue') },
  { path: '/services/ai/personal/voice-to-text', component: () => import('../pages/services/ai/personal/voice-to-text.vue') },
  { path: '/services/ai/personal/email-helper', component: () => import('../pages/services/ai/personal/email-helper.vue') },
  { path: '/services/ai/personal/universal-agent', component: () => import('../pages/services/ai/personal/universal-agent.vue') },

  // --- Business IT Audit ---
  { path: '/services/business-it/infra-analysis', component: () => import('../pages/services/business-it/infra-analysis.vue') },
  { path: '/services/business-it/risk-detection', component: () => import('../pages/services/business-it/risk-detection.vue') },
  { path: '/services/business-it/transformation-strategy', component: () => import('../pages/services/business-it/transformation-strategy.vue') },
  { path: '/services/business-it/hosting-selection', component: () => import('../pages/services/business-it/hosting-selection.vue') },
  { path: '/services/business-it/cloud-comparison', component: () => import('../pages/services/business-it/cloud-comparison.vue') },
  { path: '/services/business-it/server-setup', component: () => import('../pages/services/business-it/server-setup.vue') },
  { path: '/services/business-it/hosting-backup', component: () => import('../pages/services/business-it/hosting-backup.vue') },
  { path: '/services/business-it/tool-selection', component: () => import('../pages/services/business-it/tool-selection.vue') },
  { path: '/services/business-it/tool-comparison', component: () => import('../pages/services/business-it/tool-comparison.vue') },
  { path: '/services/business-it/team-structure', component: () => import('../pages/services/business-it/team-structure.vue') },
  { path: '/services/business-it/onboarding-setup', component: () => import('../pages/services/business-it/onboarding-setup.vue') },
  { path: '/services/business-it/time-tracking', component: () => import('../pages/services/business-it/time-tracking.vue') },
  { path: '/services/business-it/docflow-rules', component: () => import('../pages/services/business-it/docflow-rules.vue') },
  { path: '/services/business-it/vpn-setup', component: () => import('../pages/services/business-it/vpn-setup.vue') },
  { path: '/services/business-it/infra-scan', component: () => import('../pages/services/business-it/infra-scan.vue') },
  { path: '/services/business-it/secure-alternatives', component: () => import('../pages/services/business-it/secure-alternatives.vue') },
  { path: '/services/business-it/access-roles', component: () => import('../pages/services/business-it/access-roles.vue') },
  { path: '/services/business-it/password-managers', component: () => import('../pages/services/business-it/password-managers.vue') },
  { path: '/services/business-it/access-automation', component: () => import('../pages/services/business-it/access-automation.vue') },
  { path: '/services/business-it/auth-logging', component: () => import('../pages/services/business-it/auth-logging.vue') },
  { path: '/services/business-it/doc-guidelines', component: () => import('../pages/services/business-it/doc-guidelines.vue') },
  { path: '/services/business-it/file-organization', component: () => import('../pages/services/business-it/file-organization.vue') },
  { path: '/services/business-it/repo-management', component: () => import('../pages/services/business-it/repo-management.vue') },
  { path: '/services/business-it/project-backup', component: () => import('../pages/services/business-it/project-backup.vue') },
  { path: '/services/business-it/internal-guides', component: () => import('../pages/services/business-it/internal-guides.vue') },
  { path: '/services/business-it/checklist-setup', component: () => import('../pages/services/business-it/checklist-setup.vue') },
  { path: '/services/business-it/process-formalization', component: () => import('../pages/services/business-it/process-formalization.vue') },
  { path: '/services/business-it/itil-support', component: () => import('../pages/services/business-it/itil-support.vue') },

  // Кастомная страница 404
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../components/NotFound.vue') }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router