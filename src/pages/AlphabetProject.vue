<script setup>
import { useHead } from '@vueuse/head'
import Button from '@/components/ui/Button.vue'

useHead({
  title: 'Alfabet — Изучение алфавитов — IntellectShop',
  meta: [
    { name: 'description', content: 'Образовательное приложение для изучения алфавитов через контекстное чтение. Изучайте грузинский, хинди и другие алфавиты естественным способом.' }
  ]
})

const openAlphabetApp = () => {
  // Открываем Flutter приложение в новом окне
  window.open('/alphabet/', '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes')
}
</script>

<template>
  <section class="container mx-auto px-4 py-8">
    <!-- Заголовок проекта -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-4">Alfabet — приложение для изучения алфавитов</h1>
      <p class="text-lg text-gray-600">Образовательное приложение, которое превращает изучение незнакомых алфавитов в увлекательный и естественный процесс</p>
    </div>

    <!-- Основная информация о проекте -->
    <div class="grid lg:grid-cols-3 gap-8 mb-8">
      <!-- Описание проекта -->
      <div class="lg:col-span-2">
        <div class="bg-white rounded-xl p-6 shadow-sm border">
          <h2 class="text-xl font-semibold mb-4">Основная концепция</h2>
          <p class="text-gray-700 mb-4">
            Вместо механического заучивания букв, пользователи погружаются в чтение знакомых текстов, 
            постепенно заменяя символы на буквы изучаемого алфавита. Это основано на принципах 
            контекстного обучения и использует знакомые тексты для снижения когнитивной нагрузки.
          </p>
          
          <h3 class="text-lg font-semibold mb-3 mt-6">Ключевые преимущества</h3>
          <div class="space-y-3 mb-4">
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <h4 class="font-semibold">Контекстное обучение</h4>
                <p class="text-gray-600 text-sm">Изучение алфавитов через чтение реальных текстов с запоминанием букв в естественном контексте</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <h4 class="font-semibold">Научно обоснованный подход</h4>
                <p class="text-gray-600 text-sm">Основан на принципах контекстного обучения с постепенным погружением в новый алфавит</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <h4 class="font-semibold">Идеально для семей</h4>
                <p class="text-gray-600 text-sm">Чтение сказок детям с параллельным изучением алфавита, совместное обучение родителей и детей</p>
              </div>
            </div>
          </div>

          <h3 class="text-lg font-semibold mb-3">Технологии</h3>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Flutter</span>
            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Dart</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Web</span>
            <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Telegram Mini App</span>
          </div>
        </div>
      </div>

      <!-- Кнопка запуска -->
      <div class="lg:col-span-1">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
          <h3 class="text-lg font-semibold mb-4 text-gray-800">Запустить приложение</h3>
          <p class="text-gray-600 mb-6 text-sm">
            Откроется в новом окне для лучшего пользовательского опыта
          </p>
          
          <Button 
            variant="primary" 
            @click="openAlphabetApp"
            class="w-full flex items-center justify-center gap-2 py-3"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            Запустить Alfabet
          </Button>
        </div>
      </div>
    </div>

    <!-- Функциональные возможности -->
    <div class="bg-white rounded-xl p-6 shadow-sm border mb-8">
      <h2 class="text-xl font-semibold mb-4">Функциональные возможности</h2>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h3 class="font-semibold mb-3 text-blue-600">🌍 Мультиязычность</h3>
          <ul class="text-gray-600 space-y-2 text-sm">
            <li>• Поддержка русского и английского интерфейса</li>
            <li>• Легкое добавление новых языков</li>
            <li>• Доступность для международной аудитории</li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-3 text-blue-600">📚 Библиотека контента</h3>
          <ul class="text-gray-600 space-y-2 text-sm">
            <li>• Встроенные народные сказки</li>
            <li>• Возможность загрузки собственных текстов</li>
            <li>• Работа с любыми текстами</li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-3 text-blue-600">⌨️ Интуитивная клавиатура</h3>
          <ul class="text-gray-600 space-y-2 text-sm">
            <li>• Визуальная клавиатура с соответствиями букв</li>
            <li>• Группировка похожих символов</li>
            <li>• Интерактивный выбор вариантов написания</li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-3 text-blue-600">📱 Telegram Mini App</h3>
          <ul class="text-gray-600 space-y-2 text-sm">
            <li>• Интеграция с популярной платформой</li>
            <li>• Доступность без установки дополнительных приложений</li>
            <li>• Социальное обучение через мессенджер</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Целевая аудитория -->
    <div class="bg-white rounded-xl p-6 shadow-sm border mb-8">
      <h2 class="text-xl font-semibold mb-4">Целевая аудитория</h2>
      
      <div class="grid md:grid-cols-3 gap-6">
        <div class="text-center p-4 bg-blue-50 rounded-lg">
          <h3 class="font-semibold mb-2">👨‍🎓 Студенты и изучающие языки</h3>
          <p class="text-gray-600 text-sm">Изучающие грузинский, хинди и другие алфавиты. Студенты лингвистических факультетов и любители языков.</p>
        </div>

        <div class="text-center p-4 bg-green-50 rounded-lg">
          <h3 class="font-semibold mb-2">👨‍👩‍👧‍👦 Семейная аудитория</h3>
          <p class="text-gray-600 text-sm">Родители, читающие детям сказки. Семьи, изучающие родственные языки и многоязычные семьи.</p>
        </div>

        <div class="text-center p-4 bg-purple-50 rounded-lg">
          <h3 class="font-semibold mb-2">🌍 Культурные энтузиасты</h3>
          <p class="text-gray-600 text-sm">Путешественники, изучающие местные алфавиты. Исследователи различных культур и любители каллиграфии.</p>
        </div>
      </div>
    </div>

    <!-- Инструкция по применению -->
    <div class="bg-white rounded-xl p-6 shadow-sm border">
      <h2 class="text-xl font-semibold mb-4">Как использовать Alfabet</h2>
      
      <div class="space-y-4">
        <div class="flex gap-4">
          <div class="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">1</div>
          <div>
            <h3 class="font-semibold mb-1">Запуск приложения</h3>
            <p class="text-gray-600">Нажмите кнопку "Запустить Alfabet" выше. Приложение откроется в новом окне браузера.</p>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">2</div>
          <div>
            <h3 class="font-semibold mb-1">Выбор алфавита</h3>
            <p class="text-gray-600">Выберите алфавит, который хотите изучить (грузинский, хинди и другие).</p>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">3</div>
          <div>
            <h3 class="font-semibold mb-1">Чтение текста</h3>
            <p class="text-gray-600">Читайте знакомые тексты (сказки), где символы постепенно заменяются на буквы изучаемого алфавита.</p>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">4</div>
          <div>
            <h3 class="font-semibold mb-1">Использование клавиатуры</h3>
            <p class="text-gray-600">Используйте визуальную клавиатуру для понимания соответствий между буквами и их произношением.</p>
          </div>
        </div>
      </div>

      <div class="mt-6 p-4 bg-blue-50 rounded-lg">
        <p class="text-blue-800 text-sm italic">
          <strong>Образовательная ценность:</strong> Alfabet — это не просто приложение для изучения алфавитов, 
          это инструмент культурного обмена, который делает изучение письменности увлекательным, 
          естественным и доступным для всех возрастов.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container { max-width: 1200px; }
</style> 