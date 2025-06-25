<template>
  <section class="max-w-5xl mx-auto px-4 py-16">
    <h2 class="text-2xl font-bold text-center mb-10">Компетенции</h2>
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <RouterLink
        to="/services/apple"
        class="block bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
      >
        <h3 class="font-semibold mb-2">Экосистема Apple</h3>
        <p class="text-sm text-slate-600">
          10+ лет опыта настройки устройств, MDM-решений и обучения сотрудников.
        </p>
      </RouterLink>
      <RouterLink
        to="/services/ai"
        class="block bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
      >
        <h3 class="font-semibold mb-2">Нейросети &amp; AI-агенты</h3>
        <p class="text-sm text-slate-600">
          Внедряем ChatGPT-решения, создаём кастомных агентов на базе LLM.
        </p>
      </RouterLink>
      <RouterLink
        to="/services/audit"
        class="block bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
      >
        <h3 class="font-semibold mb-2">Бизнес-аудит</h3>
        <p class="text-sm text-slate-600">
          Анализ текущих IT-процессов и подбор оптимальных инструментов.
        </p>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script> 