<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'AI для креативных задач – IntellectShop',
  meta: [
    {
      name: 'description',
      content: 'Изучите, как использовать нейросети для генерации идей, изображений, сценариев, озвучки и видео. Подходит для дизайнеров, блогеров и креаторов.',
    },
  ],
})
</script>

<template>
  <section class="max-w-3xl mx-auto px-4 py-10">
    <h1 class="text-2xl font-bold mb-4">AI для креативных задач</h1>

    <p class="text-gray-700 mb-4">
      Нейросети — мощный инструмент для творчества. Этот модуль показывает, как создавать уникальный контент, генерировать идеи и ускорять производство видео, аудио и дизайна.
    </p>

    <h2 class="text-lg font-semibold mb-2">Что входит в обучение</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Создание изображений с Midjourney, DALL·E и SDXL</li>
      <li>Подбор промтов и стилистик для визуалов</li>
      <li>Генерация голосов: ElevenLabs, Bark, TTS</li>
      <li>Сценарии, идеи, описания и тексты для контента</li>
      <li>Подготовка материалов для YouTube, Reels, Telegram</li>
      <li>AI-поддержка в Canva, Figma, Photoshop, CapCut</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Частые ошибки креаторов</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Неумение формулировать чёткие и стилизованные промпты</li>
      <li>Использование нейросетей без авторских корректировок</li>
      <li>Слишком долгое время на монтаж и рендеринг</li>
      <li>Проблемы с авторским правом и лицензированием</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Что вы получите</h2>
    <p class="text-gray-700 mb-6">
      Вы создадите собственный креативный pipeline с AI-инструментами: от идеи до готового продукта. Нейросети начнут работать в вашей стилистике, под ваши задачи и с учётом аудитории.
    </p>

    <h2 class="text-lg font-semibold mb-2">2 лайфхака для креаторов</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li><strong>Стилизация Midjourney:</strong> используйте команду <code>--style</code> и опцию <code>--ar</code> (соотношение сторон), чтобы создавать графику под Instagram, обложки, или широкоформатные баннеры.</li>
      <li><strong>Озвучка + видео:</strong> скомбинируйте голос из ElevenLabs с фоном из Pexels и добавьте титры через CapCut — получится готовый Reels за 15 минут.</li>
    </ul>

    <p class="text-gray-700 italic">
      С нейросетями вы можете творить быстрее, глубже и с большим размахом. Мы покажем, как использовать это преимущество на практике.
    </p>
  </section>
</template>