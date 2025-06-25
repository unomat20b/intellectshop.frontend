<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Интеграция с внутренними данными – IntellectShop',
  meta: [
    {
      name: 'description',
      content:
        'Научитесь подключать нейросети к корпоративным данным: CRM, Google Docs, Notion, Airtable и другим источникам.',
    },
  ],
})
</script>

<template>
  <section class="max-w-3xl mx-auto px-4 py-10">
    <h1 class="text-2xl font-bold mb-4">Интеграция с внутренними данными</h1>

    <p class="text-gray-700 mb-4">
      Эффективный AI-ассистент должен работать с вашей реальной корпоративной информацией. На этом тренинге вы научитесь подключать нейросети к данным из разных систем и использовать их для автоматизации задач.
    </p>

    <h2 class="text-lg font-semibold mb-2">Что входит в обучение</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Подключение Google Sheets, Docs, Notion, Airtable</li>
      <li>Интеграция с CRM: Bitrix24, amoCRM, HubSpot</li>
      <li>Сбор и структурирование данных для работы с AI</li>
      <li>Использование Webhooks и API для передачи информации</li>
      <li>Создание безопасных каналов между данными и ассистентом</li>
      <li>Работа с RAG-механикой: ответы на основе данных компании</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Типовые кейсы</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>AI читает сделки и предложения из CRM и готовит письма</li>
      <li>Ассистент получает информацию из базы знаний и отвечает клиентам</li>
      <li>Нейросеть помогает искать данные в Airtable и PDF-файлах</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Что вы получите</h2>
    <p class="text-gray-700 mb-6">
      Рабочие шаблоны и схемы подключения нейросетей к вашим данным — без риска утечки информации. Уверенность в использовании AI в чувствительных и критичных для бизнеса процессах.
    </p>

    <h2 class="text-lg font-semibold mb-2">2 лайфхака для интеграции</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li><strong>Не храните всё в prompt:</strong> используйте RAG для масштабирования — ассистент сам достанет нужные данные</li>
      <li><strong>Форматируйте данные:</strong> Markdown или JSON-структура значительно улучшают понимание AI</li>
    </ul>

    <p class="text-gray-700 italic">
      Интеграция данных — это фундамент для умного и полезного AI в бизнесе. Мы покажем, как это реализовать без боли.
    </p>
  </section>
</template>