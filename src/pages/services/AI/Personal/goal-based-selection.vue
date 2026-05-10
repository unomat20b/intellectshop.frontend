<script setup>
import ServiceDetailContent from '@/components/services/ServiceDetailContent.vue'
import { useServicePageHead } from '@/composables/useServicePageHead'
import { servicePageContent } from '@/content/service-pages/ai/personal/goal-based-selection'

useServicePageHead(servicePageContent)
</script>

<template>
  <ServiceDetailContent :content="servicePageContent" />
</template>
