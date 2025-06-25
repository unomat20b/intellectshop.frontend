<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'AI и автоматизация бизнес-процессов – IntellectShop',
  meta: [
    {
      name: 'description',
      content:
        'Настройка AI-автоматизации с n8n, Zapier, Make, Integromat. Связь с CRM, Notion, 1С и корпоративными системами.',
    },
  ],
})
</script>

<template>
  <section class="max-w-3xl mx-auto px-4 py-10">
    <h1 class="text-2xl font-bold mb-4">AI и автоматизация бизнес-процессов</h1>

    <p class="text-gray-700 mb-4">
      Вы научитесь создавать автоматические сценарии, в которых нейросети работают как часть бизнес-процессов: от обработки заявок и писем до генерации ответов и отчетов. Всё — без программирования.
    </p>

    <h2 class="text-lg font-semibold mb-2">Что входит в обучение</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Создание автоматических рабочих процессов с n8n / Make / Zapier</li>
      <li>Интеграция с Notion, Bitrix24, 1С, Airtable, amoCRM</li>
      <li>Обработка запросов: письма, формы, чаты</li>
      <li>Генерация ответа от ИИ → обновление задачи → запись в CRM</li>
      <li>Подключение нейросети в середину цепочки действий</li>
      <li>Логика принятия решений: фильтры, ветвления, повторные действия</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Типовые кейсы</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Письмо с сайта → анализ → ответ от GPT → лог в Airtable</li>
      <li>Новая сделка в CRM → генерация КП → отправка клиенту</li>
      <li>Формирование отчёта по задаче на основе входящего PDF</li>
      <li>Автоматические уведомления в Telegram и email</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Что вы получите на выходе</h2>
    <p class="text-gray-700 mb-6">
      Вы сможете проектировать полноценные AI-агентные сценарии, в которых человек только контролирует поток, а рутину выполняет нейросеть и автоматизация. Это экономит десятки часов и повышает масштабируемость бизнес-процессов.
    </p>

    <h2 class="text-lg font-semibold mb-2">2 лайфхака по автоматизации</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li><strong>Контекстные подсказки GPT:</strong> формируйте промт динамически — добавляйте имя клиента, запрос и нужную инструкцию из Airtable или Notion.</li>
      <li><strong>Webhook + Telegram:</strong> создайте endpoint в n8n и подключите его к Telegram-боту — получайте уведомления и управляйте автоматизацией прямо с телефона.</li>
    </ul>

    <p class="text-gray-700 italic">
      Правильно выстроенная автоматизация с AI — это не просто "бот". Это виртуальный сотрудник, который работает 24/7 и снимает с команды рутину.
    </p>
  </section>
</template>