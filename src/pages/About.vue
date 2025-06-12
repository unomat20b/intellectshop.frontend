<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useHead } from '@vueuse/head'

useHead({
  title: 'О нас — IntellectShop',
  meta: [
    { name: 'description', content: 'Обучение Apple, ИИ, автоматизация. IntellectShop — технологии для бизнеса.' },
    { name: 'keywords', content: 'IntellectShop, обучение Apple, нейросети, ИИ, автоматизация, агенты' },
    { property: 'og:title', content: 'О нас — IntellectShop' },
    { property: 'og:description', content: 'Мы внедряем нейросети и обучаем работе с техникой Apple' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://intellectshop.net/about' },
  ],
})

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
    <h1 class="text-2xl font-bold mb-6">Обо мне</h1>

    <p v-if="loading">Загрузка…</p>
    <p v-else-if="!about" class="text-gray-500">Данные не получены</p>

    <article v-else class="prose max-w-none">
      <h2 class="text-xl font-semibold mb-2">{{ about.title }}</h2>
      <div v-html="about.content" />
    </article>
  </section>
</template>

<style scoped>
.container { max-width: 760px; }
</style>