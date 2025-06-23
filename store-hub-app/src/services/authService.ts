// store-hub-app/src/services/authService.ts
import API from './api'
export function register(user: { email: string; passwordHash: string; name?: string }) {
  return API.post('/users/register', user)
}
export function login(credentials: { email: string; passwordHash: string }) {
  return API.post('/users/login', credentials)
}
