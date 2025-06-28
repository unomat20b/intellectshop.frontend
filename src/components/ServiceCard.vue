<template>
  <div class="relative bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-start cursor-pointer hover:shadow-3xl hover:scale-105 transition-all min-h-[420px] h-full w-full overflow-hidden" @click="openPopup">
    <img
      v-if="bgImage"
      :src="bgImage"
      class="absolute inset-0 w-full h-full object-cover rounded-3xl pointer-events-none opacity-80 "
      alt=""
    />
    <div class="absolute inset-0 bg-black/40 rounded-3xl z-0"></div>
    <div class="relative z-10">
      <h3 class="text-xl font-bold mb-4 text-white drop-shadow-md">{{ title }}</h3>
      <p class="text-white text-xs drop-shadow-md">{{ description }}</p>
    </div>
    <ServicePopup v-if="isOpen" :servicePath="props.servicePath" @close="isOpen = false" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ServicePopup from './ServicePopup.vue'

const serviceModules = {
  'AI/business/n8n-zapier.vue': () => import('../pages/services/ai/business/n8n-zapier.vue'),
  'AI/business/use-cases.vue': () => import('../pages/services/ai/business/use-cases.vue'),
  'business-it/access-roles.vue': () => import('../pages/services/business-it/access-roles.vue'),
  'business-it/docflow-rules.vue': () => import('../pages/services/business-it/docflow-rules.vue'),
}

const props = defineProps({
  servicePath: {
    type: String,
    required: true
  },
  bgImage: {
    type: String,
    default: ''
  }
})

const title = ref('')
const description = ref('')
const isOpen = ref(false)

function openPopup() {
  isOpen.value = true
}

onMounted(async () => {
  try {
    if (serviceModules[props.servicePath]) {
      const serviceModule = await serviceModules[props.servicePath]()
      const comp = serviceModule.default
      title.value = comp.serviceTitle || 'Без названия'
      description.value = comp.serviceDescription || ''
    } else {
      title.value = 'Не найдено'
      description.value = ''
    }
  } catch (e) {
    title.value = 'Не найдено'
    description.value = ''
  }
})
</script> 