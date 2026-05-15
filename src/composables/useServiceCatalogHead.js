import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'

const SITE_URL = 'https://intellectshop.net'
const OG_IMAGE = `${SITE_URL}/og-image.svg`

function normalizeCanonicalPath(path = '/') {
  if (!path || path === '/') return '/'
  if (path.endsWith('/')) return path
  if (path.includes('.')) return path
  return `${path}/`
}

function stripBrandSuffix(title = '') {
  return String(title).replace(/\s+—\s+IntellectShop$/i, '').trim()
}

function collectServiceItems(content) {
  const items = []

  for (const section of content?.sections ?? []) {
    for (const group of section?.groups ?? []) {
      for (const item of group?.items ?? []) {
        if (!item?.to || !item?.title) continue
        items.push(item)
      }
    }
  }

  return items
}

function withTrailingSlash(path = '/') {
  if (!path || path === '/') return '/'
  return path.endsWith('/') ? path : `${path}/`
}

export function useServiceCatalogHead(content) {
  const route = useRoute()
  const title = content?.meta?.title || `${content?.page?.title || 'Услуги'} — IntellectShop`
  const description = content?.meta?.description || ''
  const pageName = content?.page?.title || stripBrandSuffix(title) || 'Услуги'
  const serviceItems = collectServiceItems(content)

  const canonicalUrl = computed(() => {
    return new URL(normalizeCanonicalPath(route.path), SITE_URL).toString()
  })

  const collectionSchema = computed(() =>
    JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${canonicalUrl.value}#webpage`,
      url: canonicalUrl.value,
      name: title,
      inLanguage: 'ru-RU',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: serviceItems.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.title,
          url: `${SITE_URL}${withTrailingSlash(item.to)}`
        }))
      }
    })
  )

  const serviceSchema = computed(() =>
    JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonicalUrl.value}#service`,
      name: pageName,
      description,
      serviceType: pageName,
      areaServed: 'RU',
      availableLanguage: ['ru-RU'],
      url: canonicalUrl.value,
      provider: { '@id': `${SITE_URL}/#organization` }
    })
  )

  useHead(() => ({
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonicalUrl.value },
      { property: 'og:image', content: OG_IMAGE },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: OG_IMAGE }
    ],
    script: [
      {
        key: 'service-catalog-jsonld',
        type: 'application/ld+json',
        textContent: collectionSchema.value
      },
      {
        key: 'service-catalog-service-jsonld',
        type: 'application/ld+json',
        textContent: serviceSchema.value
      }
    ]
  }))
}
