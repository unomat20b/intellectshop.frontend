import axios from 'axios'

const api = axios.create({
  // домен и протокол – из location.origin, путь – /api
  baseURL: `${window.location.origin}/api/`,
})

export async function fetchProducts () {
  const { data } = await api.get('products')   // ⇒ https://…/api/products
  return data.items ?? []
}