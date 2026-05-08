<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useHead } from '@vueuse/head'
import { fetchServices } from '@/api/modx'
import { getErrorMessage } from '@/api/errors'

const SITE_URL = 'https://intellectshop.net'
const OG_IMAGE = `${SITE_URL}/og-image.svg`

const topServiceCards = [
  {
    to: '/services/apple/',
    title: 'Экосистема Apple',
    description: '10+ лет опыта настройки устройств, MDM-решений и обучения сотрудников.'
  },
  {
    to: '/services/ai/',
    title: 'Нейросети & AI-агенты',
    description: 'Внедряем ChatGPT-решения, создаём кастомных агентов на базе LLM.'
  },
  {
    to: '/services/audit/',
    title: 'Бизнес-аудит',
    description: 'Анализ текущих IT-процессов и подбор оптимальных инструментов.'
  }
]

useHead({
  title: 'Услуги — IntellectShop',
  meta: [
    {
      name: 'description',
      content: 'Каталог услуг IntellectShop: Apple-обучение, внедрение AI-агентов и бизнес-аудит IT-процессов.'
    },
    { property: 'og:title', content: 'Услуги — IntellectShop' },
    {
      property: 'og:description',
      content: 'Apple, AI и автоматизация: подберём и внедрим решения под задачи команды.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${SITE_URL}/services/` },
    { property: 'og:image', content: OG_IMAGE },
    { name: 'twitter:title', content: 'Услуги — IntellectShop' },
    {
      name: 'twitter:description',
      content: 'Каталог услуг: Apple-обучение, AI-агенты, автоматизация и бизнес-аудит.'
    },
    { name: 'twitter:image', content: OG_IMAGE }
  ],
  script: [
    {
      key: 'services-page-jsonld',
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': `${SITE_URL}/services/#webpage`,
        url: `${SITE_URL}/services/`,
        name: 'Услуги — IntellectShop',
        inLanguage: 'ru-RU',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: topServiceCards.map((card, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: card.title,
            url: `${SITE_URL}${card.to}`
          }))
        }
      })
    }
  ]
})

const loading = ref(true)
const services = ref([])
const errorMessage = ref('')

onMounted(async () => {
  try {
    services.value = await fetchServices()
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Не удалось загрузить список услуг.')
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-6">Услуги</h1>

    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
      <RouterLink
        v-for="card in topServiceCards"
        :key="card.to"
        :to="card.to"
        class="block bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
      >
        <h3 class="font-semibold mb-2">{{ card.title }}</h3>
        <p class="text-sm text-slate-600">
          {{ card.description }}
        </p>
      </RouterLink>
    </div>

    <p v-if="loading">Загрузка…</p>
    <p v-else-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>
    <p v-else-if="!services.length" class="text-gray-500"></p>

    <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="s in services"
        :key="s.id"
        class="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
      >
        <h2 class="font-semibold mb-2">{{ s.title }}</h2>
        <p class="text-sm text-gray-700 mb-2" v-html="s.content" />

        <div v-if="s.price" class="text-sm font-semibold text-green-600">
          от {{ s.price }} ₽
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.container { max-width: 960px; }
</style>
