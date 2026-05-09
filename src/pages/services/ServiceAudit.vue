<script setup>
import { useHead } from '@vueuse/head'
import ServiceSections from '@/components/services/ServiceSections.vue'
import { auditServiceContent } from '@/content/services/audit'

useHead({
  title: auditServiceContent.meta.title,
  meta: [{ name: 'description', content: auditServiceContent.meta.description }],
})
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-6">
      {{ auditServiceContent.page.title }}
    </h1>

    <p class="text-gray-700 mb-10">
      {{ auditServiceContent.page.intro }}
    </p>

    <ServiceSections :sections="auditServiceContent.sections" />
  </section>
</template>
