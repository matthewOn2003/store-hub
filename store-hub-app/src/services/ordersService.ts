// store-hub-app/src/services/ordersService.ts
import API from './api'
export function createOrder(data: {
  userId: number
  totalAmount: number
  status: string
  shippingAddress: string
}) {
  return API.post('/orders', data)
}
export function getUserOrders(userId: number) {
  return API.get(`/orders/user/${userId}`)
}
export function getOrder(id: number) {
  return API.get(`/orders/${id}`)
}
