<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Выбор нейросети под задачу – IntellectShop',
  meta: [
    {
      name: 'description',
      content:
        'GPT, Claude, Mistral, Midjourney — как выбрать подходящую модель под бизнес-задачи и интегрировать её.',
    },
  ],
})
</script>

<template>
  <section class="max-w-3xl mx-auto px-4 py-10">
    <h1 class="text-2xl font-bold mb-4">Выбор нейросети под задачу</h1>

    <p class="text-gray-700 mb-4">
      Нейросетей стало много — но не каждая подойдёт для ваших целей. На этом тренинге вы узнаете, как выбрать и сравнить модели под конкретные задачи: от генерации текста до работы с файлами и изображениями.
    </p>

    <h2 class="text-lg font-semibold mb-2">Что вы узнаете</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Чем отличаются GPT-4, Claude, Mistral, Gemini, LLaMA</li>
      <li>Когда использовать ChatGPT, а когда — локальные LLM</li>
      <li>Обзор моделей по типу: тексты, изображения, голос, видео</li>
      <li>Сравнение по цене, качеству, скорости и доступности API</li>
      <li>Выбор подходящей платформы: OpenAI, Hugging Face, Replicate</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Типовые сценарии</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Тексты и письма — GPT-4, Claude, LLaMA</li>
      <li>Файлы и документы — Claude, GPT-4 с RAG</li>
      <li>Голос — ElevenLabs, Bark, Whisper</li>
      <li>Изображения — Midjourney, DALL·E, SDXL</li>
      <li>Автоматизация — GPT-4 + n8n / Make / Zapier</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Результат курса</h2>
    <p class="text-gray-700 mb-6">
      Вы научитесь быстро оценивать, какая модель решает вашу задачу оптимально, и принимать обоснованные решения при выборе нейросетевого решения — с учётом бюджета, скорости, качества и безопасности.
    </p>

    <h2 class="text-lg font-semibold mb-2">2 совета</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li><strong>Проверьте live-демо:</strong> большинство моделей можно протестировать прямо в браузере (например, на Hugging Face).</li>
      <li><strong>Не доверяйте маркетингу:</strong> лучше потестировать несколько моделей на вашей задаче и сравнить результат.</li>
    </ul>

    <p class="text-gray-700 italic">
      Нейросети — это инструменты. Главное — выбрать тот, что даст максимальный эффект именно для вашей задачи.
    </p>
  </section>
</template>