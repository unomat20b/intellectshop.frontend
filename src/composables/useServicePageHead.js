import { useHead } from '@vueuse/head'

export function useServicePageHead(content) {
  const title = content?.meta?.title || `${content?.hero?.title || 'Услуга'} — IntellectShop`
  const description = content?.meta?.description || ''

  useHead({
    title,
    meta: [
      {
        name: 'description',
        content: description,
      },
    ],
  })
}
