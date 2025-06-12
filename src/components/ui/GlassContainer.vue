<template>
  <div
    ref="containerRef"
    class="relative cursor-pointer"
    :class="[className, active ? 'active' : '']"
    :style="{
      ...style,
      width: glassSize.width + 'px',
      height: glassSize.height + 'px',
    }"
    @mouseenter="$emit('mouseenter')"
    @mouseleave="$emit('mouseleave')"
    @mousedown="$emit('mousedown')"
    @mouseup="$emit('mouseup')"
    @click="$emit('click')"
  >
    <!-- SVG фильтр -->
    <svg
      v-if="!isFirefox"
      :width="glassSize.width"
      :height="glassSize.height"
      class="absolute"
      style="pointer-events: none;"
    >
      <defs>
        <filter
          :id="filterId"
          x="-35%"
          y="-35%"
          width="170%"
          height="170%"
          color-interpolation-filters="sRGB"
        >
          <feGaussianBlur :stdDeviation="blurAmount * 32" result="blurred" />
          <feColorMatrix
            in="blurred"
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 18 -7"
          />
        </filter>
      </defs>
    </svg>

    <!-- Основной стеклянный контейнер -->
      <div
        class="rounded-full flex items-center justify-center overflow-hidden z-10"
        :style="{
          width: glassSize.width + 'px',
          height: glassSize.height + 'px',
          padding,
          backdropFilter: `blur(${(overLight ? 12 : 4) + blurAmount * 32}px) saturate(${saturation}%)`,
          WebkitBackdropFilter: `blur(${(overLight ? 12 : 4) + blurAmount * 32}px) saturate(${saturation}%)`,
          boxShadow: overLight
            ? '0px 16px 70px rgba(0,0,0,0.75)'
            : '0px 12px 40px rgba(0,0,0,0.25)',
          position: 'relative',
          transition: 'all 0.2s ease-in-out',
          borderRadius: cornerRadius + 'px',
        }"
      >
      <!-- Внутренний фон -->
      <span
        class="absolute inset-0 pointer-events-none"
        :style="{
          filter: isFirefox ? '' : `url(#${filterId})`,
        }"
      />
      <!-- Контент -->
      <div class="relative z-10 text-white text-base font-medium leading-tight text-center w-full h-full">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps({
  className: { type: String, default: '' },
  style: { type: Object, default: () => ({}) },
  displacementScale: { type: Number, default: 25 },
  blurAmount: { type: Number, default: 0.0625 },
  saturation: { type: Number, default: 140 },
  aberrationIntensity: { type: Number, default: 2 },
  mouseOffset: { type: Object as () => { x: number; y: number }, default: () => ({ x: 0, y: 0 }) },
  active: { type: Boolean, default: false },
  overLight: { type: Boolean, default: false },
  cornerRadius: { type: Number, default: 999 },
  padding: { type: String, default: '8px 16px' },
  glassSize: { type: Object as () => { width: number; height: number }, default: () => ({ width: 270, height: 69 }) },
  mode: { type: String as () => 'standard' | 'polar', default: 'standard' },
})

defineEmits(['mouseenter', 'mouseleave', 'mousedown', 'mouseup', 'click'])

const isFirefox = navigator.userAgent.toLowerCase().includes('firefox')
const containerRef = ref<HTMLElement | null>(null)
const filterId = 'glass-filter-' + Math.random().toString(36).substring(2)
</script>