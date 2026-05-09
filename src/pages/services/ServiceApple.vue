<script setup>
import { useHead } from '@vueuse/head'
import ServiceSections from '@/components/services/ServiceSections.vue'
import { appleServiceContent } from '@/content/services/apple'

useHead({
  title: appleServiceContent.meta.title,
  meta: [{ name: 'description', content: appleServiceContent.meta.description }],
})
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-6">
      {{ appleServiceContent.page.title }}
    </h1>

    <p class="text-gray-700 mb-10">
      {{ appleServiceContent.page.intro }}
    </p>

    <ServiceSections :sections="appleServiceContent.sections" />
  </section>
</template>
