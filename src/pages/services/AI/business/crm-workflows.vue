<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'AI-автоматизация в CRM – IntellectShop',
  meta: [
    {
      name: 'description',
      content:
        'Создание автоматических воронок, генерация писем, анализ лидов и ответы клиентам с помощью нейросетей в CRM: Bitrix24, amoCRM, Notion и другие.',
    },
  ],
})
</script>

<template>
  <section class="max-w-3xl mx-auto px-4 py-10">
    <h1 class="text-2xl font-bold mb-4">AI в CRM: автоматизация воронок и коммуникации</h1>

    <p class="text-gray-700 mb-4">
      На этом курсе вы узнаете, как встроить нейросети в ваши CRM-процессы — чтобы ускорить обработку заявок, сэкономить время менеджеров и улучшить конверсию.
    </p>

    <h2 class="text-lg font-semibold mb-2">Что входит в обучение</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Генерация персонализированных ответов клиентам</li>
      <li>Создание автоматических писем по шаблонам</li>
      <li>Распознавание запроса клиента и заполнение карточки лида</li>
      <li>AI-оценка лидов по вероятности покупки</li>
      <li>Интеграция AI в amoCRM / Bitrix24 / Notion / Airtable</li>
      <li>Связь с Google Таблицами, почтой и мессенджерами</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Типовые кейсы</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>AI обрабатывает входящую заявку и пишет черновик ответа</li>
      <li>AI заполняет карточку клиента по письму или заявке с формы</li>
      <li>AI анализирует открытые диалоги и предлагает действия</li>
      <li>AI уведомляет менеджера, если лиду не ответили за X часов</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Что вы получите на выходе</h2>
    <p class="text-gray-700 mb-6">
      Готовые автоматизации, которые подключаются к вашей CRM и значительно ускоряют коммуникацию, уменьшают рутину и делают работу менеджеров эффективнее.
    </p>

    <h2 class="text-lg font-semibold mb-2">2 лайфхака по CRM и AI</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li><strong>n8n + OpenAI:</strong> создайте сценарий: новая заявка → AI генерирует письмо → отправка менеджеру на утверждение</li>
      <li><strong>Bitrix24:</strong> AI может анализировать комментарии в карточке и подсвечивать потенциально горячих клиентов</li>
    </ul>

    <p class="text-gray-700 italic">
      Умная CRM с нейросетью — это как помощник, который всегда на связи и не ошибается. Настроим вместе.
    </p>
  </section>
</template>