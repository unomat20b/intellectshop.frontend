<template>
  <h1 class="text-2xl font-bold text-green-600 mb-4">🏠 Главная страница</h1>
  <router-link to="/services">
    <WetGlass className="inline-block" padding="12px 24px">
      Услуги и обучение
    </WetGlass>
  </router-link>
</template>

<script setup>
import WetGlass from '../components/WetGlass.vue'
</script>
