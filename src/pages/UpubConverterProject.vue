<script setup>
import { useHead } from '@vueuse/head'
import Button from '@/components/ui/Button.vue'

useHead({
  title: 'EPUB Converter — восстановление EPUB после Apple Books — IntellectShop',
  meta: [
    {
      name: 'description',
      content:
        'Бесплатный клиентский конвертер: переупаковка папок .epub из Apple Books/iBooks в стандартный EPUB ZIP прямо в браузере.',
    },
  ],
})

const openConverterApp = () => {
  window.open(
    '/projects/upubconverter/?v=' + Date.now(),
    '_blank',
    'width=1200,height=800,scrollbars=yes,resizable=yes',
  )
}
</script>

<template>
  <section class="container mx-auto px-4 py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-4">EPUB Converter — восстановление EPUB после Apple Books</h1>
      <p class="text-lg text-gray-600">
        Инструмент для случаев, когда Apple Books/iBooks сохраняет книгу не одним файлом, а папкой
        <strong>.epub</strong>, которую не открывают обычные читалки.
      </p>
    </div>

    <div class="grid lg:grid-cols-3 gap-8 mb-8">
      <div class="lg:col-span-2">
        <div class="bg-white rounded-xl p-6 shadow-sm border">
          <h2 class="text-xl font-semibold mb-4">Что делает приложение</h2>
          <p class="text-gray-700 mb-4">
            EPUB технически является ZIP-архивом со строгой структурой. Apple Books иногда хранит его как
            распакованный package-контейнер. Конвертер собирает такой контейнер обратно в валидный
            <strong>.epub</strong>: кладёт <code>mimetype</code> первым файлом без сжатия и упаковывает
            остальные файлы внутрь архива.
          </p>

          <h3 class="text-lg font-semibold mb-3 mt-6">Возможности</h3>
          <div class="space-y-3 mb-4">
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-blue-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 class="font-semibold">Папки .epub из Apple Books</h4>
                <p class="text-gray-600 text-sm">
                  Выберите package-папку <strong>.epub</strong> и получите обычный EPUB-файл для других читалок.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-blue-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 class="font-semibold">Несколько файлов за раз</h4>
                <p class="text-gray-600 text-sm">
                  Можно добавить несколько EPUB/ZIP-файлов, запустить конвертацию и скачать результат для каждого.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-blue-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <div>
                <h4 class="font-semibold">Без загрузки на сервер</h4>
                <p class="text-gray-600 text-sm">
                  Обработка идёт на стороне клиента в браузере. Файлы не отправляются на сервер IntellectShop.
                </p>
              </div>
            </div>
          </div>

          <h3 class="text-lg font-semibold mb-3">Технологии</h3>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Flutter</span>
            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Web</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Client-side</span>
            <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">EPUB ZIP</span>
          </div>
        </div>
      </div>

      <div class="lg:col-span-1">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
          <h3 class="text-lg font-semibold mb-4 text-gray-800">Запустить конвертер</h3>
          <p class="text-gray-600 mb-6 text-sm">
            Откроется Flutter Web-приложение по адресу <code>/projects/upubconverter/</code>.
          </p>
          <Button
            variant="primary"
            class="w-full flex items-center justify-center gap-2 py-3"
            @click="openConverterApp"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Открыть EPUB Converter
          </Button>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl p-6 shadow-sm border">
      <h2 class="text-xl font-semibold mb-4">Как использовать</h2>
      <div class="space-y-4">
        <div class="flex gap-4">
          <div class="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">1</div>
          <div>
            <h3 class="font-semibold mb-1">Выберите источник</h3>
            <p class="text-gray-600">Для iBooks-package используйте выбор папки .epub, для обычных файлов — выбор EPUB-файлов.</p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">2</div>
          <div>
            <h3 class="font-semibold mb-1">Нажмите «Конвертировать»</h3>
            <p class="text-gray-600">Приложение покажет прогресс и проверит базовую EPUB-структуру.</p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">3</div>
          <div>
            <h3 class="font-semibold mb-1">Скачайте результат</h3>
            <p class="text-gray-600">Полученный файл можно открыть в Speedreeder, Apple Books или другой EPUB-читалке.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
