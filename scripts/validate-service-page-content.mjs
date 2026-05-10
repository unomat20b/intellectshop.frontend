import { routeDefinitions } from '../src/router/routes.js'
import { servicePageContentRegistry } from '../src/content/service-pages/index.js'

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0
}

function normalizePath(value) {
  if (!isNonEmptyString(value)) return ''
  if (value === '/') return value
  return value.replace(/\/+$/, '')
}

function validateSection(section) {
  const hasParagraphs = Array.isArray(section?.paragraphs) && section.paragraphs.length > 0
  const hasList = Array.isArray(section?.list) && section.list.length > 0
  return isNonEmptyString(section?.title) && (hasParagraphs || hasList)
}

function validateCtaAction(action) {
  return isNonEmptyString(action?.label) && isNonEmptyString(action?.to)
}

const routePaths = new Set(
  routeDefinitions
    .filter((route) => route.path && !route.redirect)
    .map((route) => route.path)
)

const errors = []
const seenPaths = new Set()
const registryPaths = new Set()

for (const entry of servicePageContentRegistry) {
  const normalizedPath = normalizePath(entry?.path)
  const content = entry?.content

  if (!normalizedPath) {
    errors.push('Registry entry has an empty path.')
    continue
  }

  if (seenPaths.has(normalizedPath)) {
    errors.push(`Duplicate registry path: ${normalizedPath}`)
  }
  seenPaths.add(normalizedPath)
  registryPaths.add(normalizedPath)

  if (!routePaths.has(normalizedPath)) {
    errors.push(`Unknown route path in registry: ${normalizedPath}`)
  }

  if (!isNonEmptyString(content?.meta?.title)) {
    errors.push(`[${normalizedPath}] meta.title is required`)
  }

  if (!isNonEmptyString(content?.meta?.description)) {
    errors.push(`[${normalizedPath}] meta.description is required`)
  }

  if (!isNonEmptyString(content?.hero?.title)) {
    errors.push(`[${normalizedPath}] hero.title is required`)
  }

  if (!isNonEmptyString(content?.hero?.lead)) {
    errors.push(`[${normalizedPath}] hero.lead is required`)
  }

  if (!Array.isArray(content?.sections) || content.sections.length === 0) {
    errors.push(`[${normalizedPath}] sections[] must contain at least one section`)
  } else {
    content.sections.forEach((section, index) => {
      if (!validateSection(section)) {
        errors.push(
          `[${normalizedPath}] section #${index + 1} must have title and at least one of paragraphs[] or list[]`
        )
      }
    })
  }

  if (Array.isArray(content?.faq)) {
    content.faq.forEach((entryFaq, index) => {
      if (!isNonEmptyString(entryFaq?.question) || !isNonEmptyString(entryFaq?.answer)) {
        errors.push(`[${normalizedPath}] faq #${index + 1} must include question and answer`)
      }
    })
  }

  if (content?.cta) {
    if (!isNonEmptyString(content.cta?.title) || !isNonEmptyString(content.cta?.text)) {
      errors.push(`[${normalizedPath}] cta.title and cta.text are required when cta exists`)
    }

    if (!validateCtaAction(content.cta?.primary)) {
      errors.push(`[${normalizedPath}] cta.primary must include label and to`)
    }

    if (content.cta?.secondary && !validateCtaAction(content.cta.secondary)) {
      errors.push(`[${normalizedPath}] cta.secondary must include label and to`)
    }

    for (const action of [content.cta?.primary, content.cta?.secondary]) {
      if (!action?.to) continue
      const normalizedActionPath = normalizePath(action.to)
      const isHttpUrl = /^https?:\/\//.test(action.to)
      if (!isHttpUrl && !routePaths.has(normalizedActionPath)) {
        errors.push(
          `[${normalizedPath}] cta link points to unknown internal route: ${action.to}`
        )
      }
    }
  }
}

const requiredScopes = [
  {
    name: 'AI Business',
    prefixes: ['/services/ai/business/'],
  },
  {
    name: 'AI Personal',
    prefixes: ['/services/ai/personal/'],
  },
  {
    name: 'Apple',
    prefixes: ['/services/apple/'],
  },
]

for (const scope of requiredScopes) {
  const scopedRoutes = [...routePaths].filter((path) =>
    scope.prefixes.some((prefix) => path.startsWith(prefix))
  )

  const missingEntries = scopedRoutes.filter((path) => !registryPaths.has(path))
  for (const missingPath of missingEntries) {
    errors.push(`[${scope.name}] missing content registry entry for route: ${missingPath}`)
  }
}

if (errors.length) {
  console.error('Service page content validation failed:\n')
  errors.forEach((error) => console.error(`- ${error}`))
  process.exit(1)
}

console.log('Service page content validation passed.')
