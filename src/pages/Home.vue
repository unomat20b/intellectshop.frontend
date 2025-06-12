<script setup lang="ts">
import WetGlass from '../components/ui/WetGlass.vue'
import { RouterLink } from 'vue-router'
import { useHead } from '@vueuse/head'
import bgHome1 from '@/assets/backgrounds/Background_home_1.svg'
import logoWhite from '@/assets/svg/logo_white.svg'

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
  <section class="max-w-5xl mx-auto px-4 py-16">
    <h2 class="text-2xl font-bold text-center mb-10">Компетенции</h2>

    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <RouterLink
        to="/services/apple"
        class="p-6 bg-white rounded-xl shadow-sm border text-center block"
      >
        <h3 class="font-semibold mb-2">Экосистема Apple</h3>
        <p class="text-sm text-slate-600">
          10+ лет опыта настройки устройств, MDM-решений и обучения сотрудников.
        </p>
      </RouterLink>
      <RouterLink
        to="/services/ai"
        class="p-6 bg-white rounded-xl shadow-sm border text-center block"
      >
        <h3 class="font-semibold mb-2">Нейросети &amp; AI-агенты</h3>
        <p class="text-sm text-slate-600">
          Внедряем ChatGPT-решения, создаём кастомных агентов на базе LLM.
        </p>
      </RouterLink>
      <RouterLink
        to="/services/audit"
        class="p-6 bg-white rounded-xl shadow-sm border text-center block"
      >
        <h3 class="font-semibold mb-2">Бизнес-аудит</h3>
        <p class="text-sm text-slate-600">
          Анализ текущих IT-процессов и подбор оптимальных инструментов.
        </p>
      </RouterLink>
    </div>
  </section>
</template>