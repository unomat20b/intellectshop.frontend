<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const loading = ref(true)
const services = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get('/api/services')
    services.value = Array.isArray(data) ? data : []
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-6">Услуги</h1>

    <p v-if="loading">Загрузка…</p>
    <p v-else-if="!services.length" class="text-gray-500">Услуг пока нет</p>

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