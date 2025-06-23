// store-hub-app/src/services/shopsService.ts
import API from './api'
export function getAllShops() {
  return API.get('/shops')
}
export function getShop(id: number) {
  return API.get(`/shops/${id}`)
}
