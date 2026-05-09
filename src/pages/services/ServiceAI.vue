<script setup>
import { useHead } from '@vueuse/head'
import ServiceSections from '@/components/services/ServiceSections.vue'
import { aiServiceContent } from '@/content/services/ai'

useHead({
  title: aiServiceContent.meta.title,
  meta: [{ name: 'description', content: aiServiceContent.meta.description }],
})
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-6">
      {{ aiServiceContent.page.title }}
    </h1>

    <p class="text-gray-700 mb-10">
      {{ aiServiceContent.page.intro }}
    </p>

    <ServiceSections :sections="aiServiceContent.sections" />
  </section>
</template>
