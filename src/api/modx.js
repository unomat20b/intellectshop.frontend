import axios from 'axios';

const API_BASE = 'https://intellectshop.net/'; // или /api/, если ты настроишь красивый маршрут

export const fetchProducts = async () => {
  const res = await axios.get(`${API_BASE}?q=products`);
  return res.data.items || [];
};