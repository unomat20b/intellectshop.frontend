<template>
  <div class="bg-slate-50 py-12">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-2xl font-bold mb-6">Первые шаги</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ServiceCard servicePath="ai/business/n8n-zapier.vue" :bgImage="bg1" />
        <ServiceCard servicePath="ai/business/use-cases.vue" :bgImage="bg2" />
        <ServiceCard servicePath="business-it/access-roles.vue" :bgImage="bg3" />
        <ServiceCard servicePath="business-it/docflow-rules.vue" :bgImage="bg4" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue'
import bg1 from '@/assets/backgrounds/cart_back_1.svg'
import bg2 from '@/assets/backgrounds/cart_back_2.svg'
import bg3 from '@/assets/backgrounds/cart_back_3.svg'
import bg4 from '@/assets/backgrounds/cart_back_4.svg'
</script> 