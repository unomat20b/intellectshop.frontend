<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Настройка RAG (Retrieval-Augmented Generation) – IntellectShop',
  meta: [
    { name: 'description', content: 'Как подключить базу знаний и реализовать RAG-ответы от ИИ на основе ваших файлов и данных.' }
  ]
})
</script>

<template>
  <section class="max-w-3xl mx-auto px-4 py-10">
    <h1 class="text-2xl font-bold mb-4">Настройка RAG (Retrieval-Augmented Generation)</h1>

    <p class="text-gray-700 mb-4">
      Подключите базу знаний (Google Drive, PDF, Word, Excel, внутренние базы) и создайте ИИ-ассистента, который будет отвечать на вопросы на основе ваших документов. RAG позволяет извлекать и обобщать информацию, делая ответы точными и контекстными.
    </p>

    <h2 class="text-lg font-semibold mb-2">Что входит в обучение</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Обзор принципов Retrieval-Augmented Generation</li>
      <li>Подключение хранилищ: Google Drive, облака, локальные источники</li>
      <li>Работа с файлами: PDF, Word, Excel, базы знаний</li>
      <li>Выбор способа хранения и индексации документов</li>
      <li>Интеграция с чат-ботами, Slack, Telegram и Web-интерфейсами</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Типичные проблемы</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>ИИ даёт «общие» ответы, игнорируя вашу информацию</li>
      <li>Файлы не индексируются, плохой поиск по данным</li>
      <li>Сложность в настройке доступа и обновления базы</li>
      <li>Низкая производительность на больших массивах данных</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Что вы получите</h2>
    <p class="text-gray-700 mb-6">
      Вы настроите систему, где ИИ будет давать ответы на основе вашей базы знаний. Это подходит для саппорта, обучения сотрудников, автоматизации FAQ, справок и даже документации по проектам. Всё — в виде удобного чат-интерфейса.
    </p>

    <h2 class="text-lg font-semibold mb-2">2 лайфхака по работе с RAG</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li><strong>Быстрая настройка:</strong> используйте готовые фреймворки типа LlamaIndex или LangChain для быстрой реализации RAG</li>
      <li><strong>Контроль качества:</strong> добавьте журнал запросов и результатов, чтобы отслеживать, как ИИ использует данные и улучшать качество ответов</li>
    </ul>

    <p class="text-gray-700 italic">
      Настройте умного ассистента, который знает всё о ваших проектах и документах — с помощью RAG.
    </p>
  </section>
</template>