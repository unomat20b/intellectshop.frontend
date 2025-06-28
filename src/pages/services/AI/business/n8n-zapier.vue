<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Интеграции с n8n и Zapier – IntellectShop',
  meta: [
    {
      name: 'description',
      content: 'Интеграция нейросетей с n8n, Make и Zapier: автоматизация рабочих процессов и взаимодействие с другими сервисами.',
    },
  ],
})
</script>

<script>
export default {
  serviceTitle: "Автоматизация с n8n и Zapier",
  serviceDescription: "Интеграция и автоматизация бизнес-процессов с помощью n8n и Zapier."
}
</script>

<template>
  <section class="max-w-3xl mx-auto px-4 py-10">
    <h1 class="text-2xl font-bold mb-4">Интеграции с n8n и Zapier</h1>

    <p class="text-gray-700 mb-4">
      Хотите, чтобы нейросети автоматически отвечали клиентам, заполняли таблицы и обрабатывали запросы? На этом тренинге вы научитесь подключать GPT и другие модели к no-code платформам автоматизации: n8n, Zapier, Make.
    </p>

    <h2 class="text-lg font-semibold mb-2">Что входит в обучение</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Как работает n8n и Make: визуальные сценарии автоматизации</li>
      <li>Подключение ChatGPT через Webhook или встроенные ноды</li>
      <li>Связка с Notion, Google Sheets, CRM, Telegram</li>
      <li>Автоматический запуск по событиям: новая заявка, письмо, чат</li>
      <li>Обработка входящих запросов нейросетью и генерация ответов</li>
      <li>Настройка логики и условий (if/else, задержки, фильтрация)</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Типовые сценарии</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Заполнить шаблон письма на основе формы с сайта</li>
      <li>Добавить новую карточку в Notion с анализом от GPT</li>
      <li>Принять голосовое сообщение → расшифровать → отправить текст в Telegram</li>
      <li>Ответить пользователю на email или в чате с использованием AI</li>
      <li>Сделать резюме по заказу и добавить в CRM</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Результат курса</h2>
    <p class="text-gray-700 mb-6">
      Вы сможете связать нейросети с бизнес-инструментами и создать автоматические процессы: от первичной обработки данных до полной автоворонки общения с клиентами.
    </p>

    <h2 class="text-lg font-semibold mb-2">2 совета</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li><strong>Используйте фильтры:</strong> не давайте нейросети «говорить» во всех случаях подряд — применяйте условия и ограничения.</li>
      <li><strong>Логируйте ответы:</strong> сохраняйте результат работы AI в отдельную таблицу для контроля и дообучения.</li>
    </ul>

    <p class="text-gray-700 italic">
      Автоматизация с AI — это не замена человека, а усиление. Правильно выстроенные процессы сэкономят время и дадут стабильность.
    </p>
  </section>
</template>