// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  /**  ← обязательно со слешами по краям */
  base: '/',
  plugins: [vue()],
})