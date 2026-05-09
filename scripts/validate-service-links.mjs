import { routeDefinitions } from '../src/router/routes.js'
import { aiServiceContent } from '../src/content/services/ai.js'
import { appleServiceContent } from '../src/content/services/apple.js'
import { auditServiceContent } from '../src/content/services/audit.js'

function collectServiceLinks(content) {
  return content.sections.flatMap((section) =>
    section.groups.flatMap((group) => group.items.map((item) => item.to))
  )
}

function unique(values) {
  return [...new Set(values)]
}

function startsWithAny(value, prefixes) {
  return prefixes.some((prefix) => value.startsWith(prefix))
}

const routePaths = new Set(
  routeDefinitions
    .filter((route) => route.path && !route.redirect)
    .map((route) => route.path)
)

const serviceCatalogs = [
  { name: 'AI', content: aiServiceContent, prefixes: ['/services/ai/business/', '/services/ai/personal/'] },
  { name: 'Apple', content: appleServiceContent, prefixes: ['/services/apple/'] },
  { name: 'Audit', content: auditServiceContent, prefixes: ['/services/business-it/'] },
]

const unknownLinks = []
const duplicateLinks = []
const missingFromCatalog = []

for (const catalog of serviceCatalogs) {
  const links = collectServiceLinks(catalog.content)
  const uniqueLinks = unique(links)

  for (const link of uniqueLinks) {
    if (!routePaths.has(link)) {
      unknownLinks.push(`[${catalog.name}] ${link}`)
    }
  }

  const duplicates = links.filter((link, idx) => links.indexOf(link) !== idx)
  unique(duplicates).forEach((link) => duplicateLinks.push(`[${catalog.name}] ${link}`))

  const scopedRoutes = [...routePaths].filter((path) => startsWithAny(path, catalog.prefixes))
  const missing = scopedRoutes.filter((path) => !uniqueLinks.includes(path))
  missing.forEach((path) => missingFromCatalog.push(`[${catalog.name}] ${path}`))
}

if (unknownLinks.length || duplicateLinks.length || missingFromCatalog.length) {
  if (unknownLinks.length) {
    console.error('\nUnknown service links (missing in router):')
    unknownLinks.forEach((item) => console.error(`  - ${item}`))
  }

  if (duplicateLinks.length) {
    console.error('\nDuplicate service links in catalog:')
    duplicateLinks.forEach((item) => console.error(`  - ${item}`))
  }

  if (missingFromCatalog.length) {
    console.error('\nRoutes missing in service catalog:')
    missingFromCatalog.forEach((item) => console.error(`  - ${item}`))
  }

  process.exit(1)
}

console.log('Service catalog validation passed.')
