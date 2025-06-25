<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Развёртывание AI-ассистента в чатах и системах – IntellectShop',
  meta: [
    {
      name: 'description',
      content:
        'Создание и интеграция AI-бота с подключением к внутренним данным и подключением к Telegram, Slack или Web-интерфейсу.',
    },
  ],
})
</script>

<template>
  <section class="max-w-3xl mx-auto px-4 py-10">
    <h1 class="text-2xl font-bold mb-4">AI-ассистент: развёртывание и подключение к чатам</h1>

    <p class="text-gray-700 mb-4">
      Вы узнаете, как развернуть кастомного AI-помощника, который отвечает на вопросы на основе ваших документов, файлов и внутренней базы знаний. Подключение к чатам Telegram, Slack или через WebView.
    </p>

    <h2 class="text-lg font-semibold mb-2">Что входит в обучение</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Подготовка AI-агента с базой знаний (через RAG / Embeddings)</li>
      <li>Формирование промптов и защита от "галлюцинаций"</li>
      <li>Интеграция с Telegram через Bot API и WebApp</li>
      <li>Настройка Web-интерфейса (например, через iframe)</li>
      <li>Подключение Slack-бота и inline-ответов</li>
      <li>Настройка прав доступа и фильтрации запросов</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Примеры использования</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Бот в Telegram, знающий всё о продуктах вашей компании</li>
      <li>Помощник для HR, знающий политику компании и шаблоны писем</li>
      <li>Быстрый поиск по документации и внутренней вики</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Что вы получите на выходе</h2>
    <p class="text-gray-700 mb-6">
      Вы развернёте собственную систему, где сотрудники, клиенты или студенты могут обращаться к чат-боту за точной, актуальной и персонализированной информацией — как в приложении, так и в мессенджере.
    </p>

    <h2 class="text-lg font-semibold mb-2">2 лайфхака по чат-ботам</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li><strong>Контекст из базы знаний:</strong> используйте langchain/chroma/Weaviate + RAG, чтобы бот отвечал только по вашим PDF, DOCX, HTML.</li>
      <li><strong>Telegram WebApp для персонализации:</strong> подключите Telegram Mini App с авторизацией пользователя и историей обращений.</li>
    </ul>

    <p class="text-gray-700 italic">
      Ваш собственный чат-бот — это не просто помощник. Это способ организовать знания, снизить нагрузку на поддержку и увеличить скорость работы команды.
    </p>
  </section>
</template>