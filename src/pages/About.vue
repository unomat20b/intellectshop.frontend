<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useHead } from '@vueuse/head'
import FeedbackForm from '../components/FeedbackForm.vue'

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
  <section class="max-w-4xl mx-auto py-12 px-4 space-y-12">

    <!-- О компании -->
    <div>
      <h1 class="text-3xl font-bold mb-6">О IntellectShop</h1>
      <p class="mb-6 text-lg">
        IntellectShop — команда специалистов, внедряющих нейросети в бизнес, автоматизирующих процессы и развивающих цифровую трансформацию, обучающих работе с техникой Apple.
      </p>
    </div>

    <!-- Контакты (из API) -->
    <div>
      <h2 class="text-2xl font-semibold mb-4">Контакты</h2>
      <p v-if="loading">Загрузка…</p>
      <p v-else-if="!about" class="text-gray-500">Данные не получены</p>

      <article v-else class="prose max-w-none mb-8">
        <h3 class="text-xl font-semibold mb-2">{{ about.title }}</h3>
        <div v-html="about.content" />
      </article>
      
      <div class="bg-white rounded-xl shadow-sm border p-6">
        <h3 class="text-xl font-semibold mb-4">Электронная почта</h3>
        <ul class="space-y-2">
          <li>
            Email:
            <a href="mailto:info@intellectshop.net" class="text-blue-600 hover:underline">info@intellectshop.net</a>
          </li>
        </ul>
      </div>
    </div>
    <FeedbackForm title="Форма обратной связи" tag="Контакты" />
    <!-- Миссия -->
    <div>
      <h2 class="text-2xl font-semibold mb-4">Наша миссия</h2>
      <p>Помогать людям и компаниям эффективно использовать технологии Apple и ИИ для роста, автоматизации и креативности.</p>
    </div>

    <!-- Услуги -->
    <div>
      <h2 class="text-2xl font-semibold mb-4">Услуги</h2>
      <ul class="list-disc list-inside space-y-2">
        <li>Обучение работе с macOS, iOS, iCloud</li>
        <li>Внедрение нейросетей и ИИ-агентов</li>
        <li>Автоматизация задач и рабочих процессов</li>
        <li>Настройка и поддержка техники Apple</li>
      </ul>
      <router-link to="/services" class="mt-4 inline-block text-blue-600 underline hover:text-blue-800">
        Подробнее об услугах →
      </router-link>
      <router-link to="/projects" class="mt-4 inline-block text-blue-600 underline hover:text-blue-800">
        Подробнее об проектах →
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.container { max-width: 760px; }
</style>