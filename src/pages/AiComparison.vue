<script setup>
import { ref, computed } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Сравнение нейросетей — IntellectShop',
  meta: [
    { name: 'description', content: 'Интерактивное сравнение популярных ИИ-сервисов: ChatGPT, Claude, Gemini, Grok, Perplexity, DeepSeek, GigaChat, ЯндексGPT, Suno, Midjourney, StableDiffusion, Runway. Критерии: доступность, бесплатные и платные возможности, Telegram-боты, генерация музыки, видео, кода и др.' }
  ]
})

const filters = [
  { key: 'vpn', label: 'VPN' },
  { key: 'telegram', label: 'Telegram' },
  { key: 'appstore', label: 'AppStore' },
  { key: 'free', label: 'Бесплатная версия' },
  { key: 'draw', label: 'Умеет рисовать' },
  { key: 'video', label: 'Умеет видео' },
  { key: 'code', label: 'Пишет код' },
  { key: 'music', label: 'Музыка' },
  { key: 'easy', label: 'Просто' },
]
const selectedFilters = ref([])

const aiList = [
  {
    name: 'ChatGPT',
    icon: '🤖',
    supports: { vpn: false, telegram: false, appstore: true, free: true, draw: true, video: true, code: true, music: false, hard: false },
    details: [
      { title: 'Доступность', value: '❌ Доступ через VPN.\n✅ Telegram-боты работают без VPN.<br><div class="flex gap-2 mt-2"><a href="https://chat.openai.com" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>Официальный сайт</a><a href="https://apps.apple.com/app/chatgpt/id6448311069" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>App Store</a></div>' },
      { title: 'Бесплатная версия', value: 'GPT-4о, рисует картинки, ограничен запросами, быстрый отклик, нет загрузки файлов, нет интернета.' },
      { title: 'Платная версия', value: '💳 $20 в месяц. Доступ к GPT-4o (смешанный мультимодальный ИИ), поддержка изображений, аудио, файлов и web-браузинга.' },
      { title: 'В Telegram', value: 'Есть множество сторонних ботов. Официального — нет.' },
      { title: 'Описание', value: 'Топ на рынке, если оставить только один, то его' }
    ]
  },
  {
    name: 'Claude',
    icon: '🌼',
    supports: { vpn: false, telegram: false, appstore: true, free: true, draw: false, video: false, code: true, music: false, hard: false },
    details: [
      { title: 'Доступность', value: '❌ Доступ через VPN\n🧭Telegram-ботов почти нет <br><div class="flex gap-2 mt-2"><a href="https://claude.ai" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-yellow-50 hover:bg-yellow-100 text-yellow-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>Официальный сайт</a><a href="https://apps.apple.com/us/app/claude-by-anthropic/id6473753684" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-yellow-50 hover:bg-yellow-100 text-yellow-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>App Store</a></div>' },
      { title: 'Бесплатная версия', value: 'Claude 3 Haiku — довольно умный, но урезан по размеру чата.' },
      { title: 'Платная версия', value: '💳 $19.99/мес. Доступ к Claude 3 Opus (один из лучших ИИ по пониманию контекста и документов).' },
      { title: 'В Telegram', value: 'Почти не представлен.' },
      { title: 'Описание', value: 'Очень круто кодит' }
    ]
  },
  {
    name: 'Gemini',
    icon: '🌐',
    supports: { vpn: false, telegram: false, appstore: true, free: true, draw: true, video: true, code: true, music: false, hard: false },
    details: [
      { title: 'Доступность', value: '❌ VPN обязателен, особенно для доступа к gemini.google.com.\n✅ Иногда работает через мобильные боты, но нестабильно.<br><div class="flex flex-wrap gap-2 mt-2"><a href="https://gemini.google.com/app" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>Официальный сайт</a><a href="https://aistudio.google.com/" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>AI Studio</a><a href="https://cloud.google.com/vertex-ai" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>Vertex AI</a><a href="https://apps.apple.com/us/app/google-gemini/id6477489729" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>App Store</a></div>' },
      { title: 'Бесплатная версия', value: 'Gemini 1.5 Flash, поддержка картинок, Google Docs, код.' },
      { title: 'Платная версия', value: '💳 Google One AI Premium — $19.99/мес. Доступ к Gemini 1.5 Pro, поддержка 1 млн токенов контекста.' },
      { title: 'В Telegram', value: 'Не представлен официально.' },
      { title: 'Описание', value: 'Лучшая видео генерация' }
    ]
  },
  {
    name: 'Grok',
    icon: '🚀',
    supports: { vpn: false, telegram: true, appstore: true, free: true, draw: false, video: false, code: true, music: false, hard: false },
    details: [
      { title: 'Доступность', value: '❌ Только через X (бывший Twitter), недоступен из РФ без VPN.\n💬 Работает в виде встроенного помощника в X.<br><div class="flex gap-2 mt-2"><a href="https://x.ai/" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>Официальный сайт</a><a href="https://apps.apple.com/us/app/grok/id6670324846" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>App Store</a></div>' },
      { title: 'Бесплатная версия', value: 'Официальный бот в Telegram \nОфициальное приложение в AppStore \nВнутри X ex Twitter' },
      { title: 'Платная версия', value: '💳 Входит в X Premium+ ($16/мес).' },
      { title: 'В Telegram', value: 'Официально' },
      { title: 'Описание', value: 'Самый отвязный и не политкоректный' }
    ]
  },
  {
    name: 'Perplexity AI',
    icon: '🔎',
    supports: { vpn: true, telegram: false, appstore: true, free: true, draw: false, video: false, code: false, music: false, hard: false },
    details: [
      { title: 'Доступность', value: '✅ Работает без VPN (на 2025 год).\n💬 Мощный поисковый ИИ, лучше для "знаний".<br><div class="flex gap-2 mt-2"><a href="https://www.perplexity.ai/" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>Официальный сайт</a><a href="https://apps.apple.com/us/app/perplexity-ask-anything/id1668000334" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>App Store</a></div>' },
      { title: 'Бесплатная версия', value: 'Ограничена в моделях (GPT-3.5, Claude Haiku).' },
      { title: 'Платная версия', value: '💳 $20/мес. Открывает GPT-4, Claude Opus, Mistral, доступ к файлам и интернету.' },
      { title: 'В Telegram', value: '✅ Есть неофициальные боты.' },
      { title: 'Описание', value: 'Лучшая замена Google' }
    ]
  },
  {
    name: 'DeepSeek',
    icon: '🧮',
    supports: { vpn: true, telegram: false, appstore: true, free: true, draw: false, video: false, code: true, music: false, hard: false },
    details: [
      { title: 'Доступность', value: '✅ Без VPN.\n🔬 Модель открытая, но не всегда стабильна.<br><div class="flex gap-2 mt-2"><a href="https://www.deepseek.com/en" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>Официальный сайт</a><a href="https://apps.apple.com/us/app/deepseek-ai-assistant/id6737597349" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>App Store</a></div>' },
      { title: 'Бесплатная версия', value: 'DeepSeek Chat (открытая демка). Хорош в коде и математике.' },
      { title: 'Платная версия', value: '💳 Часто используется бесплатно. Платные API.' },
      { title: 'В Telegram', value: '❌ Малоизвестен, ботов почти нет.' },
      { title: 'Описание', value: 'Полностью бесплатный' }
    ]
  },
  {
    name: 'GigaChat',
    icon: '💚',
    supports: { vpn: true, telegram: true, appstore: false, free: true, draw: true, video: false, code: false, music: false, hard: false },
    details: [
      { title: 'Доступность', value: '✅ Полностью доступен в России.\n💻 Веб, мобильное приложение, API.<br><div class="flex gap-2 mt-2"><a href="https://giga.chat/" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-green-50 hover:bg-green-100 text-green-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>Официальный сайт</a><a href="https://t.me/gigachat_bot" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-green-50 hover:bg-green-100 text-green-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>Telegram-бот</a></div>' },
      { title: 'Бесплатная версия', value: 'GPT-подобная, есть поддержка картинок и кода. Без входа — ограничен.' },
      { title: 'Платная версия', value: '💳 GigaChat Plus — от 299₽/мес. Увеличенный лимит токенов, приоритет.' },
      { title: 'В Telegram', value: '✅ Есть официальный бот.' },
      { title: 'Описание', value: 'Сбербанк' }
    ]
  },
  {
    name: 'ЯндексGPT',
    icon: '🟡',
    supports: { vpn: true, telegram: false, appstore: true, free: true, draw: false, video: false, code: false, music: false, hard: false },
    details: [
      { title: 'Доступность', value: '✅ Полный доступ в Яндексе: Alice, Search, Toloka,  Yandex 360.<br><div class="flex gap-2 mt-2"><a href="https://alice.yandex.ru/" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-yellow-50 hover:bg-yellow-100 text-yellow-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>Официальный сайт</a><a href="https://apps.apple.com/ru/app/%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D1%81-%D0%B0%D0%BB%D0%B8%D1%81%D0%BE%D0%B9/id1050704155" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-yellow-50 hover:bg-yellow-100 text-yellow-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>App Store</a></div>' },
      { title: 'Бесплатная версия', value: 'В Алисе, в поиске — контекстный помощник. Есть код, но хуже с креативом.' },
      { title: 'Платная версия', value: '💳 Через Yandex 360. Более мощные API и расширения.' },
      { title: 'В Telegram', value: '❌ Официального бота нет, но есть сторонние.' },
      { title: 'Описание', value: 'Алиса' }
    ]
  },
  {
    name: 'Suno',
    icon: '🎵',
    supports: { vpn: true, telegram: false, appstore: true, free: true, draw: false, video: false, code: false, music: true, hard: false },
    details: [
      { title: 'Доступность', value: 'Работает без VPN, web-интерфейс.<br><div class="flex gap-2 mt-2"><a href="https://suno.com/home" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>Официальный сайт</a><a href="https://apps.apple.com/us/app/suno-ai-songs-music-maker/id6480136315" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>App Store</a></div>' },
      { title: 'Бесплатная версия', value: 'Есть, но с ограничениями.' },
      { title: 'Платная версия', value: 'от $8/мес Подписка для расширенных возможностей.' },
      { title: 'В Telegram', value: 'Нет.' },
      { title: 'Описание', value: 'Генерация музыки и песен по тексту. Очень прост в использовании.' }
    ]
  },
  {
    name: 'Midjourney',
    icon: '🎨',
    supports: { vpn: false, telegram: false, appstore: false, free: false, draw: true, video: false, code: false, music: false, hard: true },
    details: [
      { title: 'Доступность', value: 'Только через Discord.<br><div class="flex gap-2 mt-2"><a href="https://www.midjourney.com/home" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>Официальный сайт</a><a href="https://discord.com/invite/midjourney" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>Discord</a></div>' },
      { title: 'Бесплатная версия', value: 'Нет.' },
      { title: 'Платная версия', value: 'от $8/мес Подписка.' },
      { title: 'В Telegram', value: 'Нет.' },
      { title: 'Описание', value: 'Генерация изображений по тексту. Работает через Discord.' }
    ]
  },
  {
    name: 'StableDiffusion',
    icon: '🖼️',
    supports: { vpn: true, telegram: true, appstore: false, free: true, draw: true, video: false, code: false, music: false, hard: true },
    details: [
      { title: 'Доступность', value: 'Работает без VPN, есть приложение в AppStore, есть Telegram-боты.<br><div class="flex flex-wrap gap-2 mt-2"><a href="https://stablediffusionweb.com/" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>Stable Diffusion Online</a><a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/diffusers/stable_diffusion.ipynb" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>Google Colab</a><a href="https://apps.apple.com/us/app/dreamer-ai-art-generator/id6447485201" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>App Store</a></div>' },
      { title: 'Бесплатная версия', value: 'Есть.' },
      { title: 'Платная версия', value: 'от $7/мес Есть платные облачные сервисы.' },
      { title: 'В Telegram', value: 'Есть.' },
      { title: 'Описание', value: 'Открытая генерация изображений. Много веб-версий и Telegram-ботов, а также блокнотов google colab.' }
    ]
  },
  {
    name: 'Runway',
    icon: '🎬',
    supports: { vpn: true, telegram: false, appstore: true, free: true, draw: true, video: true, code: false, music: false, hard: false },
    details: [
      { title: 'Доступность', value: 'Требуется VPN, web-интерфейс.<br><div class="flex gap-2 mt-2"><a href="https://runwayml.com/" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>Официальный сайт</a><a href="https://apps.apple.com/us/app/runwayml/id1665024375" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium shadow-sm transition"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 12l2 2l4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>App Store</a></div>' },
      { title: 'Бесплатная версия', value: 'Есть, но с ограничениями.' },
      { title: 'Платная версия', value: 'от $12/мес Подписка.' },
      { title: 'В Telegram', value: 'Нет.' },
      { title: 'Описание', value: 'Генерация и редактирование видео с помощью ИИ.' }
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
      <p class="text-lg text-gray-600">Интерактивный гид по выбору нейросети для разных задач. Нажмите на сервис, чтобы узнать подробности.</p>
    </div>

    <!-- Фильтры -->
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

    <!-- Горизонтальный список сервисов -->
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

    <!-- Детали выбранного сервиса -->
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
    
    <!-- Критерии оценки -->
    <div class="bg-white rounded-xl p-6 shadow-sm border mb-8 transition-transform duration-200">
      <h2 class="text-xl font-semibold mb-4">🗺️ Критерии оценки</h2>
      <ol class="list-decimal list-inside text-gray-700 space-y-2">
        <li>Доступность в России (прямой или через VPN, web/Telegram)</li>
        <li>Бесплатная версия: ограничения и возможности</li>
        <li>Платная версия: цена и преимущества</li>
        <li>Наличие Telegram-ботов или интеграций</li>
      </ol>
    </div>
    <div class="text-xs text-gray-400 text-center mt-8">Данные актуальны на 2024 год. Для уточнения информации проверяйте официальные сайты сервисов.</div>
  </section>
</template>

<style scoped>
.container { max-width: 1200px; }
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
.animate-fade-in { animation: fadeIn 0.4s; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
/* Кнопки выбора сети: динамическая ширина */
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
