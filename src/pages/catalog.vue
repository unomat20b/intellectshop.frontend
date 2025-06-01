<<<<<<< HEAD
<script setup>
import { onMounted, ref } from 'vue'
import { fetchProducts } from '../api/modx'

const products = ref([])

onMounted(async () => {
  products.value = await fetchProducts()
})
</script>

<template>
=======
<<<<<<< HEAD
<template>
  <h1 class="text-2xl font-bold text-purple-600">🛍️ Каталог товаров</h1>
=======
<script setup>
import { onMounted, ref } from 'vue'
import { fetchProducts } from '../api/modx'

const products = ref([])

onMounted(async () => {
  products.value = await fetchProducts()
})
</script>

<template>
>>>>>>> b4f01abae259e267e66ebe460c690156fa0e4ab2
  <div class="p-4">
    <h1 class="text-2xl font-bold text-purple-600">🛍️ Каталог товаров</h1>
    <ul class="mt-4 list-disc list-inside" v-if="products.length">
      <li v-for="(item, i) in products" :key="i" class="text-gray-700">
        {{ item.name || item }}
      </li>
    </ul>
    <p v-else class="text-sm text-gray-400">Загрузка...</p>
  </div>
<<<<<<< HEAD
=======
>>>>>>> 6dc26d9 (first2)
>>>>>>> b4f01abae259e267e66ebe460c690156fa0e4ab2
</template>