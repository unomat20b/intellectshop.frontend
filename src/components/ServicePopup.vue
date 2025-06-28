<template>
  <teleport to="body">
    <div class="fixed inset-0 bg-black/60 flex items-center justify-center z-50" @click.self="close">
      <div class="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button @click="close" class="absolute top-4 right-4 text-2xl leading-none">&times;</button>
        <component :is="serviceComp" v-if="serviceComp" />
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const serviceModules = {
  'ai/business/n8n-zapier.vue': () => import('../pages/services/ai/business/n8n-zapier.vue'),
  'ai/business/use-cases.vue': () => import('../pages/services/ai/business/use-cases.vue'),
  'business-it/access-roles.vue': () => import('../pages/services/business-it/access-roles.vue'),
  'business-it/docflow-rules.vue': () => import('../pages/services/business-it/docflow-rules.vue'),
}

const props = defineProps({ servicePath: String })
const emit = defineEmits(['close'])
const serviceComp = ref(null)
function close() { emit('close') }
onMounted(async () => {
  if (serviceModules[props.servicePath]) {
    const mod = await serviceModules[props.servicePath]()
    serviceComp.value = mod.default
  }
})
</script> 