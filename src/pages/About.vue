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
  <section class="max-w-4xl mx-auto py-12 px-4 space-y-12">

    <!-- О компании -->
    <div>
      <h1 class="text-3xl font-bold mb-6">О IntellectShop</h1>
      <p class="mb-6 text-lg">
        IntellectShop — команда специалистов, обучающих работе с техникой Apple, внедряющих нейросети в бизнес, автоматизирующих процессы и развивающих цифровую трансформацию.
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
        <h3 class="text-xl font-semibold mb-4">Свяжитесь с нами</h3>
        <ul class="space-y-2">
          <li>
            Телефон:
            <a href="tel:+700000000" class="text-blue-600 hover:underline">+7 (000) 000‑00‑00</a>
          </li>
          <li>
            Email:
            <a href="mailto:info@example.com" class="text-blue-600 hover:underline">info@example.com</a>
          </li>
        </ul>
      </div>
    </div>

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
    </div>
  </section>
</template>

<style scoped>
.container { max-width: 760px; }
</style>