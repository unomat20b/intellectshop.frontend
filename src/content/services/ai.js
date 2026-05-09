export const aiServiceContent = {
  meta: {
    title: 'AI-курсы и автоматизация – IntellectShop',
    description:
      'Курсы и внедрение AI: аудит, агенты, интеграции, безопасность, персональные ассистенты и автоматизация рутинных задач.',
  },
  page: {
    title: 'AI и автоматизация',
    intro:
      'Тренинги и внедрение нейросетей для бизнеса и личных задач. От аудита процессов до генерации и голосовых агентов.',
  },
  sections: [
    {
      title: '🏢 AI для бизнеса',
      groups: [
        {
          title: '🔍 Аудит и стратегия',
          items: [
            { to: '/services/ai/business/process-analysis', title: 'Анализ бизнес-процессов' },
            { to: '/services/ai/business/use-cases', title: 'Выбор точек применения AI' },
            { to: '/services/ai/business/model-selection', title: 'Подбор моделей: GPT, Claude, LLM' },
          ],
        },
        {
          title: '🛠️ Внедрение AI-агентов',
          items: [
            { to: '/services/ai/business/custom-agents', title: 'Создание кастомного ассистента' },
            { to: '/services/ai/business/intake-handling', title: 'Обработка email, форм, чатов' },
            { to: '/services/ai/business/automation-requests', title: 'Автоответы на заявки и письма' },
            { to: '/services/ai/business/data-integration', title: 'Интеграция с CRM, Notion, Airtable' },
          ],
        },
        {
          title: '📂 База знаний и RAG',
          items: [
            { to: '/services/ai/business/rag-setup', title: 'Настройка RAG: ответы по вашим файлам' },
            { to: '/services/ai/business/file-sources', title: 'Подключение Google Drive, PDF, Excel' },
            { to: '/services/ai/business/chatbot-deployment', title: 'Использование в чате или Telegram' },
          ],
        },
        {
          title: '⚙️ Интеграции и автоматизация',
          items: [
            { to: '/services/ai/business/n8n-zapier', title: 'Интеграция с n8n / Make / Zapier' },
            { to: '/services/ai/business/crm-workflows', title: 'AI + Bitrix24, 1С, amoCRM, Airtable' },
            { to: '/services/ai/business/auto-workflows', title: 'Сценарии: письмо → ответ → отчёт' },
          ],
        },
        {
          title: '🎙️ Голосовые решения',
          items: [
            { to: '/services/ai/business/speech-recognition', title: 'Распознавание речи: Whisper / Vosk' },
            { to: '/services/ai/business/voice-generation', title: 'Генерация голоса: ElevenLabs / Bark' },
            { to: '/services/ai/business/phone-bots', title: 'Голосовые ассистенты на телефоне' },
          ],
        },
        {
          title: '🔐 Безопасность и контроль',
          items: [
            { to: '/services/ai/business/local-llm', title: 'Запуск локальных LLM (LLaMA, Mistral)' },
            { to: '/services/ai/business/api-privacy', title: 'Безопасность при работе с API' },
            { to: '/services/ai/business/staff-training', title: 'Ограничение и обучение сотрудников' },
          ],
        },
        {
          title: '📚 Обучение сотрудников',
          items: [
            { to: '/services/ai/business/gpt-intro', title: 'Вводное обучение по GPT' },
            { to: '/services/ai/business/workspace-integration', title: 'Интеграции с Workspace, CRM' },
            { to: '/services/ai/business/internal-bots', title: 'Чат-ассистенты по стандартам компании' },
          ],
        },
      ],
    },
    {
      title: '👤 AI для личного использования',
      groups: [
        {
          title: '💡 Подбор инструментов',
          items: [
            { to: '/services/ai/personal/goal-based-selection', title: 'Подбор нейросетей под задачи' },
            { to: '/services/ai/personal/creative-use', title: 'Тексты, видео, изображения, голос' },
          ],
        },
        {
          title: '🧩 Установка и запуск',
          items: [
            { to: '/services/ai/personal/agent-ui', title: 'Панель: Telegram-бот, Web, Chrome' },
            { to: '/services/ai/personal/cloud-agent', title: 'Облачный агент 24/7' },
          ],
        },
        {
          title: '🧠 Индивидуальный ассистент',
          items: [
            { to: '/services/ai/personal/custom-memory', title: 'Ассистент с памятью и стилем' },
            { to: '/services/ai/personal/materials', title: 'Импорт писем, статей, заметок' },
          ],
        },
        {
          title: '🗂️ Работа с документами',
          items: [
            { to: '/services/ai/personal/pdf-analysis', title: 'Авторазбор PDF, Word, Google Docs' },
            { to: '/services/ai/personal/doc-generation', title: 'Генерация резюме и ответов по шаблону' },
          ],
        },
        {
          title: '🎨 Креатив и генерация',
          items: [
            { to: '/services/ai/personal/midjourney-prompts', title: 'Промты для DALL·E / Midjourney' },
            { to: '/services/ai/personal/youtube-generation', title: 'Голос + видео для Reels и YouTube' },
            { to: '/services/ai/personal/idea-gen', title: 'Идеи, сценарии, презентации' },
          ],
        },
        {
          title: '🔄 Автоматизация рутины',
          items: [
            { to: '/services/ai/personal/voice-to-text', title: 'Голос → Текст' },
            { to: '/services/ai/personal/email-helper', title: 'Генерация email, описаний, инструкций' },
            { to: '/services/ai/personal/universal-agent', title: 'Редактор, переводчик, корректор' },
          ],
        },
      ],
    },
  ],
}
