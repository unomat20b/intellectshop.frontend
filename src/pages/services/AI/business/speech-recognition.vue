<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Распознавание речи и голосовые решения – IntellectShop',
  meta: [
    {
      name: 'description',
      content: 'Whisper, Vosk, голосовые ассистенты и генерация речи для бизнеса: как внедрять и использовать.'
    }
  ]
})
</script>

<template>
  <section class="max-w-3xl mx-auto px-4 py-10">
    <h1 class="text-2xl font-bold mb-4">🎙️ Распознавание речи и голосовые решения</h1>

    <p class="text-gray-700 mb-4">
      В этом тренинге вы узнаете, как подключить нейросети для распознавания аудио и генерации речи. Мы рассмотрим практическое использование Whisper, Vosk и других инструментов для создания голосовых агентов и автоматизации задач.
    </p>

    <h2 class="text-lg font-semibold mb-2">Что входит в обучение</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Подключение Whisper или Vosk для аудио/видео расшифровки</li>
      <li>Настройка голосовых ассистентов с TTS-движками</li>
      <li>Генерация речи с ElevenLabs, Bark, Google TTS</li>
      <li>Создание голосового интерфейса в Telegram и на сайте</li>
      <li>Интеграция с чатами, email и внутренними сервисами</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Проблемы, которые мы решаем</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Ручная расшифровка записей совещаний и звонков</li>
      <li>Сложность генерации голоса с учётом бренда и языка</li>
      <li>Отсутствие голосового интерфейса в клиентских каналах</li>
      <li>Низкая доступность TTS на русском и украинском языках</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Что вы получите на выходе</h2>
    <p class="text-gray-700 mb-6">
      Вы научитесь подключать голосовые нейросети, автоматизировать расшифровку аудио, строить голосовых агентов и экономить время на рутине. Инструменты будут работать в Telegram, на сайте, по звонку или в CRM.
    </p>

    <h2 class="text-lg font-semibold mb-2">2 лайфхака по работе с голосом</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li><strong>Авторасшифровка Zoom-записей:</strong> подключите папку в Google Drive к n8n — и каждый файл будет автоматически расшифрован через Whisper и сохранён в Notion или Docs.</li>
      <li><strong>TTS-подкасты:</strong> превратите статью или внутренний гайд в подкаст — за 1 минуту с помощью ElevenLabs + ffmpeg.</li>
    </ul>

    <p class="text-gray-700 italic">
      Голос — это мощный и недооценённый канал взаимодействия. Мы поможем вам начать использовать его на полную.
    </p>
  </section>
</template>