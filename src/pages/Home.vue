<script setup lang="ts">
import WetGlass from '../components/ui/WetGlass.vue'
import { RouterLink } from 'vue-router'
import { useHead } from '@vueuse/head'
import bgHome1 from '@/assets/backgrounds/Background_home_1.svg'
import logoWhite from '@/assets/svg/logo_white.svg'
import ServiceButtons from '../components/ui/ServiceButtons.vue'
import ServicesBlock from '../components/ServicesBlock.vue'
import CaseAccordion from '../components/CaseAccordion.vue'
import FeedbackForm from '../components/FeedbackForm.vue'
import Button from '@/components/ui/Button.vue'

useHead({
  title: 'IntellectShop — обучение и автоматизация',
  meta: [
    { name: 'description', content: 'Обучение технике Apple, нейросети и автоматизация для бизнеса' },
    { property: 'og:title', content: 'IntellectShop — обучение и автоматизация' },
    { property: 'og:description', content: 'Нейросети, Apple, ИИ, автоматизация бизнеса' },
    { property: 'og:image', content: 'https://intellectshop.net/og-image.jpg' } // при наличии
  ]
})
</script>

<template>
  <!-- HERO-блок -->
  <section class="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 text-white overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 py-20 relative">
      <!-- Фоновое изображение -->
      <div class="absolute inset-0 z-0 pointer-events-none h-full w-full">
        <img
          :src="bgHome1"
          alt="background"
          class="w-full h-full object-cover opacity-30"
        />
      </div>

      <!-- Контент -->
      <div class="relative z-10 flex flex-col md:flex-row items-center gap-10">
        <!-- Текст -->
        <div class="flex-1">
          <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
            Intellect<span class="text-blue-400">Shop</span>
          </h1>
          <p class="mt-4 text-lg text-slate-200">
            Мы обучаем работе со <span class="font-semibold">всей техникой Apple</span>,
            внедряем <span class="font-semibold">нейросети</span> и
            разрабатываем <span class="font-semibold">AI-агентов</span> под задачи бизнеса.  
            Также берём на себя аудит и интеграцию IT-сервисов, автоматизируем
            процессы и помогаем масштабироваться.
          </p>

          <!-- CTA-кнопка -->
          <div class="mt-8 flex flex-wrap gap-4">
            <WetGlass class="inline-block">
              <RouterLink
                to="/services"
                class="w-full h-full flex items-center justify-center"
              >
                Услуги и обучение
              </RouterLink>
            </WetGlass>
          </div>
        </div>

        <!-- Иллюстрация -->
        <div class="flex-1 flex justify-center md:justify-end">
          <img
            :src="logoWhite"
            class="w-100 md:w-100 lg:w-100 drop-shadow-lg"
            alt="Логотип IntellectShop"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Блок преимуществ -->
  <ServiceButtons />

  <!-- Блок услуг -->
  <ServicesBlock />
  <CaseAccordion />
  <div class="bg-slate-50 py-12">
    <FeedbackForm title="Если есть вопросы - вам сюда" tag="Home" />
  </div>
</template>