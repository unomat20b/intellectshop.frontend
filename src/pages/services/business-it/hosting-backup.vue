<script setup>
import ServiceDetailContent from '@/components/services/ServiceDetailContent.vue'
import { useServicePageHead } from '@/composables/useServicePageHead'
import { servicePageContent } from '@/content/service-pages/business-it/hosting-backup'

useServicePageHead(servicePageContent)
</script>

<template>
  <ServiceDetailContent :content="servicePageContent" />
</template>
