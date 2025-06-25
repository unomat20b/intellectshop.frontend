<script setup>
import { RouterLink } from 'vue-router'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Бизнес-аудит — IntellectShop',
  meta: [
    { name: 'description', content: 'Анализ IT-процессов и подбор оптимальных инструментов для бизнеса.' }
  ]
})

const audit = [
  { to: '/services/business-it/infra-analysis', title: 'Анализ текущей цифровой инфраструктуры' },
  { to: '/services/business-it/risk-detection', title: 'Определение слабых мест' },
  { to: '/services/business-it/transformation-strategy', title: 'Стратегия цифровой трансформации' }
]

const hosting = [
  { to: '/services/business-it/hosting-selection', title: 'Подбор оптимального хостинга' },
  { to: '/services/business-it/cloud-comparison', title: 'Сравнение облаков' },
  { to: '/services/business-it/server-setup', title: 'Настройка серверов под задачи' },
  { to: '/services/business-it/hosting-backup', title: 'Резервное копирование на хостинге' }
]

const tools = [
  { to: '/services/business-it/tool-selection', title: 'Подбор и внедрение цифровых инструментов' },
  { to: '/services/business-it/tool-comparison', title: 'Анализ аналогов и комбинаций инструментов' }
]

const team = [
  { to: '/services/business-it/team-structure', title: 'Структурирование работы по отделам' },
  { to: '/services/business-it/onboarding-setup', title: 'Онбординг и рабочие сессии' },
  { to: '/services/business-it/time-tracking', title: 'Инструменты трекинга времени' },
  { to: '/services/business-it/docflow-rules', title: 'Документооборот и управление задачами' }
]

const security = [
  { to: '/services/business-it/vpn-setup', title: 'Настройка VPN и защита соединения' },
  { to: '/services/business-it/infra-scan', title: 'Сканирование на уязвимости' },
  { to: '/services/business-it/secure-alternatives', title: 'Безопасные альтернативы популярным сервисам' }
]

const access = [
  { to: '/services/business-it/access-roles', title: 'Структура доступа по ролям' },
  { to: '/services/business-it/password-managers', title: 'Менеджеры паролей' },
  { to: '/services/business-it/access-automation', title: 'Автоматизация доступа' },
  { to: '/services/business-it/auth-logging', title: 'Ведение логов и 2FA' }
]

const docs = [
  { to: '/services/business-it/doc-guidelines', title: 'Стандарты документации и базы знаний' },
  { to: '/services/business-it/file-organization', title: 'Структуризация данных и доступов' },
  { to: '/services/business-it/repo-management', title: 'Работа с Git и облаками' },
  { to: '/services/business-it/project-backup', title: 'Резервное копирование проектов и файлов' }
]

const standards = [
  { to: '/services/business-it/internal-guides', title: 'Гайды, инструкции и регламенты' },
  { to: '/services/business-it/checklist-setup', title: 'Чек-листы и процессы онбординга' },
  { to: '/services/business-it/process-formalization', title: 'Формализация процессов' },
  { to: '/services/business-it/itil-support', title: 'Поддержка по ITIL / ISO и масштабирование' }
]
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-6">Бизнес-аудит и IT-диагностика</h1>
    <p class="text-gray-700 mb-10">
      Анализ IT-процессов и подбор оптимальных инструментов для бизнеса. Выберите интересующий раздел:
    </p>

    <div class="space-y-10">
      <div>
        <h2 class="text-2xl font-semibold mb-4">📊 Бизнес-аудит и IT-диагностика</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <RouterLink v-for="item in audit" :key="item.to" :to="item.to" class="block bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <h3 class="font-semibold">{{ item.title }}</h3>
          </RouterLink>
        </div>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-4">🖥️ Выбор и настройка хостингов</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <RouterLink v-for="item in hosting" :key="item.to" :to="item.to" class="block bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <h3 class="font-semibold">{{ item.title }}</h3>
          </RouterLink>
        </div>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-4">🧠 Цифровые инструменты и экосистемы</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <RouterLink v-for="item in tools" :key="item.to" :to="item.to" class="block bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <h3 class="font-semibold">{{ item.title }}</h3>
          </RouterLink>
        </div>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-4">🧷 Организация процессов команд</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <RouterLink v-for="item in team" :key="item.to" :to="item.to" class="block bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <h3 class="font-semibold">{{ item.title }}</h3>
          </RouterLink>
        </div>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-4">🔐 Безопасность и приватность</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <RouterLink v-for="item in security" :key="item.to" :to="item.to" class="block bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <h3 class="font-semibold">{{ item.title }}</h3>
          </RouterLink>
        </div>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-4">🧾 Управление аккаунтами и правами</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <RouterLink v-for="item in access" :key="item.to" :to="item.to" class="block bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <h3 class="font-semibold">{{ item.title }}</h3>
          </RouterLink>
        </div>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-4">📁 Документооборот, хранение и систематизация</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <RouterLink v-for="item in docs" :key="item.to" :to="item.to" class="block bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <h3 class="font-semibold">{{ item.title }}</h3>
          </RouterLink>
        </div>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-4">📐 Стандартизация и системный контроль</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <RouterLink v-for="item in standards" :key="item.to" :to="item.to" class="block bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <h3 class="font-semibold">{{ item.title }}</h3>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.max-w-6xl { max-width: 80rem; }
</style>
