import axios from 'axios'

const api = axios.create({
  baseURL: '/',                    // остаётся
})

export async function fetchProducts () {
  const { data } = await api.get('api/catalog') // получаем уже готовый массив
  // Если пришёл массив — возвращаем его, иначе пытаемся взять data.items
  return Array.isArray(data) ? data : (data.items ?? [])
}