import { aiServiceContent } from './ai.js'
import { appleServiceContent } from './apple.js'
import { auditServiceContent } from './audit.js'

export const serviceCatalogs = [
  {
    key: 'apple',
    name: 'Apple',
    path: '/services/apple',
    prefixes: ['/services/apple/'],
    content: appleServiceContent,
  },
  {
    key: 'ai',
    name: 'AI',
    path: '/services/ai',
    prefixes: ['/services/ai/business/', '/services/ai/personal/'],
    content: aiServiceContent,
  },
  {
    key: 'audit',
    name: 'Audit',
    path: '/services/audit',
    prefixes: ['/services/business-it/'],
    content: auditServiceContent,
  },
]

export const serviceLandingCards = serviceCatalogs.map((catalog) => ({
  to: catalog.path,
  title: catalog.content.page.title,
  description: catalog.content.page.summary || catalog.content.meta.description,
}))
