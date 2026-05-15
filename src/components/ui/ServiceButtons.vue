<template>
  <section class="max-w-6xl mx-auto px-4 py-16">
    <h2 class="text-2xl font-bold text-center mb-10">Компетенции</h2>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <RouterLink
        v-for="card in competencyCards"
        :key="card.title"
        :to="card.to"
        class="group block bg-white border rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
      >
        <p class="text-xs font-semibold tracking-wide uppercase text-slate-500 mb-2">{{ card.tag }}</p>
        <h3 class="font-semibold text-lg mb-2 text-slate-900">{{ card.title }}</h3>
        <p class="text-sm text-slate-600 mb-4">{{ card.description }}</p>
        <span class="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
          Узнать больше
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </span>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const competencyCards = [
  {
    tag: 'Apple',
    title: 'Экосистема Apple',
    description: '10+ лет опыта настройки устройств, MDM-решений и обучения сотрудников.',
    to: '/services/apple/'
  },
  {
    tag: 'AI',
    title: 'Внедрение ChatGPT и LLM',
    description: 'Запускаем ChatGPT (GPTchat), Claude и другие LLM в отделах продаж, поддержки и маркетинга.',
    to: '/services/ai/business/gpt-intro'
  },
  {
    tag: 'Automation',
    title: 'AI-автоматизация процессов',
    description: 'Связываем заявки, CRM и документы в единые сценарии через n8n / Make / Zapier.',
    to: '/services/ai/business/n8n-zapier'
  },
  {
    tag: 'Bots',
    title: 'Telegram-боты и ассистенты',
    description: 'Делаем внешних и внутренних ботов: от обработки обращений до базы знаний команды.',
    to: '/services/ai/business/chatbot-deployment'
  },
  {
    tag: 'Audit',
    title: 'Бизнес-аудит и IT-диагностика',
    description: 'Разбираем инфраструктуру, находим риски и собираем дорожную карту улучшений.',
    to: '/services/audit/'
  },
  {
    tag: 'Security',
    title: 'Доступы и безопасность',
    description: 'Ролевые модели, контроль прав, 2FA и практики защиты данных для стабильной работы команды.',
    to: '/services/business-it/access-roles'
  }
]
</script> 
