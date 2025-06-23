// store-hub-server/src/controllers/shopsController.ts
import { Request, Response } from 'express'
import { pool } from '../db'

export async function listShops(req: Request, res: Response) {
  const { rows } = await pool.query(`SELECT * FROM shops ORDER BY created_at DESC`)
  res.json(rows)
}

export async function getShop(req: Request, res: Response) {
  const { id } = req.params
  const { rows } = await pool.query(`SELECT * FROM shops WHERE id=$1`, [id])
  res.json(rows[0] || null)
}
