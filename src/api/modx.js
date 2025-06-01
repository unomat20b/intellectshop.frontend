import axios from 'axios'

const API_BASE = 'https://intellectshop.net/'  // изменишь позже, если добавишь `/api`

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE}?q=products`)
    return response.data.items || []
  } catch (error) {
    console.error('Ошибка при получении товаров:', error)
    return []
  }
}
