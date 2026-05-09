<script setup>
import ServiceDetailContent from '@/components/services/ServiceDetailContent.vue'
import { useServicePageHead } from '@/composables/useServicePageHead'
import { iphoneBasicsPageContent } from '@/content/service-pages/apple/iphone/iphone-basics'

useServicePageHead(iphoneBasicsPageContent)
</script>

<template>
  <ServiceDetailContent :content="iphoneBasicsPageContent" />
</template>
