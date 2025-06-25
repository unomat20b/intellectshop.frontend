<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Настройка серверов для проектов и API – IntellectShop',
  meta: [
    {
      name: 'description',
      content: 'Подготовка серверов под AI, ботов, API и корпоративные сервисы. Поддержка Docker, Nginx, SSL и безопасности.',
    },
  ],
})
</script>

<template>
  <section class="max-w-3xl mx-auto px-4 py-10">
    <h1 class="text-2xl font-bold mb-4">Настройка серверов для проектов и API</h1>

    <p class="text-gray-700 mb-4">
      Хотите разворачивать сервисы, AI-агентов или внутренние API на собственных серверах? Мы поможем подготовить инфраструктуру для стабильной и безопасной работы ваших решений.
    </p>

    <h2 class="text-lg font-semibold mb-2">Что входит в настройку</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Развёртывание сервера (VPS, bare-metal, облако)</li>
      <li>Установка и настройка Docker, Node.js, Python, PostgreSQL и других компонентов</li>
      <li>Настройка Nginx / Caddy для проксирования и SSL (HTTPS)</li>
      <li>Автоматизация деплоя через CI/CD (например, GitHub Actions)</li>
      <li>Настройка брандмауэра, Fail2Ban, SSH-доступа и прав доступа</li>
      <li>Резервное копирование и мониторинг (uptime, нагрузка, логирование)</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Типичные проблемы</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Сервер «падает» из-за перегрузки или отсутствия мониторинга</li>
      <li>Ошибки в SSL и настройке доменов</li>
      <li>Недостаточная защита — открытые порты, слабые пароли</li>
      <li>Невозможно быстро развернуть новое приложение или агента</li>
    </ul>

    <h2 class="text-lg font-semibold mb-2">Что вы получите на выходе</h2>
    <p class="text-gray-700 mb-6">
      Готовую серверную среду с установленными компонентами, доступом через SSH, резервным копированием и инструкциями для команды. Вы сможете разворачивать приложения и API за 10 минут — стабильно и безопасно.
    </p>

    <h2 class="text-lg font-semibold mb-2">2 лайфхака по серверной инфраструктуре</h2>
    <ul class="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li><strong>Используйте Docker Compose:</strong> это упрощает управление сервисами и перенос между серверами.</li>
      <li><strong>Подключите мониторинг через UptimeRobot:</strong> бесплатное уведомление, если ваш сайт или API упал.</li>
    </ul>

    <p class="text-gray-700 italic">
      Сервер — это фундамент цифрового бизнеса. Мы поможем сделать его надёжным, управляемым и безопасным.
    </p>
  </section>
</template>