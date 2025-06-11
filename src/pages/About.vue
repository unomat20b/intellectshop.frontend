<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const loading = ref(true)
const about = ref(null)

onMounted(async () => {
  try {
    const { data } = await axios.get('/api/about')
    about.value = data
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-6">Контакты</h1>

    <p v-if="loading">Загрузка…</p>
    <p v-else-if="!about" class="text-gray-500">Данные не получены</p>

    <article v-else class="prose max-w-none mb-8">
      <h2 class="text-xl font-semibold mb-2">{{ about.title }}</h2>
      <div v-html="about.content" />
    </article>

    <div class="bg-white rounded-xl shadow-sm border p-6">
      <h2 class="text-xl font-semibold mb-4">Свяжитесь с нами</h2>
      <ul class="space-y-2">
        <li>
          Телефон:
          <a href="tel:" class="text-blue-600 hover:underline">+7 (000) 000‑00‑00</a>
        </li>
        <li>
          Email:
          <a href="mailto:info@example.com" class="text-blue-600 hover:underline">info@example.com</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.container { max-width: 760px; }
</style>