// store-hub-server/src/routes/products.ts
import { Router } from 'express'
import { listProducts, getProduct, listByShop } from '../controllers/productsController'
const router = Router()
router.get('/', listProducts)
router.get('/:id', getProduct)
router.get('/shop/:shopId', listByShop)
export default router
