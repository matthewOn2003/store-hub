// store-hub-server/src/controllers/cartController.ts
import { Request, Response } from 'express'
import { pool } from '../db'

export async function getCart(req: Request, res: Response) {
  const userId = req.params.userId
  const { rows } = await pool.query(`SELECT * FROM cart_items WHERE user_id=$1`, [userId])
  res.json(rows)
}

export async function addToCart(req: Request, res: Response) {
  const { userId, productId, quantity } = req.body
  const { rows } = await pool.query(
    `INSERT INTO cart_items(user_id,product_id,quantity) VALUES($1,$2,$3) RETURNING *`,
    [userId, productId, quantity]
  )
  res.status(201).json(rows[0])
}

export async function updateCartItem(req: Request, res: Response) {
  const { id } = req.params
  const { quantity } = req.body
  const { rows } = await pool.query(
    `UPDATE cart_items SET quantity=$1 WHERE id=$2 RETURNING *`,
    [quantity, id]
  )
  res.json(rows[0])
}

export async function removeCartItem(req: Request, res: Response) {
  const { id } = req.params
  await pool.query(`DELETE FROM cart_items WHERE id=$1`, [id])
  res.status(204).send()
}
