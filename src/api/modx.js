import axios from 'axios'

const api = axios.create({
  baseURL: __API_BASE__, // ← заменяется Vite автоматически
})

export async function fetchProducts () {
  const { data } = await api.get('/catalog') // /catalog добавляется к /api
  return Array.isArray(data) ? data : (data.items ?? [])
}