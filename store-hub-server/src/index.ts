// store-hub-server/src/index.ts
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import usersRoutes from './routes/users'
import shopsRoutes from './routes/shops'
import categoriesRoutes from './routes/categories'
import productsRoutes from './routes/products'
import cartRoutes from './routes/cart'
import ordersRoutes from './routes/orders'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/users', usersRoutes)
app.use('/api/shops', shopsRoutes)
app.use('/api/categories', categoriesRoutes)
app.use('/api/products', productsRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/orders', ordersRoutes)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on http://localhost:${port}`))
