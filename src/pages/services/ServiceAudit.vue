<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Бизнес-аудит — IntellectShop',
  meta: [
    { name: 'description', content: 'Анализ IT-процессов и подбор оптимальных инструментов для бизнеса.' }
  ]
})
</script>

<template>
  <section class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-6">Бизнес-аудит</h1>
    <p>Анализ IT-процессов и подбор оптимальных инструментов.</p>
  </section>
</template>

<style scoped>
.container { max-width: 960px; }
</style>
