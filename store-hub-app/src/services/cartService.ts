// store-hub-app/src/services/cartService.ts
import API from './api'
export function getCart(userId: number) {
  return API.get(`/cart/${userId}`)
}
export function addToCart(userId: number, productId: number, quantity: number) {
  return API.post('/cart', { userId, productId, quantity })
}
export function updateCartItem(id: number, quantity: number) {
  return API.put(`/cart/${id}`, { quantity })
}
export function removeCartItem(id: number) {
  return API.delete(`/cart/${id}`)
}
