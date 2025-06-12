<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'ghost' | 'glass'
  as?: 'button' | 'a'
}>()
</script>

<template>
  <component
    :is="as || 'button'"
    :class="[
      'px-4 py-2 rounded-xl transition',
      variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
      variant === 'ghost'   && 'border border-blue-600 text-blue-600 hover:bg-blue-50',
      variant === 'glass'   && 'backdrop-blur-md bg-white/10 hover:bg-white/20'
    ]"
  >
    <slot/>
  </component>
</template>