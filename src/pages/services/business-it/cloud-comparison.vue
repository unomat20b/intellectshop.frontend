<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Сравнение облачных платформ – IntellectShop',
  meta: [
    {
      name: 'description',
      content: 'Обзор и сравнение популярных хостингов и облачных платформ: Timeweb, Hetzner, DigitalOcean, Firebase, Яндекс Облако и другие.',
    },
  ],
})
</script>

<template>
  <section class="max-w-3xl mx-auto px-4 py-10">
    <h1 class="text-2xl font-bold mb-4">Сравнение облачных платформ</h1>

    <p class="text-gray-700 mb-4">
      Выбор хостинга — стратегическое решение для вашего бизнеса. Мы поможем подобрать платформу под конкретные задачи: сайты, базы данных, API, AI-инфраструктуру, корпоративные сервисы.
    </p>

    <h2 class="text-lg font-semibold mb-2">Что входит в обучение</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Обзор ключевых провайдеров: Timeweb, Hetzner, DigitalOcean, Firebase, Яндекс Облако</li>
      <li>Сравнение по цене, стабильности, геолокации, поддержке и скорости</li>
      <li>Выбор оптимального варианта под нужды бизнеса</li>
      <li>Рекомендации по резервному копированию и масштабированию</li>
      <li>Особенности развёртывания проектов на разных хостингах</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Типичные ошибки при выборе</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Переоплата за ресурсы, которые не используются</li>
      <li>Хостинг без автоматических бэкапов</li>
      <li>Невозможность масштабировать проект по мере роста</li>
      <li>Отсутствие SLA или поддержки на русском языке</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Что вы получите на выходе</h2>
    <p class="text-gray-700 mb-6">
      Вы получите понятную сравнительную таблицу и рекомендации по выбору облака под ваш проект. Мы поможем настроить инфраструктуру, которая будет надёжной, экономичной и масштабируемой.
    </p>

    <h2 class="text-lg font-semibold mb-2">2 лайфхака по облакам</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li><strong>Hetzner Storage Box:</strong> используйте как надёжное облако для резервов с доступом по SFTP/WebDAV.</li>
      <li><strong>Firebase Hosting:</strong> для frontend-приложений можно быстро настроить CI/CD через GitHub Actions бесплатно.</li>
    </ul>

    <p class="text-gray-700 italic">
      Не все облака одинаково полезны. Мы научим вас выбирать правильный инструмент — и использовать его на 100%.
    </p>
  </section>
</template>