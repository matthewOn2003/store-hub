// store-hub-server/src/routes/categories.ts
import { Router } from 'express'
import { listCategories } from '../controllers/categoriesController'
const router = Router()
router.get('/', listCategories)
export default router
