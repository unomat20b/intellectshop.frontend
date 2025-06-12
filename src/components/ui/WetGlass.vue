<template>
  <!-- Обёртка: применяется translate и scale только сюда -->
  <div class="relative w-fit h-fit" :style="transformWrapperStyle" ref="wrapperRef">
    
    <!-- Световые слои -->
    <div class="absolute bg-black pointer-events-none transition-opacity duration-150"
         :class="overLight ? 'opacity-20' : 'opacity-0'"
         :style="effectLayerStyle" />
    <div class="absolute bg-black mix-blend-overlay pointer-events-none transition-opacity duration-150"
         :class="overLight ? 'opacity-100' : 'opacity-0'"
         :style="effectLayerStyle" />

    <!-- Градиентные рамки -->
    <span class="absolute" :style="borderStyle('screen', 0.2, 0.12)" />
    <span class="absolute" :style="borderStyle('overlay', 0.32, 0.6)" />

    <!-- Hover слои -->
    <div v-if="hasClick" class="absolute" :style="hoverStyle(isHovered || isActive ? 0.4 : 0, 'rgba(255,255,255,0.5)')" />
    <div v-if="hasClick" class="absolute" :style="hoverStyle(isActive ? 0.5 : 0, 'rgba(255,255,255,1)')" />

    <!-- Основная стеклянная кнопка -->
    <GlassContainer
      ref="glassRef"
      :class="className"
      :style="baseStyle"
      :cornerRadius="cornerRadius"
      :displacementScale="overLight ? displacementScale * 0.5 : displacementScale"
      :blurAmount="blurAmount"
      :saturation="saturation"
      :aberrationIntensity="aberrationIntensity"
      :glassSize="glassSize"
      :padding="padding"
      :mouseOffset="mouseOffset"
      :active="isActive"
      :overLight="overLight"
      :mode="mode"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      @mousedown="isActive = true"
      @mouseup="isActive = false"
      @click="emit('click')"
    >
      <slot />
    </GlassContainer>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import GlassContainer from './GlassContainer.vue'

type MousePos = { x: number; y: number }

const props = defineProps({
  displacementScale: { type: Number, default: 70 },
  blurAmount: { type: Number, default: 0.0625 },
  saturation: { type: Number, default: 140 },
  aberrationIntensity: { type: Number, default: 2 },
  elasticity: { type: Number, default: 0.15 },
  cornerRadius: { type: Number, default: 999 },
  globalMousePos: { type: Object as () => MousePos | undefined, default: undefined },
  mouseOffset: { type: Object as () => MousePos | undefined, default: undefined },
  mouseContainer: { type: Object as () => HTMLElement | null, default: null },
  className: { type: String, default: '' },
  padding: { type: String, default: '8px 16px' },
  style: { type: Object as () => any, default: () => ({}) },
  overLight: { type: Boolean, default: false },
  mode: { type: String as () => 'standard' | 'polar', default: 'standard' },
})

const emit = defineEmits<{ (e: 'click'): void }>()

const glassRef = ref<{ el: HTMLElement | null } | null>(null)
const wrapperRef = ref<HTMLElement | null>(null)
const isHovered = ref(false)
const isActive = ref(false)
const glassSize = ref({ width: 270, height: 69 })
const internalGlobalMousePos = ref<MousePos>({ x: 0, y: 0 })
const internalMouseOffset = ref<MousePos>({ x: 0, y: 0 })

const hasClick = computed(() => !!emit)
const globalMousePos = computed(() => props.globalMousePos || internalGlobalMousePos.value)
const mouseOffset = computed(() => props.mouseOffset || internalMouseOffset.value)

const handleMouseMove = (e: MouseEvent) => {
  const container = props.mouseContainer || wrapperRef.value
  if (!container) return
  const rect = container.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  internalMouseOffset.value = {
    x: ((e.clientX - centerX) / rect.width) * 100,
    y: ((e.clientY - centerY) / rect.height) * 100,
  }
  internalGlobalMousePos.value = { x: e.clientX, y: e.clientY }
}

onMounted(() => {
  if (!(props.globalMousePos && props.mouseOffset)) {
    window.addEventListener('mousemove', handleMouseMove)
    onBeforeUnmount(() => window.removeEventListener('mousemove', handleMouseMove))
  }
})

