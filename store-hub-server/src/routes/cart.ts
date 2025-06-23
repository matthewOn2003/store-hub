// store-hub-server/src/routes/cart.ts
import { Router } from 'express'
import {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
} from '../controllers/cartController'
const router = Router()
router.get('/:userId', getCart)
router.post('/', addToCart)
router.put('/:id', updateCartItem)
router.delete('/:id', removeCartItem)
export default router
