<script setup>
import { ref, computed } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Сравнение нейросетей — IntellectShop',
  meta: [
    {
      name: 'description',
      content: 'Актуальное сравнение AI-сервисов для бизнеса и личных задач: доступность, бесплатные и платные режимы, Telegram, код, изображения, видео и музыка.'
    }
  ]
})

const filters = [
  { key: 'vpn', label: 'Чаще без VPN' },
  { key: 'telegram', label: 'Telegram' },
  { key: 'appstore', label: 'App Store' },
  { key: 'free', label: 'Бесплатный режим' },
  { key: 'draw', label: 'Генерация изображений' },
  { key: 'video', label: 'Генерация видео' },
  { key: 'code', label: 'Код' },
  { key: 'music', label: 'Музыка' },
  { key: 'easy', label: 'Просто стартовать' },
]

const selectedFilters = ref([])

const aiList = [
  {
    name: 'ChatGPT',
    icon: '🤖',
    supports: { vpn: false, telegram: false, appstore: true, free: true, draw: true, video: false, code: true, music: false, hard: false },
    details: [
      {
        title: 'Доступность',
        value: 'Веб и приложение доступны, но в некоторых регионах (включая РФ) может потребоваться VPN. Официальный сервис: <a href="https://chatgpt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">chatgpt.com</a>.'
      },
      {
        title: 'Бесплатный режим',
        value: 'Есть бесплатный план с ограничениями по лимитам и инструментам.'
      },
      {
        title: 'Платный режим',
        value: 'Plus — $20/мес по данным официальной страницы OpenAI Pricing (проверено 15 мая 2026).' 
      },
      {
        title: 'Сильные стороны',
        value: 'Универсальный помощник: тексты, код, файлы, изображения и рабочие сценарии под бизнес-задачи.'
      },
      {
        title: 'Нюансы',
        value: 'Лимиты и состав функций зависят от тарифа и региона; модели внутри продукта обновляются.'
      }
    ]
  },
  {
    name: 'Claude',
    icon: '🌼',
    supports: { vpn: false, telegram: false, appstore: true, free: true, draw: false, video: false, code: true, music: false, hard: false },
    details: [
      {
        title: 'Доступность',
        value: 'Web и мобильные приложения, но из РФ часто нужен VPN. Официальный сервис: <a href="https://claude.ai" target="_blank" rel="noopener" class="text-blue-600 hover:underline">claude.ai</a>.'
      },
      {
        title: 'Бесплатный режим',
        value: 'Есть бесплатный режим для повседневных задач и тестирования.'
      },
      {
        title: 'Платный режим',
        value: 'Pro — $20/мес при помесячной оплате (по данным anthropic.com/pricing, проверено 15 мая 2026).' 
      },
      {
        title: 'Сильные стороны',
        value: 'Сильная работа с длинными документами, аккуратное письмо, уверенный код-ревью стиль.'
      },
      {
        title: 'Нюансы',
        value: 'Меньше акцента на мультимедийную генерацию, чем у специализированных инструментов.'
      }
    ]
  },
  {
    name: 'Gemini',
    icon: '🌐',
    supports: { vpn: false, telegram: false, appstore: true, free: true, draw: true, video: false, code: true, music: false, hard: false },
    details: [
      {
        title: 'Доступность',
        value: 'Веб, мобильное приложение и интеграции Google Workspace. В ряде регионов может требоваться VPN. Официальный сервис: <a href="https://gemini.google.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">gemini.google.com</a>.'
      },
      {
        title: 'Бесплатный режим',
        value: 'Есть бесплатный доступ с лимитами на расширенные функции.'
      },
      {
        title: 'Платный режим',
        value: 'Расширенные возможности доступны через Google AI-планы и корпоративные тарифы.'
      },
      {
        title: 'Сильные стороны',
        value: 'Удобен, если команда уже работает в Google: документы, почта, таблицы, заметки.'
      },
      {
        title: 'Нюансы',
        value: 'Функциональность может отличаться по странам и по типам Google-аккаунтов.'
      }
    ]
  },
  {
    name: 'Grok',
    icon: '🚀',
    supports: { vpn: false, telegram: false, appstore: true, free: true, draw: true, video: false, code: true, music: false, hard: false },
    details: [
      {
        title: 'Доступность',
        value: 'Работает через приложение и экосистему X/xAI. В некоторых регионах может требоваться VPN. Официальный сайт: <a href="https://x.ai" target="_blank" rel="noopener" class="text-blue-600 hover:underline">x.ai</a>.'
      },
      {
        title: 'Бесплатный режим',
        value: 'Есть ограниченный бесплатный доступ в зависимости от региона и платформы.'
      },
      {
        title: 'Платный режим',
        value: 'Расширенный доступ обычно привязан к подписке X Premium и тарифам xAI.'
      },
      {
        title: 'Сильные стороны',
        value: 'Быстрые ответы, техничный стиль, хорошие результаты для кода и коротких аналитических задач.'
      },
      {
        title: 'Нюансы',
        value: 'Условия доступа и функциональность часто меняются вместе с экосистемой X.'
      }
    ]
  },
  {
    name: 'Perplexity',
    icon: '🔎',
    supports: { vpn: true, telegram: false, appstore: true, free: true, draw: true, video: true, code: false, music: false, hard: false },
    details: [
      {
        title: 'Доступность',
        value: 'Веб и мобильные приложения, обычно доступен без VPN. Официальный сайт: <a href="https://www.perplexity.ai" target="_blank" rel="noopener" class="text-blue-600 hover:underline">perplexity.ai</a>.'
      },
      {
        title: 'Бесплатный режим',
        value: 'Есть базовый режим поиска и ответов с источниками.'
      },
      {
        title: 'Платный режим',
        value: 'Pro-режим открывает более сильные модели, расширенные исследования и дополнительные режимы.'
      },
      {
        title: 'Сильные стороны',
        value: 'Один из лучших вариантов для ресерча, проверки фактов и подготовки быстрых обзоров с цитированием.'
      },
      {
        title: 'Нюансы',
        value: 'Для глубокой генерации контента и сложной автоматизации лучше комбинировать с другими LLM.'
      }
    ]
  },
  {
    name: 'DeepSeek',
    icon: '🧮',
    supports: { vpn: true, telegram: false, appstore: true, free: true, draw: false, video: false, code: true, music: false, hard: false },
    details: [
      {
        title: 'Доступность',
        value: 'Есть web/app и API. Официальный сайт: <a href="https://www.deepseek.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">deepseek.com</a>.'
      },
      {
        title: 'Бесплатный режим',
        value: 'Веб-версия обычно доступна бесплатно для большинства пользовательских сценариев.'
      },
      {
        title: 'Платный режим',
        value: 'API-тарифы конкурентные, удобно для интеграций и экономичных backend-сценариев.'
      },
      {
        title: 'Сильные стороны',
        value: 'Код, математика и рассуждения при низкой стоимости API.'
      },
      {
        title: 'Нюансы',
        value: 'Стабильность и поведение могут заметно меняться между версиями моделей.'
      }
    ]
  },
  {
    name: 'GigaChat',
    icon: '💚',
    supports: { vpn: true, telegram: true, appstore: false, free: true, draw: true, video: false, code: true, music: false, hard: false },
    details: [
      {
        title: 'Доступность',
        value: 'Хорошая доступность в РФ, есть web и официальный Telegram-бот. Официальный сайт: <a href="https://giga.chat" target="_blank" rel="noopener" class="text-blue-600 hover:underline">giga.chat</a>.'
      },
      {
        title: 'Бесплатный режим',
        value: 'Есть бесплатное использование для частых пользовательских задач.'
      },
      {
        title: 'Платный режим',
        value: 'Для API и коммерческого использования действуют отдельные тарифы и пакеты от Сбера.'
      },
      {
        title: 'Сильные стороны',
        value: 'Русскоязычные сценарии, интеграция в локальную экосистему, удобный старт для клиентов без VPN.'
      },
      {
        title: 'Нюансы',
        value: 'Для узких международных задач и редких нишевых инструментов может потребоваться связка с другими сервисами.'
      }
    ]
  },
  {
    name: 'YandexGPT',
    icon: '🟡',
    supports: { vpn: true, telegram: false, appstore: true, free: true, draw: false, video: false, code: false, music: false, hard: false },
    details: [
      {
        title: 'Доступность',
        value: 'Доступен через сервисы Яндекса и Yandex Cloud. Подходит для локального рынка. Официальный раздел: <a href="https://yandex.cloud/en/docs/yandexgpt" target="_blank" rel="noopener" class="text-blue-600 hover:underline">YandexGPT Docs</a>.'
      },
      {
        title: 'Бесплатный режим',
        value: 'Есть пользовательские сценарии в экосистеме Яндекса и тестовые режимы в облаке.'
      },
      {
        title: 'Платный режим',
        value: 'Для API и прод-сценариев используются тарифы Yandex Cloud по токенам и запросам.'
      },
      {
        title: 'Сильные стороны',
        value: 'Инфраструктурная совместимость с локальными сервисами и хороший русский язык.'
      },
      {
        title: 'Нюансы',
        value: 'Сильнее в прикладных локальных задачах, чем в универсальной мультимедийной генерации.'
      }
    ]
  },
  {
    name: 'Suno',
    icon: '🎵',
    supports: { vpn: true, telegram: false, appstore: true, free: true, draw: false, video: false, code: false, music: true, hard: false },
    details: [
      {
        title: 'Доступность',
        value: 'Веб и мобильное приложение. Официальный сайт: <a href="https://suno.com/pricing" target="_blank" rel="noopener" class="text-blue-600 hover:underline">suno.com/pricing</a>.'
      },
      {
        title: 'Бесплатный режим',
        value: 'Free план: ежедневные кредиты, подходит для тестирования идей.'
      },
      {
        title: 'Платный режим',
        value: 'Pro от $8/мес при годовой оплате (по официальной странице pricing, проверено 15 мая 2026).' 
      },
      {
        title: 'Сильные стороны',
        value: 'Быстрая генерация песен и музыкальных концептов даже без музыкального бэкграунда.'
      },
      {
        title: 'Нюансы',
        value: 'Условия коммерческого использования зависят от тарифа и даты создания трека.'
      }
    ]
  },
  {
    name: 'Midjourney',
    icon: '🎨',
    supports: { vpn: false, telegram: false, appstore: false, free: false, draw: true, video: true, code: false, music: false, hard: true },
    details: [
      {
        title: 'Доступность',
        value: 'Основная работа через web/Discord. В ряде регионов нужен VPN. Официальный docs-раздел: <a href="https://docs.midjourney.com/docs/plans" target="_blank" rel="noopener" class="text-blue-600 hover:underline">Midjourney Plans</a>.'
      },
      {
        title: 'Бесплатный режим',
        value: 'Полноценного бесплатного плана нет: сервис работает по подписке.'
      },
      {
        title: 'Платный режим',
        value: 'Базовый план от $10/мес (по официальной таблице планов, проверено 15 мая 2026).' 
      },
      {
        title: 'Сильные стороны',
        value: 'Высокое качество художественной генерации, много инструментов для стилистических итераций.'
      },
      {
        title: 'Нюансы',
        value: 'Порог входа выше: требуется освоить промтинг и рабочий процесс внутри сервиса.'
      }
    ]
  },
  {
    name: 'Stable Diffusion',
    icon: '🖼️',
    supports: { vpn: true, telegram: true, appstore: false, free: true, draw: true, video: false, code: false, music: false, hard: true },
    details: [
      {
        title: 'Доступность',
        value: 'Семейство open-weight моделей с множеством UI и хостингов. Можно запускать локально или в облаке.'
      },
      {
        title: 'Бесплатный режим',
        value: 'Есть бесплатные варианты запуска (локально/через community-инструменты).' 
      },
      {
        title: 'Платный режим',
        value: 'Стоимость зависит от выбранного сервиса, GPU и объема генераций.'
      },
      {
        title: 'Сильные стороны',
        value: 'Гибкость, кастомизация и контроль пайплайна под свои задачи и стили.'
      },
      {
        title: 'Нюансы',
        value: 'Нужна техническая база: выбор моделей, настройка workflow, контроль качества выходов.'
      }
    ]
  },
  {
    name: 'Runway',
    icon: '🎬',
    supports: { vpn: false, telegram: false, appstore: true, free: true, draw: true, video: true, code: false, music: false, hard: false },
    details: [
      {
        title: 'Доступность',
        value: 'Веб и мобильные приложения, иногда доступ ограничен регионом. Официальный ресурс: <a href="https://runwayml.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">runwayml.com</a>.'
      },
      {
        title: 'Бесплатный режим',
        value: 'Есть стартовый режим и trial-кредиты для тестирования функций.'
      },
      {
        title: 'Платный режим',
        value: 'Подписки с кредитной моделью: чем сложнее видео и рендер, тем выше расход кредитов.'
      },
      {
        title: 'Сильные стороны',
        value: 'Один из самых удобных сервисов для генерации и монтажа AI-видео в продуктовой команде.'
      },
      {
        title: 'Нюансы',
        value: 'Видео-задачи быстро расходуют кредиты, поэтому важен бюджетный контроль.'
      }
    ]
  },
]

