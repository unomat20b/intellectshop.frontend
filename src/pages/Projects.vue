<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useHead } from '@vueuse/head'

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

    <p v-if="loading">Загрузка…</p>
    <p v-else-if="!projects.length" class="text-gray-500">Пока нет проектов</p>

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