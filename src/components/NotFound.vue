<template>
  <div class="flex flex-col items-center justify-center min-h-screen text-center px-4">
    <h1 class="text-6xl font-bold mb-4">404</h1>
    <p class="text-xl mb-6">Данная страница переехала или была удалена.<br>Вот наши основные услуги:</p>
    <ServiceButtons />
    <router-link to="/" class="mt-8 text-blue-500 underline">На главную</router-link>
  </div>
</template>

<script setup lang="ts">
import ServiceButtons from './ui/ServiceButtons.vue'
import { RouterLink } from 'vue-router'
</script> 