const selectedIndex = ref(0)

function toggleFilter(key) {
  if (selectedFilters.value.includes(key)) {
    selectedFilters.value = selectedFilters.value.filter(f => f !== key)
  } else {
    selectedFilters.value.push(key)
  }
}

function isHighlighted(ai) {
  if (!selectedFilters.value.length) return false
  return selectedFilters.value.every(f => ai.supports && ai.supports[f])
}

const filteredAiList = computed(() => {
  if (!selectedFilters.value.length) return aiList
  const filtersWithoutEasy = selectedFilters.value.filter(f => f !== 'easy')
  return aiList.filter(ai => {
    if (selectedFilters.value.includes('easy') && ai.supports && ai.supports.hard) return false
    return filtersWithoutEasy.every(f => ai.supports && ai.supports[f])
  })
})
</script>

<template>
  <section class="container mx-auto px-4 py-8 from-blue-50 to-white">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-4">Сравнение популярных ИИ-сервисов</h1>
      <p class="text-lg text-gray-600">Интерактивный гид по выбору инструмента под задачу: ресерч, код, контент, изображения, видео и музыку.</p>
    </div>

    <div class="flex flex-wrap gap-2 mb-6">
      <button
        v-for="filter in filters"
        :key="filter.key"
        @click="toggleFilter(filter.key)"
        class="px-3 py-1 rounded-full border text-sm font-medium transition select-none"
        :class="selectedFilters.includes(filter.key) ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-gray-300 hover:bg-blue-50'"
        type="button"
      >
        {{ filter.label }}
      </button>
    </div>

    <div class="mb-8">
      <div class="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-4 overflow-x-auto hide-scrollbar w-full">
        <div
          v-if="selectedFilters.length"
          class="grid grid-flow-col auto-cols-fr gap-2 sm:gap-4 min-w-full"
        >
          <div
            v-for="(ai, idx) in filteredAiList"
            :key="ai.name"
            @click="selectedIndex = aiList.indexOf(ai)"
            class="flex flex-col items-center justify-center cursor-pointer bg-white border rounded-xl p-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 select-none ai-btn w-full min-w-0"
            :class="selectedIndex === aiList.indexOf(ai) ? 'ring-2 ring-blue-300 border-blue-400' : 'border-gray-200'"
          >
            <div class="text-xl sm:text-2xl md:text-3xl mb-1">{{ ai.icon }}</div>
            <div class="font-semibold text-[10px] sm:text-xs md:text-sm text-center leading-tight">{{ ai.name }}</div>
          </div>
        </div>
        <div
          v-else
          class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-4"
        >
          <div
            v-for="(ai, idx) in aiList"
            :key="ai.name"
            @click="selectedIndex = idx"
            class="flex flex-col items-center justify-center cursor-pointer bg-white border rounded-xl p-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 select-none ai-btn w-full min-w-0"
            :class="selectedIndex === idx ? 'ring-2 ring-blue-300 border-blue-400' : 'border-gray-200'"
          >
            <div class="text-xl sm:text-2xl md:text-3xl mb-1">{{ ai.icon }}</div>
            <div class="font-semibold text-[10px] sm:text-xs md:text-sm text-center leading-tight">{{ ai.name }}</div>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <div
        v-if="aiList[selectedIndex]"
        :key="aiList[selectedIndex].name"
        class="bg-white rounded-xl p-6 shadow-sm border mb-8 animate-fade-in transition-transform duration-200"
      >
        <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
          <span class="text-2xl">{{ aiList[selectedIndex].icon }}</span>
          {{ aiList[selectedIndex].name }}
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="(detail, i) in aiList[selectedIndex].details"
            :key="detail.title"
            :class="i % 2 === 0 ? 'bg-white' : 'bg-blue-50'"
            class="rounded-xl p-4 shadow-sm transition-transform duration-200"
          >
            <h3 class="font-semibold mb-1 text-blue-600">{{ detail.title }}</h3>
            <p class="text-gray-700 whitespace-pre-line text-sm" v-html="detail.value"></p>
          </div>
        </div>
      </div>
    </transition>

    <div class="bg-white rounded-xl p-6 shadow-sm border mb-8 transition-transform duration-200">
      <h2 class="text-xl font-semibold mb-4">🗺️ Как читать сравнение</h2>
      <ol class="list-decimal list-inside text-gray-700 space-y-2">
        <li>Сначала определите задачу: поиск информации, код, изображения, видео или музыка.</li>
        <li>Выберите требования по доступности: нужен ли сервис без VPN и через Telegram.</li>
        <li>Сверьте стартовый бюджет: бесплатный режим, лимиты и платные расширения.</li>
        <li>Проведите короткий тест на своем реальном кейсе перед финальным выбором.</li>
      </ol>
    </div>
    <div class="text-xs text-gray-400 text-center mt-8">Данные актуализированы 15 мая 2026. Условия и тарифы сервисов могут меняться; перед оплатой проверяйте официальные страницы.</div>
  </section>
</template>

<style scoped>
.container { max-width: 1200px; }
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
.animate-fade-in { animation: fadeIn 0.4s; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
.ai-btn {
  padding: 0.5rem 0.5rem;
  transition: padding 0.2s;
}
@media (max-width: 640px) {
  .ai-btn {
    padding: 0.2rem 0.2rem;
  }
}
</style>
