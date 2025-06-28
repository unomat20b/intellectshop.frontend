<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useHead } from '@vueuse/head'
import Button from '@/components/ui/Button.vue'

useHead({
  title: 'Проекты — IntellectShop',
  meta: [
    { name: 'description', content: 'Кейсы и внедрения: ИИ, Apple, автоматизация, обучение.' }
  ]
})

const loading = ref(true)
const projects = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get('/api/projects')
    projects.value = Array.isArray(data) ? data : []
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-6">Проекты</h1>

    <!-- Кнопка для перехода к проекту Алфавиты -->
    <div class="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
      <h2 class="text-lg font-semibold mb-3 text-gray-800">Интерактивные приложения</h2>
      <p class="text-gray-600 mb-4">Изучайте и практикуйтесь с нашими интерактивными инструментами</p>
      
      <Button 
        variant="primary" 
        as="a"
        href="/alphabet-project"
        class="flex items-center gap-2"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        Проект Алфавиты
      </Button>
    </div>

    <p v-if="loading">Загрузка…</p>
    <p v-else-if="!projects.length" class="text-gray-500"></p>

    <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="p in projects"
        :key="p.id"
        class="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
      >
        <h2 class="font-semibold mb-2">{{ p.title }}</h2>

        <div v-html="p.content" class="text-sm text-gray-700 mb-2" />

        <a
          v-if="p.link"
          :href="p.link"
          target="_blank"
          class="inline-block text-blue-600 hover:underline text-sm"
        >
          Открыть проект →
        </a>
      </article>
    </div>
  </section>
</template>

<style scoped>
.container { max-width: 960px; }
</style>