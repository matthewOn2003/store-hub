// store-hub-server/src/routes/users.ts
import { Router } from 'express'
import { register, login } from '../controllers/usersController'
const router = Router()
router.post('/register', register)
router.post('/login', login)
export default router
