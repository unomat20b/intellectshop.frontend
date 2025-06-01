<<<<<<< HEAD
import axios from 'axios'
=======
<<<<<<< HEAD
import axios from 'axios';
>>>>>>> b4f01abae259e267e66ebe460c690156fa0e4ab2

const API_BASE = 'https://intellectshop.net/'  // изменишь позже, если добавишь `/api`

export const fetchProducts = async () => {
<<<<<<< HEAD
=======
  const res = await axios.get(`${API_BASE}?q=products`);
  return res.data.items || [];
};
=======
import axios from 'axios'

const API_BASE = 'https://intellectshop.net/'  // изменишь позже, если добавишь `/api`

export async function fetchProducts() {
>>>>>>> b4f01abae259e267e66ebe460c690156fa0e4ab2
  try {
    const response = await axios.get(`${API_BASE}?q=products`)
    return response.data.items || []
  } catch (error) {
    console.error('Ошибка при получении товаров:', error)
    return []
  }
}
<<<<<<< HEAD
=======
>>>>>>> 6dc26d9 (first2)
>>>>>>> b4f01abae259e267e66ebe460c690156fa0e4ab2
