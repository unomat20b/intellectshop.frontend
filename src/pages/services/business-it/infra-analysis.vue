<script setup>
import ServiceDetailContent from '@/components/services/ServiceDetailContent.vue'
import { useServicePageHead } from '@/composables/useServicePageHead'
import { infraAnalysisPageContent } from '@/content/service-pages/business-it/infra-analysis'

useServicePageHead(infraAnalysisPageContent)
</script>

<template>
  <ServiceDetailContent :content="infraAnalysisPageContent" />
</template>
