// store-hub-server/src/routes/shops.ts
import { Router } from 'express'
import { listShops, getShop } from '../controllers/shopsController'
const router = Router()
router.get('/', listShops)
router.get('/:id', getShop)
export default router
