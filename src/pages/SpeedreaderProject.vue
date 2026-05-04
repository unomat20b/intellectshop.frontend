<script setup>
import { useHead } from '@vueuse/head'
import Button from '@/components/ui/Button.vue'

/** Синхронизируйте с реальным ботом Mini App в Telegram. */
const telegramBotUrl = 'https://t.me/intellectshop_speedreeder_bot'
const telegramBotName = '@intellectshop_speedreeder_bot'

useHead({
  title: 'Speedreeder — скорочтение (RSVP) — IntellectShop',
  meta: [
    {
      name: 'description',
      content:
        'Бесплатное веб-приложение для скорочтения: слова по одному (RSVP), импорт TXT, EPUB и PDF, настройка темпа, Telegram Mini App.',
    },
  ],
})

const openWebApp = () => {
  window.open(
    '/projects/speedreader/?v=' + Date.now(),
    '_blank',
    'width=1200,height=800,scrollbars=yes,resizable=yes',
  )
}
</script>

<template>
  <section class="container mx-auto px-4 py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-4">Speedreeder — скорочтение (RSVP)</h1>
      <p class="text-lg text-gray-600">
        Читайте с меньшим движением глаз: одно слово на экране, опорная буква (ORP), комфортный темп и
        своя библиотека на устройстве.
      </p>
    </div>

    <div class="grid lg:grid-cols-3 gap-8 mb-8">
      <div class="lg:col-span-2">
        <div class="bg-white rounded-xl p-6 shadow-sm border">
          <h2 class="text-xl font-semibold mb-4">О приложении</h2>
          <p class="text-gray-700 mb-4">
            Speedreeder показывает текст в режиме
            <strong>RSVP</strong> (Rapid Serial Visual Presentation): слова сменяют друг друга в одном
            месте, с акцентом на «опорной» букве — как в известных техниках скорочтения. Так проще
            держать ритм и меньше скакать взглядом по строкам.
          </p>

          <h3 class="text-lg font-semibold mb-3 mt-6">Что умеет</h3>
          <div class="space-y-3 mb-4">
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-blue-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 class="font-semibold">Импорт книг</h4>
                <p class="text-gray-600 text-sm">
                  Файлы <strong>.txt</strong>, <strong>.epub</strong> и <strong>.pdf</strong> (текстовый слой).
                  Перед добавлением можно выбрать место старта по предпросмотру — удобно, если в начале
                  «мусор» после конвертации.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-blue-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 class="font-semibold">Пауза и обычное чтение</h4>
                <p class="text-gray-600 text-sm">
                  На паузе доступен полный текст, переход по оглавлению (главы в EPUB, страницы в PDF) и
                  выбор позиции курсором для продолжения RSVP.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-blue-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 class="font-semibold">Темп и тема</h4>
                <p class="text-gray-600 text-sm">
                  Слов в минуту, размер шрифма, цвет слова, тёмная тема; на мобильных — шаг скорости жестами
                  по краям экрана.
                </p>
              </div>
            </div>
          </div>

          <h3 class="text-lg font-semibold mb-3">Технологии</h3>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Flutter</span>
            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Web</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">PWA-ready</span>
            <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Telegram Mini App</span>
          </div>

          <p class="text-gray-600 text-sm">
            Тексты хранятся локально в браузере (или на устройстве в приложении); для очень больших книг
            возможны ограничения хранилища.
          </p>
        </div>
      </div>

      <div class="lg:col-span-1 flex flex-col gap-6">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
          <h3 class="text-lg font-semibold mb-4 text-gray-800">Открыть веб-приложение</h3>
          <p class="text-gray-600 mb-6 text-sm">
            Откроется в новом окне — удобно для чтения на широком экране.
          </p>
          <Button
            variant="primary"
            class="w-full flex items-center justify-center gap-2 py-3"
            @click="openWebApp"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Запустить Speedreeder
          </Button>
        </div>

        <div class="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 border border-green-100">
          <h3 class="text-lg font-semibold mb-4 text-gray-800">Telegram Mini App</h3>
          <p class="text-gray-600 mb-6 text-sm">
            То же приложение внутри Telegram: откройте бота и запустите мини-приложение из меню или кнопки.
          </p>
          <Button
            variant="primary"
            as="a"
            :href="telegramBotUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full flex items-center justify-center gap-2 py-3"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" />
              <path
                d="M8 12l2 2l4-4"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Открыть бота в Telegram
          </Button>
          <div class="mt-2 text-xs text-gray-500 text-center">
            {{ telegramBotName }}
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl p-6 shadow-sm border mb-8">
      <h2 class="text-xl font-semibold mb-4">Как начать</h2>
      <div class="space-y-4">
        <div class="flex gap-4">
          <div class="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
            1
          </div>
          <div>
            <h3 class="font-semibold mb-1">Веб или Telegram</h3>
            <p class="text-gray-600">
              Нажмите «Запустить Speedreeder» выше или перейдите в бота и откройте Mini App.
            </p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
            2
          </div>
          <div>
            <h3 class="font-semibold mb-1">Импорт</h3>
            <p class="text-gray-600">
              Добавьте .txt, .epub или .pdf; при необходимости укажите место начала по предпросмотру.
            </p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
            3
          </div>
          <div>
            <h3 class="font-semibold mb-1">Темп и чтение</h3>
            <p class="text-gray-600">
              Подберите слова в минуту, при паузе читайте полный текст и оглавление, затем снова запускайте RSVP.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-blue-50 rounded-xl p-4 border border-blue-100">
      <p class="text-blue-900 text-sm">
        Проект
        <a href="https://github.com/unomat20b/speedreeder" class="underline font-medium" target="_blank" rel="noopener noreferrer"
          >IntellectShop / Speedreeder</a
        >. Обратная связь доступна из меню приложения.
      </p>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
