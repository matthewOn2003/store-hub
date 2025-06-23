// store-hub-app/src/services/categoriesService.ts
import API from './api'
export function getCategories() {
  return API.get('/categories')
}
