<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: '3D-моделирование на Mac – IntellectShop',
  meta: [
    { name: 'description', content: 'Обучение 3D-моделированию и визуализации в Blender на Mac.' }
  ]
})
</script>

<template>
  <section class="max-w-3xl mx-auto px-4 py-10">
    <h1 class="text-2xl font-bold mb-4">3D-моделирование на Mac</h1>

    <p class="text-gray-700 mb-4">
      Хотите научиться создавать собственные 3D-модели, сцены и анимации? На этом тренинге мы покажем, как использовать Blender на Mac для моделирования, рендеринга и создания цифровых миров — даже если вы никогда не открывали 3D-программы раньше.
    </p>

    <h2 class="text-lg font-semibold mb-2">Что входит в обучение</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Установка и настройка Blender на macOS</li>
      <li>Базовые принципы 3D: координаты, объекты, сцена</li>
      <li>Инструменты моделирования: Extrude, Loop Cut, Bevel</li>
      <li>Работа с материалами и текстурами</li>
      <li>Настройка освещения и камеры</li>
      <li>Основы риггинга и анимации</li>
      <li>Финальный рендер в Cycles или Eevee</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Частые трудности у новичков</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Сложный интерфейс и непонятные инструменты</li>
      <li>Объекты не отображаются или "пропадают"</li>
      <li>Долгий рендер или шумное изображение</li>
      <li>Ошибки при экспорте модели в другие форматы</li>
      <li>Трудности с текстурами и материалами</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Что вы получите на выходе</h2>
    <p class="text-gray-700 mb-6">
      Вы научитесь уверенно работать в Blender, моделировать собственные объекты, настраивать свет, материалы и создавать базовые анимации. Эти навыки пригодятся для игр, дизайна, архитектуры, визуализации или просто как творческое хобби.
    </p>

    <h2 class="text-lg font-semibold mb-2">2 лайфхака для работы в Blender</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li><strong>Фокус на объект:</strong> нажмите <kbd>NumPad .</kbd> или <kbd>Shift+C</kbd>, чтобы моментально найти и отцентрировать выбранный объект в окне.</li>
      <li><strong>Автосохранение проектов:</strong> в «Preferences → Save & Load» включите частые автосейвы — Blender может восстановить файл даже после сбоя.</li>
    </ul>

    <p class="text-gray-700 italic">
      Начать с нуля и за пару занятий научиться создавать объёмные сцены — это реальность. Мы объясняем сложное простыми словами и показываем наглядно.
    </p>
  </section>
</template>