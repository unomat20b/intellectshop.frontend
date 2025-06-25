<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Облачный AI-агент 24/7 – IntellectShop',
  meta: [
    {
      name: 'description',
      content: 'Как развернуть AI-ассистента в облаке, который работает постоянно и доступен с любых устройств.',
    },
  ],
})
</script>

<template>
  <section class="max-w-3xl mx-auto px-4 py-10">
    <h1 class="text-2xl font-bold mb-4">Облачный AI-агент 24/7</h1>

    <p class="text-gray-700 mb-4">
      Хотите, чтобы нейросетевой помощник был доступен круглосуточно, без запуска на вашем устройстве? Облачный агент — это решение. Вы создадите собственного AI-ассистента, который работает на сервере 24/7 и принимает сообщения через Telegram, Web-интерфейс или API.
    </p>

    <h2 class="text-lg font-semibold mb-2">Что входит в обучение</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Выбор подходящей облачной платформы: Render, Railway, Fly.io, Replit</li>
      <li>Деплой агента: подключение OpenAI, Replicate или HuggingFace</li>
      <li>Настройка Telegram-бота или Web-интерфейса</li>
      <li>Сохранение истории, логов, памяти агента (Supabase, Firestore)</li>
      <li>Мониторинг и автообновления, защита от сбоев</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Типичные ошибки, которые мы поможем избежать</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Слишком дорогой или нестабильный хостинг</li>
      <li>Блокировка Telegram-бота из-за превышения лимитов</li>
      <li>Отсутствие логирования и сохранения состояний</li>
      <li>Неправильная интеграция API ключей и переменных</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Что вы получите</h2>
    <p class="text-gray-700 mb-6">
      У вас будет AI-ассистент, доступный в любое время и с любого устройства — через Telegram, сайт или даже голос. Подходит для задач поддержки, генерации, контроля и личных запросов.
    </p>

    <h2 class="text-lg font-semibold mb-2">2 лайфхака по запуску облачного агента</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li><strong>Replit + UptimeRobot:</strong> можно создать агента даже без собственного сервера, просто с ботом в Replit и бесплатным поддержанием активности.</li>
      <li><strong>Webhooks в Telegram:</strong> вместо long polling подключайте webhooks — это надёжнее и быстрее работает в продакшене.</li>
    </ul>

    <p class="text-gray-700 italic">
      Облачный агент — это ваш личный сотрудник, который всегда на связи. Мы покажем, как сделать его реальностью без DevOps-хаоса.
    </p>
  </section>
</template>