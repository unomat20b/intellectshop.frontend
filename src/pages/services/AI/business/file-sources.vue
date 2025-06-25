<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Работа с файлами и базой знаний – IntellectShop',
  meta: [
    {
      name: 'description',
      content:
        'Научитесь подключать PDF, Google Docs и базы знаний к AI-ассистентам для точных и персонализированных ответов.',
    },
  ],
})
</script>

<template>
  <section class="max-w-3xl mx-auto px-4 py-10">
    <h1 class="text-2xl font-bold mb-4">Работа с файлами и базой знаний</h1>

    <p class="text-gray-700 mb-4">
      Большинство бизнес-задач основано на документах: PDF, Word, таблицы, презентации. Этот курс научит вас подключать свои файлы и использовать их как источник знаний для AI-ассистента.
    </p>

    <h2 class="text-lg font-semibold mb-2">Что входит в обучение</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Загрузка и обработка PDF, Word, Excel-документов</li>
      <li>Интеграция с Google Drive и Google Docs</li>
      <li>Создание единой базы знаний на основе ваших файлов</li>
      <li>Использование RAG (Retrieval-Augmented Generation)</li>
      <li>Подключение файлов в чаты, Slack, Telegram, Web-приложения</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Типовые кейсы</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Поиск нужного пункта в PDF-договоре по запросу</li>
      <li>Ответы AI на основе корпоративных инструкций и методичек</li>
      <li>Обработка таблиц и генерация отчётов на основе данных</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Что вы получите</h2>
    <p class="text-gray-700 mb-6">
      Возможность превратить ваши документы в живую базу знаний. AI будет точно отвечать на вопросы, зная ваш контент, и станет вашим цифровым сотрудником, а не просто чат-ботом.
    </p>

    <h2 class="text-lg font-semibold mb-2">2 лайфхака по работе с файлами</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li><strong>PDF с текстом:</strong> используйте OCR-инструменты (например, Adobe или OCR.space), если документ не копируется</li>
      <li><strong>Длинные документы:</strong> делите на смысловые блоки и добавляйте заголовки — это помогает AI лучше понимать структуру</li>
    </ul>

    <p class="text-gray-700 italic">
      Ваши файлы — это не архив, а источник знаний. Мы покажем, как научить AI понимать и использовать их в работе.
    </p>
  </section>
</template>