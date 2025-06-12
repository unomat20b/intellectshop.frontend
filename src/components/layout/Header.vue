<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const open = ref(false)
</script>

<template>
  <header class="bg-slate-900 text-white shadow-md sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <!-- ЛОГО -->
      <RouterLink to="/" class="flex items-center gap-2 font-semibold">
        <span class="text-xl">🧠 IntellectShop</span>
      </RouterLink>

      <!-- desktop-nav -->
      <nav class="hidden md:flex items-center gap-6">
        <RouterLink class="hover:text-blue-400" to="/catalog">Catalog</RouterLink>
        <RouterLink class="hover:text-blue-400" to="/services">Services</RouterLink>
        <RouterLink class="hover:text-blue-400" to="/projects">Projects</RouterLink>
        <RouterLink class="hover:text-blue-400" to="/about">About</RouterLink>
      </nav>

      <!-- burger -->
      <button
        class="md:hidden size-9 flex flex-col justify-center gap-[3px]"
        @click="open = !open"
      >
        <span
          class="h-[2px] w-6 bg-white transition"
          :class="open ? 'translate-y-[5px] -rotate-45' : ''"
        />
        <span
          class="h-[2px] w-6 bg-white"
          :class="open ? 'opacity-0' : ''"
        />
        <span
          class="h-[2px] w-6 bg-white transition"
          :class="open ? '-translate-y-[5px] rotate-45' : ''"
        />
      </button>
    </div>

    <!-- mobile-nav -->
    <transition name="fade">
      <nav
        v-if="open"
        class="md:hidden flex flex-col gap-4 bg-slate-800 px-6 pb-6"
        @click="open = false"
      >
        <RouterLink class="py-1" to="/catalog">Catalog</RouterLink>
        <RouterLink class="py-1" to="/services">Services</RouterLink>
        <RouterLink class="py-1" to="/projects">Projects</RouterLink>
        <RouterLink class="py-1" to="/about">About</RouterLink>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>