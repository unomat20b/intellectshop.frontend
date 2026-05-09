import { processAnalysisPageContent } from './ai/business/process-analysis.js'
import { iphoneBasicsPageContent } from './apple/iphone/iphone-basics.js'
import { infraAnalysisPageContent } from './business-it/infra-analysis.js'

export const servicePageContentRegistry = [
  {
    path: '/services/ai/business/process-analysis',
    content: processAnalysisPageContent,
  },
  {
    path: '/services/apple/iphone/IPhoneBasics',
    content: iphoneBasicsPageContent,
  },
  {
    path: '/services/business-it/infra-analysis',
    content: infraAnalysisPageContent,
  },
]

export const servicePageContentMap = Object.fromEntries(
  servicePageContentRegistry.map((entry) => [entry.path, entry.content])
)
