<<<<<<< HEAD
import axios from 'axios';

const API_BASE = 'https://intellectshop.net/'; // или /api/, если ты настроишь красивый маршрут

export const fetchProducts = async () => {
  const res = await axios.get(`${API_BASE}?q=products`);
  return res.data.items || [];
};
=======
import axios from 'axios'

const API_BASE = 'https://intellectshop.net/'  // изменишь позже, если добавишь `/api`

export async function fetchProducts() {
  try {
    const response = await axios.get(`${API_BASE}?q=products`)
    return response.data.items || []
  } catch (error) {
    console.error('Ошибка при получении товаров:', error)
    return []
  }
}
>>>>>>> 6dc26d9 (first2)
