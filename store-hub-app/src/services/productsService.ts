// store-hub-app/src/services/productsService.ts
import API from './api'
export function getAllProducts() {
  return API.get('/products')
}
export function getProduct(id: number) {
  return API.get(`/products/${id}`)
}
export function getProductsByShop(shopId: number) {
  return API.get(`/products/shop/${shopId}`)
}
