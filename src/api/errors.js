import axios from 'axios'

export class ApiError extends Error {
  constructor(message, { status = 0, code = 'API_ERROR', details = null, cause = null } = {}) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.code = code
    this.details = details
    this.cause = cause
  }
}

function extractServerMessage(payload) {
  if (!payload) return ''
  if (typeof payload === 'string') return payload

  if (typeof payload.message === 'string' && payload.message.trim()) return payload.message
  if (typeof payload.error === 'string' && payload.error.trim()) return payload.error
  if (typeof payload.detail === 'string' && payload.detail.trim()) return payload.detail

  return ''
}

export function normalizeApiError(error, { fallbackMessage = 'Ошибка сети. Попробуйте еще раз.' } = {}) {
  if (error instanceof ApiError) return error

  if (axios.isAxiosError(error)) {
    const status = error.response?.status ?? 0
    const payload = error.response?.data
    const serverMessage = extractServerMessage(payload)
    const message = serverMessage || fallbackMessage
    const code = error.code || (status ? `HTTP_${status}` : 'NETWORK_ERROR')

    return new ApiError(message, {
      status,
      code,
      details: payload ?? null,
      cause: error
    })
  }

  if (error instanceof Error) {
    return new ApiError(error.message || fallbackMessage, {
      code: 'UNKNOWN_ERROR',
      cause: error
    })
  }

  return new ApiError(fallbackMessage, { code: 'UNKNOWN_ERROR', details: error ?? null })
}

export function getErrorMessage(error, fallbackMessage = 'Ошибка сети. Попробуйте еще раз.') {
  if (error instanceof ApiError) return error.message || fallbackMessage
  if (error instanceof Error) return error.message || fallbackMessage
  return fallbackMessage
}
