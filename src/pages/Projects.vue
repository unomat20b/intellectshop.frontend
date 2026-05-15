<script setup>
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import Button from '@/components/ui/Button.vue'
import { fetchProjects } from '@/api/modx'
import { getErrorMessage } from '@/api/errors'

useHead({
  title: 'Проекты — IntellectShop',
  meta: [
    { name: 'description', content: 'Кейсы и внедрения: ИИ, Apple, автоматизация, обучение.' }
  ]
})

const loading = ref(true)
const projects = ref([])
const errorMessage = ref('')

const interactiveProjects = [
  {
    title: 'Alfabet',
    description: 'Изучение незнакомых алфавитов через чтение знакомых текстов и постепенную замену символов.',
    href: '/projects/alphabet/'
  },
  {
    title: 'Speedreeder',
    description: 'RSVP-скорочтение: импорт TXT, EPUB и PDF, настройка темпа и чтение по одному слову.',
    href: '/projects/speedreader/'
  },
  {
    title: 'EPUB Converter',
    description: 'Переупаковка папок .epub из Apple Books в обычный EPUB-файл прямо в браузере.',
    href: '/projects/epubconverter/'
  }
]

onMounted(async () => {
  try {
    projects.value = await fetchProjects()
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Не удалось загрузить проекты.')
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="container mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold tracking-tight mb-8">Проекты</h1>

    <div class="mb-12">
      <h2 class="text-xl font-semibold mb-2 text-slate-900">Интерактивные приложения</h2>
      <p class="text-slate-600 mb-6">Изучайте и практикуйтесь с нашими интерактивными инструментами.</p>

      <div class="grid gap-6 md:grid-cols-3 items-stretch">
        <article
          v-for="project in interactiveProjects"
          :key="project.title"
          class="group h-full flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div class="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16M4 12h10M4 17h7" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-3 text-slate-900">{{ project.title }}</h3>
          <p class="text-sm text-slate-600 mb-6">{{ project.description }}</p>
          <Button
            variant="primary"
            as="a"
            :href="project.href"
            class="mt-auto inline-flex items-center gap-2 w-fit"
          >
            Узнать больше
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Button>
        </article>
      </div>
    </div>

    <div class="mb-12">
      <article class="group h-full flex flex-col rounded-3xl border border-slate-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div class="w-10 h-10 rounded-xl bg-white/70 border border-blue-100 flex items-center justify-center mb-4">
          <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" stroke-width="2"></circle>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12l2.5 2.5L16 9"></path>
          </svg>
        </div>
        <h2 class="text-xl font-semibold mb-3 text-slate-900">Сравнение нейросетей</h2>
        <p class="text-slate-700 mb-4">Актуализированный гид (май 2026): доступность, тарифы и выбор AI-сервиса под задачу.</p>
        <ul class="text-sm text-slate-700 mb-6 space-y-1">
          <li>Обновлены данные по ChatGPT, Claude, Gemini, Perplexity, DeepSeek, GigaChat и другим сервисам.</li>
          <li>Добавлены ориентиры по сильным сторонам и ограничениям для бизнеса и личных задач.</li>
          <li>Уточнены критерии выбора: доступность, бюджет, уровень сложности и тип задач.</li>
        </ul>
        <Button
          variant="primary"
          as="a"
          href="/ai-comparison/"
          class="mt-auto inline-flex items-center gap-2 w-fit"
        >
          Сравнить нейросети
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </Button>
      </article>
    </div>

    <div>
      <h2 class="text-xl font-semibold mb-2 text-slate-900">Кейсы и внедрения</h2>
      <p class="text-slate-600 mb-6">Проекты, которые загружаются из backend и регулярно обновляются.</p>

      <p v-if="loading" class="text-slate-500">Загрузка…</p>
      <p v-else-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>
      <p v-else-if="!projects.length" class="text-slate-500">Пока нет опубликованных кейсов.</p>

      <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        <article
          v-for="p in projects"
          :key="p.id"
          class="group h-full flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div class="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-4">
            <svg class="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h10M7 16h6" />
            </svg>
          </div>
          <h3 class="font-semibold text-slate-900 mb-3">{{ p.title }}</h3>
          <div v-html="p.content" class="project-content text-sm text-slate-600 mb-6" />

          <Button
            v-if="p.link"
            variant="ghost"
            as="a"
            :href="p.link"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-auto inline-flex items-center gap-2 w-fit"
          >
            Открыть проект
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Button>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container { max-width: 1200px; }

.project-content :deep(p) {
  margin-bottom: 0.5rem;
}

.project-content :deep(p:last-child) {
  margin-bottom: 0;
}
</style>
