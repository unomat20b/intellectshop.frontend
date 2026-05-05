import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const prerenderRoutes = new Set([
    '/',
    '/services',
    '/about',
    '/projects',
    '/ai-comparison',
    '/speedreader-project',
    '/epubconverter',
  ])

  return {
    base: '/',
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@vueuse/head': '@unhead/vue',
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    ssgOptions: {
      dirStyle: 'nested',
      includedRoutes(paths) {
        return paths.filter((path) => prerenderRoutes.has(path))
      }
    },
    define: {
      __API_BASE__: JSON.stringify(env.VITE_API_BASE),
    },
  }
})
