<script setup>
import ServiceDetailContent from '@/components/services/ServiceDetailContent.vue'
import { useServicePageHead } from '@/composables/useServicePageHead'
import { processAnalysisPageContent } from '@/content/service-pages/ai/business/process-analysis'

useServicePageHead(processAnalysisPageContent)
</script>

<template>
  <ServiceDetailContent :content="processAnalysisPageContent" />
</template>
