<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Курсы Apple — IntellectShop',
  meta: [
    {
      name: 'description',
      content:
        'Обучение по продуктам Apple: iPhone, iPad, Mac, решения для бизнеса и мультимедиа.',
    },
  ],
})

const iphone = [
  { to: '/services/apple/iphone/IPhoneBasics', title: 'Основы работы с iPhone' },
  { to: '/services/apple/iphone/IPhonePrivacy', title: 'Безопасность и приватность' },
  { to: '/services/apple/iphone/ICloudDocs', title: 'Работа с iCloud и документами' },
  { to: '/services/apple/iphone/DataBackup', title: 'Перенос данных и бэкапы' },
  { to: '/services/apple/iphone/IPhoneApps', title: 'Сторонние приложения' },
  { to: '/services/apple/iphone/Accessibility', title: 'Жесты и универсальный доступ' }
]

const ipad = [
  { to: '/services/apple/ipad/apple-pencil-usage', title: 'Apple Pencil: заметки и Procreate' },
  { to: '/services/apple/ipad/ipad-workflow-tools', title: 'Split View, Stage Manager' },
  { to: '/services/apple/ipad/ipad-remote-learning', title: 'Удалённое обучение и связь' },
  { to: '/services/apple/ipad/ipad-apps-sync', title: 'Сторонние приложения' },
  { to: '/services/apple/ipad/ipad-in-education', title: 'iPad в образовании' }
]

const mac = [
  { to: '/services/apple/mac/macos-basics', title: 'Основы macOS' },
  { to: '/services/apple/mac/macos-navigation-tools', title: 'Finder, Spotlight, Launchpad' },
  { to: '/services/apple/mac/macos-time-machine', title: 'Time Machine и резервные копии' },
  { to: '/services/apple/mac/macos-apps-install', title: 'Установка и обновления' },
  { to: '/services/apple/mac/macos-file-management', title: 'Файлы и архивы' },
  { to: '/services/apple/mac/macos-thirdparty-workflow', title: 'Сторонние приложения' }
]

const business = [
  { to: '/services/apple/business/AppleInBusiness', title: 'Apple в корпоративной среде' },
  { to: '/services/apple/business/Keynote', title: 'Keynote: WOW-презентации' },
  { to: '/services/apple/business/MacAndiPhone', title: 'Интеграция Mac + iPhone' }
]

const creative = [
  { to: '/services/apple/creative/Davinci', title: 'Монтаж: Davinci, FinalCut' },
  { to: '/services/apple/creative/AbletonLogic', title: 'Музыка: Logic, Ableton' },
  { to: '/services/apple/creative/GarageBand', title: 'GarageBand для новичков' },
  { to: '/services/apple/creative/PhotoEditingMobile', title: 'Фотография: iPhone и iPad' },
  { to: '/services/apple/creative/PhotoEditingMac', title: 'Фотография: Mac' },
  { to: '/services/apple/creative/CGIEffects', title: 'CGI и эффекты' },
  { to: '/services/apple/creative/ThreeD', title: '3D-моделирование' },
  { to: '/services/apple/creative/Vector', title: 'Векторная графика' }
]
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-6">Курсы Apple</h1>

    <p class="text-gray-700 mb-10">
      IntellectShop обучает работе с устройствами и сервисами Apple. Ниже — подборки курсов по каждому направлению.
    </p>

    <div class="space-y-10">
      <!-- iPhone -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">📱 iPhone и iOS</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <RouterLink
            v-for="item in iphone"
            :key="item.to"
            :to="item.to"
            class="block bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
          >
            <h3 class="font-semibold">{{ item.title }}</h3>
          </RouterLink>
        </div>
      </div>

      <!-- iPad -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">📘 iPad и iPadOS</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <RouterLink
            v-for="item in ipad"
            :key="item.to"
            :to="item.to"
            class="block bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
          >
            <h3 class="font-semibold">{{ item.title }}</h3>
          </RouterLink>
        </div>
      </div>

      <!-- Mac -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">💻 Mac и macOS</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <RouterLink
            v-for="item in mac"
            :key="item.to"
            :to="item.to"
            class="block bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
          >
            <h3 class="font-semibold">{{ item.title }}</h3>
          </RouterLink>
        </div>
      </div>

      <!-- Business -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">🏢 Apple для бизнеса</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <RouterLink
            v-for="item in business"
            :key="item.to"
            :to="item.to"
            class="block bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
          >
            <h3 class="font-semibold">{{ item.title }}</h3>
          </RouterLink>
        </div>
      </div>

      <!-- Creative -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">🎨 Креативные тренинги</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <RouterLink
            v-for="item in creative"
            :key="item.to"
            :to="item.to"
            class="block bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
          >
            <h3 class="font-semibold">{{ item.title }}</h3>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>