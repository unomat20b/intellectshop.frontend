<script setup>
import { useHead } from '@vueuse/head'
import { RouterLink } from 'vue-router'

useHead({
  title: 'AI-курсы и автоматизация – IntellectShop',
  meta: [
    {
      name: 'description',
      content:
        'Курсы и внедрение AI: аудит, агенты, интеграции, безопасность, персональные ассистенты и автоматизация рутинных задач.',
    },
  ],
})

// AI для бизнеса
const audit = [
  { to: '/services/ai/business/process-analysis', title: 'Анализ бизнес-процессов' },
  { to: '/services/ai/business/use-cases', title: 'Выбор точек применения AI' },
  { to: '/services/ai/business/model-selection', title: 'Подбор моделей: GPT, Claude, LLM' }
]

const agents = [
  { to: '/services/ai/business/custom-agents', title: 'Создание кастомного ассистента' },
  { to: '/services/ai/business/intake-handling', title: 'Обработка email, форм, чатов' },
  { to: '/services/ai/business/automation-requests', title: 'Автоответы на заявки и письма' },
  { to: '/services/ai/business/data-integration', title: 'Интеграция с CRM, Notion, Airtable' }
]

const rag = [
  { to: '/services/ai/business/rag-setup', title: 'Настройка RAG: ответы по вашим файлам' },
  { to: '/services/ai/business/file-sources', title: 'Подключение Google Drive, PDF, Excel' },
  { to: '/services/ai/business/chatbot-deployment', title: 'Использование в чате или Telegram' }
]

const integration = [
  { to: '/services/ai/business/n8n-zapier', title: 'Интеграция с n8n / Make / Zapier' },
  { to: '/services/ai/business/crm-workflows', title: 'AI + Bitrix24, 1С, amoCRM, Airtable' },
  { to: '/services/ai/business/auto-workflows', title: 'Сценарии: письмо → ответ → отчёт' }
]

const voice = [
  { to: '/services/ai/business/speech-recognition', title: 'Распознавание речи: Whisper / Vosk' },
  { to: '/services/ai/business/voice-generation', title: 'Генерация голоса: ElevenLabs / Bark' },
  { to: '/services/ai/business/phone-bots', title: 'Голосовые ассистенты на телефоне' }
]

const security = [
  { to: '/services/ai/business/local-llm', title: 'Запуск локальных LLM (LLaMA, Mistral)' },
  { to: '/services/ai/business/api-privacy', title: 'Безопасность при работе с API' },
  { to: '/services/ai/business/staff-training', title: 'Ограничение и обучение сотрудников' }
]

const employeeTraining = [
  { to: '/services/ai/business/gpt-intro', title: 'Вводное обучение по GPT' },
  { to: '/services/ai/business/workspace-integration', title: 'Интеграции с Workspace, CRM' },
  { to: '/services/ai/business/internal-bots', title: 'Чат-ассистенты по стандартам компании' }
]

// AI для персонального использования
const personal = {
  tools: [
    { to: '/services/ai/personal/goal-based-selection', title: 'Подбор нейросетей под задачи' },
    { to: '/services/ai/personal/creative-use', title: 'Тексты, видео, изображения, голос' }
  ],
  setup: [
    { to: '/services/ai/personal/agent-ui', title: 'Панель: Telegram-бот, Web, Chrome' },
    { to: '/services/ai/personal/cloud-agent', title: 'Облачный агент 24/7' }
  ],
  assistant: [
    { to: '/services/ai/personal/custom-memory', title: 'Ассистент с памятью и стилем' },
    { to: '/services/ai/personal/materials', title: 'Импорт писем, статей, заметок' }
  ],
  docs: [
    { to: '/services/ai/personal/pdf-analysis', title: 'Авторазбор PDF, Word, Google Docs' },
    { to: '/services/ai/personal/doc-generation', title: 'Генерация резюме и ответов по шаблону' }
  ],
  creativity: [
    { to: '/services/ai/personal/midjourney-prompts', title: 'Промты для DALL·E / Midjourney' },
    { to: '/services/ai/personal/youtube-generation', title: 'Голос + видео для Reels и YouTube' },
    { to: '/services/ai/personal/idea-gen', title: 'Идеи, сценарии, презентации' }
  ],
  automation: [
    { to: '/services/ai/personal/voice-to-text', title: 'Голос → Текст' },
    { to: '/services/ai/personal/email-helper', title: 'Генерация email, описаний, инструкций' },
    { to: '/services/ai/personal/universal-agent', title: 'Редактор, переводчик, корректор' }
  ]
}
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-6">AI и автоматизация</h1>

    <p class="text-gray-700 mb-10">
      Тренинги и внедрение нейросетей для бизнеса и личных задач. От аудита процессов до генерации и голосовых агентов.
    </p>

    <div class="space-y-10">
      <!-- Бизнес -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">🏢 AI для бизнеса</h2>

        <template v-for="(group, index) in [
          { title: '🔍 Аудит и стратегия', data: audit },
          { title: '🛠️ Внедрение AI-агентов', data: agents },
          { title: '📂 База знаний и RAG', data: rag },
          { title: '⚙️ Интеграции и автоматизация', data: integration },
          { title: '🎙️ Голосовые решения', data: voice },
          { title: '🔐 Безопасность и контроль', data: security },
          { title: '📚 Обучение сотрудников', data: employeeTraining }
        ]" :key="index">
          <h3 class="text-xl font-semibold mb-2 mt-6">{{ group.title }}</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <RouterLink
              v-for="item in group.data"
              :key="item.to"
              :to="item.to"
              class="block bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
            >
              <h4 class="font-medium">{{ item.title }}</h4>
            </RouterLink>
          </div>
        </template>
      </div>

      <!-- Персональное -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">👤 AI для личного использования</h2>

        <template v-for="(group, index) in [
          { title: '💡 Подбор инструментов', data: personal.tools },
          { title: '🧩 Установка и запуск', data: personal.setup },
          { title: '🧠 Индивидуальный ассистент', data: personal.assistant },
          { title: '🗂️ Работа с документами', data: personal.docs },
          { title: '🎨 Креатив и генерация', data: personal.creativity },
          { title: '🔄 Автоматизация рутины', data: personal.automation }
        ]" :key="'p' + index">
          <h3 class="text-xl font-semibold mb-2 mt-6">{{ group.title }}</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <RouterLink
              v-for="item in group.data"
              :key="item.to"
              :to="item.to"
              class="block bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
            >
              <h4 class="font-medium">{{ item.title }}</h4>
            </RouterLink>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>