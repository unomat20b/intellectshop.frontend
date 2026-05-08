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
      <h3 class="text-xl font-bold mb-4 text-white drop-shadow-md">{{ summary.title }}</h3>
      <p class="text-white text-xs drop-shadow-md">{{ summary.description }}</p>
    </div>
    <ServicePopup v-if="isOpen" :servicePath="props.servicePath" @close="isOpen = false" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import ServicePopup from './ServicePopup.vue'

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

const SERVICE_SUMMARIES = {
  'ai/business/n8n-zapier.vue': {
    title: 'Автоматизация с n8n и Zapier',
    description: 'Интеграция и автоматизация бизнес-процессов с помощью n8n и Zapier.'
  },
  'ai/business/use-cases.vue': {
    title: 'Выбор точек применения AI',
    description: 'Как определить, где в бизнесе выгодно использовать нейросети и какие инструменты выбрать.'
  },
  'business-it/access-roles.vue': {
    title: 'Ролевая модель доступа',
    description: 'Кто, куда и зачем имеет доступ: шаблоны прав, контроль рисков и прозрачность процессов.'
  },
  'business-it/docflow-rules.vue': {
    title: 'Правила документооборота',
    description: 'Процессы, шаблоны, хранение и согласование документов для стабильной внутренней работы.'
  }
}

const summary = computed(() => {
  return SERVICE_SUMMARIES[props.servicePath] || {
    title: 'Консультация IntellectShop',
    description: 'Практическая настройка и внедрение решений под задачи команды.'
  }
})

const isOpen = ref(false)

function openPopup() {
  isOpen.value = true
}
</script>
