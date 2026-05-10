import { servicePageContent as apiPrivacyContent } from './ai/business/api-privacy.js'
import { servicePageContent as autoWorkflowsContent } from './ai/business/auto-workflows.js'
import { servicePageContent as automationRequestsContent } from './ai/business/automation-requests.js'
import { servicePageContent as chatbotDeploymentContent } from './ai/business/chatbot-deployment.js'
import { servicePageContent as crmWorkflowsContent } from './ai/business/crm-workflows.js'
import { servicePageContent as customAgentsContent } from './ai/business/custom-agents.js'
import { servicePageContent as dataIntegrationContent } from './ai/business/data-integration.js'
import { servicePageContent as fileSourcesContent } from './ai/business/file-sources.js'
import { servicePageContent as gptIntroContent } from './ai/business/gpt-intro.js'
import { servicePageContent as intakeHandlingContent } from './ai/business/intake-handling.js'
import { servicePageContent as internalBotsContent } from './ai/business/internal-bots.js'
import { servicePageContent as localLlmContent } from './ai/business/local-llm.js'
import { servicePageContent as modelSelectionContent } from './ai/business/model-selection.js'
import { servicePageContent as n8nZapierContent } from './ai/business/n8n-zapier.js'
import { servicePageContent as phoneBotsContent } from './ai/business/phone-bots.js'
import { servicePageContent as processAnalysisContent } from './ai/business/process-analysis.js'
import { servicePageContent as ragSetupContent } from './ai/business/rag-setup.js'
import { servicePageContent as speechRecognitionContent } from './ai/business/speech-recognition.js'
import { servicePageContent as staffTrainingContent } from './ai/business/staff-training.js'
import { servicePageContent as useCasesContent } from './ai/business/use-cases.js'
import { servicePageContent as voiceGenerationContent } from './ai/business/voice-generation.js'
import { servicePageContent as workspaceIntegrationContent } from './ai/business/workspace-integration.js'
import { servicePageContent as iphoneBasicsContent } from './apple/iphone/iphone-basics.js'
import { servicePageContent as infraAnalysisContent } from './business-it/infra-analysis.js'

export const servicePageContentRegistry = [
  {
    path: '/services/ai/business/api-privacy',
    content: apiPrivacyContent,
  },
  {
    path: '/services/ai/business/auto-workflows',
    content: autoWorkflowsContent,
  },
  {
    path: '/services/ai/business/automation-requests',
    content: automationRequestsContent,
  },
  {
    path: '/services/ai/business/chatbot-deployment',
    content: chatbotDeploymentContent,
  },
  {
    path: '/services/ai/business/crm-workflows',
    content: crmWorkflowsContent,
  },
  {
    path: '/services/ai/business/custom-agents',
    content: customAgentsContent,
  },
  {
    path: '/services/ai/business/data-integration',
    content: dataIntegrationContent,
  },
  {
    path: '/services/ai/business/file-sources',
    content: fileSourcesContent,
  },
  {
    path: '/services/ai/business/gpt-intro',
    content: gptIntroContent,
  },
  {
    path: '/services/ai/business/intake-handling',
    content: intakeHandlingContent,
  },
  {
    path: '/services/ai/business/internal-bots',
    content: internalBotsContent,
  },
  {
    path: '/services/ai/business/local-llm',
    content: localLlmContent,
  },
  {
    path: '/services/ai/business/model-selection',
    content: modelSelectionContent,
  },
  {
    path: '/services/ai/business/n8n-zapier',
    content: n8nZapierContent,
  },
  {
    path: '/services/ai/business/phone-bots',
    content: phoneBotsContent,
  },
  {
    path: '/services/ai/business/process-analysis',
    content: processAnalysisContent,
  },
  {
    path: '/services/ai/business/rag-setup',
    content: ragSetupContent,
  },
  {
    path: '/services/ai/business/speech-recognition',
    content: speechRecognitionContent,
  },
  {
    path: '/services/ai/business/staff-training',
    content: staffTrainingContent,
  },
  {
    path: '/services/ai/business/use-cases',
    content: useCasesContent,
  },
  {
    path: '/services/ai/business/voice-generation',
    content: voiceGenerationContent,
  },
  {
    path: '/services/ai/business/workspace-integration',
    content: workspaceIntegrationContent,
  },
  {
    path: '/services/apple/iphone/IPhoneBasics',
    content: iphoneBasicsContent,
  },
  {
    path: '/services/business-it/infra-analysis',
    content: infraAnalysisContent,
  },
]

export const servicePageContentMap = Object.fromEntries(
  servicePageContentRegistry.map((entry) => [entry.path, entry.content])
)