watch(
  () => glassRef.value,
  () => {
    if (!glassRef.value?.el) return
    const update = () => {
      const rect = glassRef.value!.el!.getBoundingClientRect()
      glassSize.value = { width: rect.width, height: rect.height }
    }
    update()
    window.addEventListener('resize', update)
    onBeforeUnmount(() => window.removeEventListener('resize', update))
  },
  { immediate: true }
)

function calculateFadeInFactor() {
  const pos = globalMousePos.value
  const ref = glassRef.value?.el
  if (!pos || !ref) return 0
  const rect = ref.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  const dx = Math.abs(pos.x - centerX) - rect.width / 2
  const dy = Math.abs(pos.y - centerY) - rect.height / 2
  const edgeDistance = Math.sqrt(Math.max(0, dx) ** 2 + Math.max(0, dy) ** 2)
  return edgeDistance > 200 ? 0 : 1 - edgeDistance / 200
}

function calculateElasticTranslation() {
  const ref = glassRef.value?.el
  if (!ref) return { x: 0, y: 0 }
  const fade = calculateFadeInFactor()
  const rect = ref.getBoundingClientRect()
  const cx = rect.left + rect.width / 2
  const cy = rect.top + rect.height / 2
  return {
    x: (globalMousePos.value.x - cx) * props.elasticity * 0.1 * fade,
    y: (globalMousePos.value.y - cy) * props.elasticity * 0.1 * fade,
  }
}

function calculateDirectionalScale() {
  const pos = globalMousePos.value
  const ref = glassRef.value?.el
  if (!pos || !ref) return 'scale(1)'
  const rect = ref.getBoundingClientRect()
  const dx = pos.x - (rect.left + rect.width / 2)
  const dy = pos.y - (rect.top + rect.height / 2)
  const distance = Math.sqrt(dx ** 2 + dy ** 2)
  const fade = calculateFadeInFactor()
  const stretch = Math.min(distance / 300, 1) * props.elasticity * fade
  const normX = dx / distance || 0
  const normY = dy / distance || 0
  const scaleX = 1 + Math.abs(normX) * stretch * 0.3 - Math.abs(normY) * stretch * 0.15
  const scaleY = 1 + Math.abs(normY) * stretch * 0.3 - Math.abs(normX) * stretch * 0.15
  return `scaleX(${Math.max(0.8, scaleX)}) scaleY(${Math.max(0.8, scaleY)})`
}

const transformWrapperStyle = computed(() => {
  const t = calculateElasticTranslation()
  const scale = isActive.value && hasClick.value ? 'scale(0.96)' : calculateDirectionalScale()
  return {
    transform: `translate(${t.x}px, ${t.y}px) ${scale}`,
    transition: 'transform 0.2s ease-out',
  }
})

const baseStyle = computed(() => ({
  ...props.style,
}))

const effectLayerStyle = computed(() => ({
  position: 'absolute',
  width: glassSize.value.width + 'px',
  height: glassSize.value.height + 'px',
  borderRadius: `${props.cornerRadius}px`,
}))

function borderStyle(blend: string, start = 0.12, mid = 0.4) {
  return {
    ...effectLayerStyle.value,
    mixBlendMode: blend,
    padding: '1.5px',
    pointerEvents: 'none',
    WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    boxShadow: '0 0 0 0.5px rgba(255,255,255,0.5) inset, 0 1px 3px rgba(255,255,255,0.25) inset',
    background: `linear-gradient(${135 + mouseOffset.value.x * 1.2}deg,
    rgba(255,255,255,0) 0%,
    rgba(255,255,255,${start + Math.abs(mouseOffset.value.x) * 0.008}) ${Math.max(10, 33 + mouseOffset.value.y * 0.3)}%,
    rgba(255,255,255,${mid + Math.abs(mouseOffset.value.x) * 0.012}) ${Math.min(90, 66 + mouseOffset.value.y * 0.4)}%,
    rgba(255,255,255,0) 100%)`
  }
}

function hoverStyle(opacity: number, color: string) {
  return {
    ...effectLayerStyle.value,
    opacity,
    background: `radial-gradient(circle at 50% 0%, ${color} 0%, transparent 100%)`,
    mixBlendMode: 'overlay',
    pointerEvents: 'none',
    transition: 'opacity 0.2s ease-out',
  }
}
</script>