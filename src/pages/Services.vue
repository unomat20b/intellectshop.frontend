<script setup>
import { computed, ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useHead } from '@vueuse/head'
import { fetchServices } from '@/api/modx'
import { getErrorMessage } from '@/api/errors'
import { serviceCatalogs, serviceLandingCards } from '@/content/services'

const SITE_URL = 'https://intellectshop.net'
const OG_IMAGE = `${SITE_URL}/og-image.svg`

const topServiceCards = serviceLandingCards
const query = ref('')

function normalizeSearchText(value = '') {
  return String(value)
    .toLowerCase()
    .replace(/ё/g, 'е')
    .replace(/<[^>]*>/g, ' ')
    .replace(/[^a-zа-я0-9\s/-]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function buildSearchIndex(parts) {
  return normalizeSearchText(parts.filter(Boolean).join(' '))
}

const catalogBlocks = serviceCatalogs.map((catalog) => {
  const groups = []

  for (const section of catalog.content.sections ?? []) {
    for (const group of section.groups ?? []) {
      groups.push({
        title: group.title || '',
        sectionTitle: section.title || '',
        searchIndex: buildSearchIndex([
          catalog.content.page.title,
          catalog.content.page.summary,
          section.title,
          group.title,
        ]),
        items: (group.items ?? []).map((item) => ({
          ...item,
          searchIndex: buildSearchIndex([
            item.title,
            group.title,
            section.title,
            catalog.content.page.title,
            catalog.name,
          ]),
        })),
      })
    }
  }

  return {
    key: catalog.key,
    path: catalog.path,
    title: catalog.content.page.title,
    summary: catalog.content.page.summary || catalog.content.meta.description,
    searchIndex: buildSearchIndex([
      catalog.name,
      catalog.content.page.title,
      catalog.content.page.summary,
      catalog.content.meta.description,
    ]),
    groups,
  }
})

const normalizedQuery = computed(() => normalizeSearchText(query.value))
const isFiltering = computed(() => normalizedQuery.value.length > 0)

const filteredCatalogBlocks = computed(() => {
  const searchQuery = normalizedQuery.value
  if (!searchQuery) return catalogBlocks

  return catalogBlocks
    .map((catalog) => {
      if (catalog.searchIndex.includes(searchQuery)) return catalog

      const groups = catalog.groups
        .map((group) => {
          if (group.searchIndex.includes(searchQuery)) return group
          const items = group.items.filter((item) => item.searchIndex.includes(searchQuery))
          return { ...group, items }
        })
        .filter((group) => group.items.length > 0)

      return { ...catalog, groups }
    })
    .filter((catalog) => catalog.groups.length > 0)
})

const visibleCatalogItemsCount = computed(() =>
  filteredCatalogBlocks.value.reduce(
    (catalogTotal, catalog) =>
      catalogTotal + catalog.groups.reduce((groupTotal, group) => groupTotal + group.items.length, 0),
    0
  )
)

const filteredBackendServices = computed(() => {
  if (loading.value || errorMessage.value) return []
  const searchQuery = normalizedQuery.value
  if (!searchQuery) return services.value

  return services.value.filter((service) =>
    buildSearchIndex([service.title, service.content, service.price]).includes(searchQuery)
  )
})

const totalVisibleCount = computed(() => {
  const backendCount = loading.value || errorMessage.value ? 0 : filteredBackendServices.value.length
  return visibleCatalogItemsCount.value + backendCount
})

function withTrailingSlash(path) {
  return path.endsWith('/') ? path : `${path}/`
}

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
            url: `${SITE_URL}${withTrailingSlash(card.to)}`
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

    <p class="text-slate-600 mb-6">
      Выберите направление или найдите услугу по ключевому слову: автоматизация, безопасность, iPhone, бэкапы и т.д.
    </p>

    <div class="mb-8 rounded-xl border bg-white p-4 shadow-sm">
      <label
        for="service-search"
        class="block text-sm font-medium text-slate-700 mb-2"
      >
        Поиск по всем услугам
      </label>
      <input
        id="service-search"
        v-model.trim="query"
        type="search"
        placeholder="Например: автоматизация, онбординг, iPhone, VPN..."
        class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
      />
      <p class="mt-2 text-xs text-slate-500">
        <span v-if="isFiltering">Найдено услуг: {{ totalVisibleCount }}</span>
        <span v-else>Всего услуг в каталоге: {{ totalVisibleCount }}</span>
      </p>
    </div>

    <h2 class="text-xl font-semibold mb-4">Основные направления</h2>

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

    <h2 class="text-xl font-semibold mb-4">Подробный каталог</h2>

    <div
      v-if="filteredCatalogBlocks.length"
      class="space-y-8 mb-10"
    >
      <article
        v-for="catalog in filteredCatalogBlocks"
        :key="catalog.key"
        class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
      >
        <RouterLink
          :to="catalog.path"
          class="inline-flex items-center text-lg font-semibold text-slate-900 hover:text-slate-700"
        >
          {{ catalog.title }}
        </RouterLink>
        <p class="mt-1 text-sm text-slate-600">
          {{ catalog.summary }}
        </p>

        <div class="mt-5 space-y-6">
          <section
            v-for="group in catalog.groups"
            :key="`${catalog.key}-${group.title}`"
          >
            <h3 class="text-base font-semibold text-slate-900">
              {{ group.title }}
            </h3>
            <p
              v-if="group.sectionTitle"
              class="text-xs text-slate-500 mt-1"
            >
              {{ group.sectionTitle }}
            </p>

            <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mt-3">
              <RouterLink
                v-for="item in group.items"
                :key="item.to"
                :to="item.to"
                class="block rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 hover:bg-slate-100 transition-colors"
              >
                {{ item.title }}
              </RouterLink>
            </div>
          </section>
        </div>
      </article>
    </div>

    <p
      v-else-if="isFiltering"
      class="text-slate-500 mb-8"
    >
      По вашему запросу в основном каталоге ничего не найдено. Попробуйте другой термин.
    </p>

    <h2 class="text-xl font-semibold mb-4">Дополнительные услуги из базы</h2>

    <p v-if="loading">Загрузка…</p>
    <p v-else-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>
    <p
      v-else-if="!filteredBackendServices.length && isFiltering"
      class="text-slate-500"
    >
      По текущему запросу в базе услуг совпадений нет.
    </p>
    <p
      v-else-if="!filteredBackendServices.length"
      class="text-slate-500"
    >
      Список дополнительных услуг пока пуст.
    </p>

    <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="s in filteredBackendServices"
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
