<script setup>
import { useHead } from '@vueuse/head'
import FeedbackForm from '../components/FeedbackForm.vue'

const SITE_URL = 'https://intellectshop.net'

useHead({
  title: 'Форма обратной связи — IntellectShop',
  meta: [
    {
      name: 'description',
      content: 'Форма обратной связи IntellectShop для связи по услугам Apple, AI и автоматизации.'
    },
    {
      name: 'robots',
      content: 'noindex, nofollow'
    },
    { property: 'og:title', content: 'Форма обратной связи — IntellectShop' },
    { property: 'og:description', content: 'Свяжитесь с командой IntellectShop через форму обратной связи.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${SITE_URL}/feedback-form/` }
  ]
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12">
    <FeedbackForm title="Форма обратной связи" tag="feedback-form" />
  </div>
</template>
