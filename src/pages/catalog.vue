<script setup>
import { onMounted, ref } from 'vue'
import { fetchProducts } from '../api/modx'

const products = ref([])

onMounted(async () => {
  products.value = await fetchProducts()
})
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold text-purple-600">🛍️ Каталог товаров</h1>
    <ul class="mt-4 list-disc list-inside" v-if="products.length">
      <li v-for="(item, i) in products" :key="i" class="text-gray-700">
        {{ item.name || item }}
      </li>
    </ul>
    <p v-else class="text-sm text-gray-400">Загрузка...</p>
  </div>
</template>