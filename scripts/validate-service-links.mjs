import { routeDefinitions } from '../src/router/routes.js'
import { serviceCatalogs, serviceLandingCards } from '../src/content/services/index.js'

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

function normalizePath(value) {
  if (typeof value !== 'string') return ''
  if (value === '/') return value
  return value.replace(/\/+$/, '')
}

const routePaths = new Set(
  routeDefinitions
    .filter((route) => route.path && !route.redirect)
    .map((route) => route.path)
)

const unknownLinks = []
const duplicateLinks = []
const missingFromCatalog = []
const unknownLandingLinks = []
const duplicateLandingLinks = []

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

const landingLinks = serviceLandingCards.map((card) => normalizePath(card.to))
const uniqueLandingLinks = unique(landingLinks)

for (const link of uniqueLandingLinks) {
  if (!routePaths.has(link)) {
    unknownLandingLinks.push(link)
  }
}

const landingDuplicates = landingLinks.filter((link, idx) => landingLinks.indexOf(link) !== idx)
unique(landingDuplicates).forEach((link) => duplicateLandingLinks.push(link))

if (
  unknownLinks.length ||
  duplicateLinks.length ||
  missingFromCatalog.length ||
  unknownLandingLinks.length ||
  duplicateLandingLinks.length
) {
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

  if (unknownLandingLinks.length) {
    console.error('\nUnknown root service cards (missing in router):')
    unknownLandingLinks.forEach((item) => console.error(`  - ${item}`))
  }

  if (duplicateLandingLinks.length) {
    console.error('\nDuplicate root service cards:')
    duplicateLandingLinks.forEach((item) => console.error(`  - ${item}`))
  }

  process.exit(1)
}

console.log('Service catalog validation passed.')
