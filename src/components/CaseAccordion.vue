<template>
    <div class="bg-white py-12">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">Кейсы для бизнеса</h2>
        <div class="bg-slate-50 rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row gap-8">
          <div class="flex-1 min-w-[280px]">
            <div v-for="(item, idx) in cases" :key="idx" class="mb-4">
              <button
                @click="open(idx)"
                class="w-full flex items-center justify-between py-4 px-6 rounded-xl bg-slate-50 font-semibold text-lg focus:outline-none min-h-[56px]"
              >
                <span class="font-bold text-xl">{{ item.title }}</span>
  
                <!-- SVG стрелка с анимацией -->
                <svg
                  class="ml-4 w-7 h-7 text-gray-400 transform transition-transform duration-500"
                  :class="{ 'scale-y-[-1]': openIdx === idx }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
  
              <div v-if="openIdx === idx" class="py-4 px-6 text-gray-700 bg-slate-50 rounded-b-xl">
                {{ item.description }}
                <div class="mt-4 md:hidden flex justify-center">
                  <img :src="item.image" class="max-h-60 rounded-2xl object-contain" />
                </div>
              </div>
            </div>
          </div>
          <div class="flex-1 items-center justify-center min-h-[320px] hidden md:flex">
            <img
              :src="cases[openIdx].image"
              class="max-h-80 rounded-2xl object-contain transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup>
import { ref } from 'vue'
import img1 from '@/assets/backgrounds/accord_img_1.svg'
import img2 from '@/assets/backgrounds/accord_img_2.svg'
import img3 from '@/assets/backgrounds/accord_img_3.svg'

const cases = [
  { title: 'Автоматизация рутинных действий', description: 'Таблички, данные сайта, уведомления сотрудников', image: img1 },
  { title: 'Мини аппы внутренние', description: 'Калькуляторы, шаблонные редакторы файлов, авто заполнители', image: img2 },
  { title: 'Телеграм боты', description: 'Сбор заявок, внутренние решения для данных, пользовательские контакты', image: img3 }
]
const openIdx = ref(0)
function open(idx) { openIdx.value = idx }
</script> 