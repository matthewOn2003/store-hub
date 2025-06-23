// store-hub-server/src/routes/orders.ts
import { Router } from 'express'
import { createOrder, listOrders, getOrder } from '../controllers/ordersController'
const router = Router()
router.post('/', createOrder)
router.get('/user/:userId', listOrders)
router.get('/:id', getOrder)
export default router
