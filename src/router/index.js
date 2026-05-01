import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const normalizeTrailingSlash = (path) => {
  if (!path || path === '/') return '/'
  if (path.endsWith('/')) return path
  if (path.includes('.')) return path
  return `${path}/`
}

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

router.beforeEach((to) => {
  const normalizedPath = normalizeTrailingSlash(to.path)
  if (normalizedPath !== to.path) {
    return {
      path: normalizedPath,
      query: to.query,
      hash: to.hash,
      replace: true
    }
  }
  return true
})

export default router
