<script setup lang="ts">
import { computed, nextTick, watch } from 'vue'
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'
import Header from './components/layout/Header.vue'

const route = useRoute()

const SITE_NAME = 'IntellectShop'
const SITE_URL = 'https://intellectshop.net'
const DEFAULT_DESCRIPTION =
  'IntellectShop обучает технике Apple, внедряет нейросети и автоматизирует бизнес.'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.svg`
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-04BMZGMCNT'

const ROUTE_SEGMENT_LABELS: Record<string, string> = {
  about: 'О нас',
  catalog: 'Каталог',
  services: 'Услуги',
  projects: 'Проекты',
  'ai-comparison': 'Сравнение AI',
  'feedback-form': 'Контакты',
  feedbackform: 'Контакты',
  feedback: 'Контакты',
  form: 'Форма',
  apple: 'Apple',
  ai: 'AI',
  business: 'Бизнес',
  personal: 'Персональное',
  'business-it': 'Бизнес IT'
}

const normalizeCanonicalPath = (path: string) => {
  if (!path || path === '/') return '/'
  if (path.endsWith('/')) return path
  if (path.includes('.')) return path
  return `${path}/`
}

const canonicalUrl = computed(() => {
  return new URL(normalizeCanonicalPath(route.path), SITE_URL).toString()
})

const toBreadcrumbLabel = (rawSegment: string) => {
  const segment = decodeURIComponent(rawSegment || '').trim()
  const key = segment.toLowerCase()
  if (ROUTE_SEGMENT_LABELS[key]) return ROUTE_SEGMENT_LABELS[key]

  const normalized = segment
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  if (!normalized) return 'Страница'
  return normalized.charAt(0).toUpperCase() + normalized.slice(1)
}

const breadcrumbItems = computed(() => {
  const normalizedPath = normalizeCanonicalPath(route.path)
  if (normalizedPath === '/') {
    return [{ name: 'Главная', url: `${SITE_URL}/` }]
  }

  const segments = normalizedPath.replace(/^\/|\/$/g, '').split('/').filter(Boolean)
  const items = [{ name: 'Главная', url: `${SITE_URL}/` }]

  let currentPath = ''
  for (const segment of segments) {
    currentPath += `/${segment}`
    items.push({
      name: toBreadcrumbLabel(segment),
      url: new URL(normalizeCanonicalPath(currentPath), SITE_URL).toString()
    })
  }

  return items
})

const organizationJsonLd = computed(() =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: DEFAULT_IMAGE,
    description: DEFAULT_DESCRIPTION,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      url: `${SITE_URL}/feedback-form/`,
      availableLanguage: ['Russian']
    },
    knowsAbout: ['Apple training', 'AI adoption', 'Business automation']
  })
)

const websiteJsonLd = computed(() =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'ru-RU',
    publisher: { '@id': `${SITE_URL}/#organization` }
  })
)

const professionalServiceJsonLd = computed(() =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#professional-service`,
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    areaServed: 'RU',
    availableLanguage: ['ru-RU'],
    serviceType: ['Apple training', 'AI consulting', 'Business process automation'],
    provider: { '@id': `${SITE_URL}/#organization` }
  })
)

const webPageJsonLd = computed(() =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonicalUrl.value}#webpage`,
    url: canonicalUrl.value,
    name: breadcrumbItems.value[breadcrumbItems.value.length - 1]?.name ?? SITE_NAME,
    inLanguage: 'ru-RU',
    isPartOf: { '@id': `${SITE_URL}/#website` }
  })
)

const breadcrumbJsonLd = computed(() =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.value.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  })
)

type GtagFn = (...args: unknown[]) => void

const getGtag = (): GtagFn | null => {
  if (typeof window === 'undefined') return null
  const withGtag = window as Window & { gtag?: GtagFn }
  return typeof withGtag.gtag === 'function' ? withGtag.gtag : null
}

const trackPageView = () => {
  const gtag = getGtag()
  if (!gtag) return
  gtag('event', 'page_view', {
    page_title: document.title,
    page_location: canonicalUrl.value,
    page_path: normalizeCanonicalPath(route.path)
  })
}

if (typeof window !== 'undefined' && GA_MEASUREMENT_ID) {
  watch(
    () => route.fullPath,
    async () => {
      await nextTick()
      trackPageView()
    },
    { immediate: true }
  )
}

useHead(() => ({
  htmlAttrs: {
    lang: 'ru'
  },
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl.value
    }
  ],
  meta: [
    {
      name: 'robots',
      content: route.name === 'NotFound' ? 'noindex, nofollow' : 'index, follow'
    },
    {
      property: 'og:site_name',
      content: SITE_NAME
    },
    {
      property: 'og:title',
      content: SITE_NAME
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:locale',
      content: 'ru_RU'
    },
    {
      property: 'og:description',
      content: DEFAULT_DESCRIPTION
    },
    {
      property: 'og:url',
      content: canonicalUrl.value
    },
    {
      property: 'og:image',
      content: DEFAULT_IMAGE
    },
    {
      property: 'og:image:alt',
      content: SITE_NAME
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: SITE_NAME
    },
    {
      name: 'twitter:description',
      content: DEFAULT_DESCRIPTION
    },
    {
      name: 'twitter:image',
      content: DEFAULT_IMAGE
    }
  ],
  script: [
    ...(GA_MEASUREMENT_ID
      ? [
          {
            key: 'ga4-loader',
            async: true,
            src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
          },
          {
            key: 'ga4-init',
            textContent:
              `window.dataLayer = window.dataLayer || [];` +
              `function gtag(){dataLayer.push(arguments);}` +
              `gtag('js', new Date());` +
              `gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });`
          }
        ]
      : []),
    ...(route.name === 'NotFound'
      ? []
      : [
          {
            key: 'organization-jsonld',
            type: 'application/ld+json',
            textContent: organizationJsonLd.value
          },
          {
            key: 'website-jsonld',
            type: 'application/ld+json',
            textContent: websiteJsonLd.value
          },
          {
            key: 'professional-service-jsonld',
            type: 'application/ld+json',
            textContent: professionalServiceJsonLd.value
          },
          {
            key: 'webpage-jsonld',
            type: 'application/ld+json',
            textContent: webPageJsonLd.value
          },
          {
            key: 'breadcrumb-jsonld',
            type: 'application/ld+json',
            textContent: breadcrumbJsonLd.value
          }
        ])
  ]
}))
</script>


<template>
  <Header />
  <router-view />
</template>
