// store-hub-server/src/controllers/ordersController.ts
import { Request, Response } from 'express'
import { pool } from '../db'

export async function createOrder(req: Request, res: Response) {
  const { userId, totalAmount, status, shippingAddress } = req.body
  const { rows } = await pool.query(
    `INSERT INTO orders(user_id,total_amount,status,shipping_address) VALUES($1,$2,$3,$4) RETURNING *`,
    [userId, totalAmount, status, shippingAddress]
  )
  res.status(201).json(rows[0])
}

export async function listOrders(req: Request, res: Response) {
  const userId = req.params.userId
  const { rows } = await pool.query(`SELECT * FROM orders WHERE user_id=$1 ORDER BY created_at DESC`, [userId])
  res.json(rows)
}

export async function getOrder(req: Request, res: Response) {
  const { id } = req.params
  const { rows } = await pool.query(`SELECT * FROM orders WHERE id=$1`, [id])
  res.json(rows[0] || null)
}
