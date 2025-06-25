<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Локальные LLM и защита данных – IntellectShop',
  meta: [
    {
      name: 'description',
      content:
        'Как запустить GPT-подобную модель локально (LLaMA, Mistral, OpenChat) и сохранить контроль над данными внутри компании.',
    },
  ],
})
</script>

<template>
  <section class="max-w-3xl mx-auto px-4 py-10">
    <h1 class="text-2xl font-bold mb-4">Локальные LLM и защита данных</h1>

    <p class="text-gray-700 mb-4">
      Использование облачных AI-сервисов даёт мощные возможности, но не всегда подходит компаниям с повышенными требованиями к конфиденциальности. В этом курсе вы научитесь запускать локальные LLM — без передачи данных в интернет.
    </p>

    <h2 class="text-lg font-semibold mb-2">Что входит в курс</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Выбор подходящей модели: LLaMA, Mistral, OpenChat и другие</li>
      <li>Развёртывание Ollama, LM Studio, LocalAI и других решений</li>
      <li>Настройка серверов и оптимизация для локальной работы</li>
      <li>Интеграция локальной LLM в Telegram, Slack, Web-интерфейс</li>
      <li>Создание безопасной среды для работы сотрудников с AI</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Когда это нужно</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Обработка конфиденциальных или защищённых данных</li>
      <li>Ограничения по политике безопасности или NDA</li>
      <li>Желание контролировать расходы на API-запросы</li>
      <li>Настройка оффлайн-доступа к AI-инструментам</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Результат обучения</h2>
    <p class="text-gray-700 mb-6">
      Вы сможете самостоятельно развернуть мощную языковую модель у себя на сервере или ноутбуке, подключить её к нужным инструментам и быть уверенными, что ваши данные не покидают инфраструктуру компании.
    </p>

    <h2 class="text-lg font-semibold mb-2">2 рекомендации</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li><strong>Начните с Ollama:</strong> минимальная установка и хорошие результаты — отличное решение для старта.</li>
      <li><strong>Ограничьте доступ:</strong> используйте прокси, авторизацию и VPN, если бот работает в локальной сети.</li>
    </ul>

    <p class="text-gray-700 italic">
      Локальные LLM — это путь к независимости и полной защите данных. Если вы хотите владеть своим AI — начните с этого курса.
    </p>
  </section>
</template>