<script setup>
import { ref, onMounted } from 'vue'
import { fetchProducts } from '../api/modx'
import { getErrorMessage } from '@/api/errors'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Каталог — IntellectShop',
  meta: [
    { name: 'description', content: 'Товары и предложения IntellectShop для бизнеса и пользователей.' }
  ]
})

const loading = ref(true)
const products = ref([])
const errorMessage = ref('')

onMounted(async () => {
  try {
    products.value = await fetchProducts()
  } catch (error) {
    errorMessage.value = getErrorMessage(error, 'Не удалось загрузить каталог.')
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-6 flex items-center gap-2">
      <span>🛍️</span> Каталог товаров
    </h1>

    <!-- Спиннер / заглушка -->
    <p v-if="loading">Загрузка…</p>
    <p v-else-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>

    <!-- Нет товаров -->
    <p v-else-if="!products.length" class="text-gray-500">
      Пока товаров нет
    </p>

    <!-- Сетка товаров -->
    <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="p in products"
        :key="p.id"
        class="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
      >
        <h2 class="font-semibold mb-2">{{ p.title }}</h2>
        <p class="text-sm text-gray-600" v-html="p.content" />
        <!-- Добавишь price / image позже -->
      </article>
    </div>
  </section>
</template>

<style scoped>
/* Доп. стили, если Tailwind не подключён в проекте */
.container { max-width: 960px; }
</style>
