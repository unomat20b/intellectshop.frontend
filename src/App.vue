<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'
import Header from './components/layout/Header.vue'

const route = useRoute()

const SITE_NAME = 'IntellectShop'
const SITE_URL = 'https://intellectshop.net'
const DEFAULT_DESCRIPTION =
  'IntellectShop обучает технике Apple, внедряет нейросети и автоматизирует бизнес.'
const DEFAULT_IMAGE = `${SITE_URL}/favicon.ico`

const canonicalUrl = computed(() => {
  const path = route.path || '/'
  return new URL(path, SITE_URL).toString()
})

const organizationJsonLd = computed(() =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION
  })
)

const websiteJsonLd = computed(() =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'ru-RU'
  })
)

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
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:locale',
      content: 'ru_RU'
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
      name: 'twitter:description',
      content: DEFAULT_DESCRIPTION
    },
    {
      name: 'twitter:image',
      content: DEFAULT_IMAGE
    }
  ],
  script: route.name === 'NotFound'
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
        }
      ]
}))
</script>


<template>
  <Header />
  <router-view />
</template>
