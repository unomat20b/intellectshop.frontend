<template>
  <div class="bg-slate-50 py-12">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-2xl font-bold mb-2">Первые шаги</h2>
      <p class="text-slate-600 mb-8">Стартовые направления, с которых чаще всего начинают внедрение.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RouterLink
          v-for="step in firstStepsCards"
          :key="step.title"
          :to="step.to"
          class="group relative flex flex-col rounded-[2rem] border border-slate-200 bg-[#f5f5f7] p-8 min-h-[320px] overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
        >
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
          <div class="relative z-10 flex h-full flex-col">
            <p class="text-sm font-semibold text-slate-600 mb-4">{{ step.kicker }}</p>
            <h3 class="text-4xl leading-[1.05] font-semibold tracking-tight text-slate-900 max-w-md">{{ step.title }}</h3>
            <p class="text-lg text-slate-700 mt-5 max-w-xl">{{ step.description }}</p>
            <span class="mt-auto pt-8 inline-flex items-center text-[28px] leading-none font-medium tracking-tight text-blue-600 group-hover:text-blue-700 transition-colors">
              Узнать больше
              <svg class="w-6 h-6 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const firstStepsCards = [
  {
    kicker: 'Шаг 1',
    title: 'Внедрение ChatGPT и LLM',
    description: 'Определяем, где в компании ИИ даст быстрый эффект: продажи, поддержка, маркетинг, документы.',
    to: '/services/ai/business/gpt-intro'
  },
  {
    kicker: 'Шаг 2',
    title: 'Telegram-бот для задач команды',
    description: 'Запускаем бота для заявок, базы знаний или клиентских обращений с понятным сценарием работы.',
    to: '/services/ai/business/chatbot-deployment'
  },
  {
    kicker: 'Шаг 3',
    title: 'Автоматизация процессов',
    description: 'Связываем формы, CRM и таблицы в автосценарии через n8n / Make / Zapier без ручной рутины.',
    to: '/services/ai/business/n8n-zapier'
  },
  {
    kicker: 'Шаг 4',
    title: 'IT-аудит и план улучшений',
    description: 'Проверяем инфраструктуру, доступы и риски, чтобы внедрение AI было устойчивым и безопасным.',
    to: '/services/audit/'
  }
]
</script> 
