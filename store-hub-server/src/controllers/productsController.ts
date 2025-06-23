// store-hub-server/src/controllers/productsController.ts
import { Request, Response } from 'express'
import { pool } from '../db'

export async function listProducts(req: Request, res: Response) {
  const { rows } = await pool.query(`SELECT * FROM products ORDER BY created_at DESC`)
  res.json(rows)
}

export async function getProduct(req: Request, res: Response) {
  const { id } = req.params
  const { rows } = await pool.query(`SELECT * FROM products WHERE id=$1`, [id])
  res.json(rows[0] || null)
}

export async function listByShop(req: Request, res: Response) {
  const { shopId } = req.params
  const { rows } = await pool.query(`SELECT * FROM products WHERE shop_id=$1 ORDER BY name`, [shopId])
  res.json(rows)
}
