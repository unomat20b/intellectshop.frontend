import axios from 'axios'
import { normalizeApiError } from './errors'

const apiBase = (__API_BASE__ || '/api').replace(/\/+$/, '')
const apiOrigin = /^https?:\/\//.test(apiBase) ? new URL(apiBase).origin : ''

const api = axios.create({
  baseURL: apiBase,
})

async function request(path, { method = 'get', data, fallbackMessage, transform } = {}) {
  try {
    const response = await api.request({ url: path, method, data })
    const payload = response?.data
    return typeof transform === 'function' ? transform(payload) : payload
  } catch (error) {
    const normalizedMethod = String(method).toLowerCase()
    if (normalizedMethod === 'get' && error?.response?.status === 404) {
      const emptyPayload = null
      return typeof transform === 'function' ? transform(emptyPayload) : emptyPayload
    }
    throw normalizeApiError(error, { fallbackMessage })
  }
}

export async function fetchProducts () {
  return request('/catalog', {
    fallbackMessage: 'Не удалось загрузить каталог.',
    transform: (payload) => (Array.isArray(payload) ? payload : (payload?.items ?? []))
  })
}

export async function fetchServices () {
  return request('/services', {
    fallbackMessage: 'Не удалось загрузить список услуг.',
    transform: (payload) => (Array.isArray(payload) ? payload : [])
  })
}

export async function fetchProjects () {
  return request('/projects', {
    fallbackMessage: 'Не удалось загрузить проекты.',
    transform: (payload) => (Array.isArray(payload) ? payload : [])
  })
}

export async function fetchAbout () {
  return request('/about', {
    fallbackMessage: 'Не удалось загрузить информацию о компании.',
    transform: (payload) => payload ?? null
  })
}

export async function submitFeedback ({ name, email, message, tag = '' }) {
  const formData = new FormData()
  formData.append('name', name)
  formData.append('email', email)
  formData.append('message', message)
  formData.append('tag', tag)

  const feedbackUrl = apiOrigin ? new URL('/api-feedback', apiOrigin).toString() : '/api-feedback'
  return request(feedbackUrl, {
    method: 'post',
    data: formData,
    fallbackMessage: 'Не удалось отправить сообщение.'
  })
}
