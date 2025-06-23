// store-hub-server/src/controllers/categoriesController.ts
import { Request, Response } from 'express'
import { pool } from '../db'

export async function listCategories(req: Request, res: Response) {
  const { rows } = await pool.query(`SELECT * FROM categories ORDER BY name`)
  res.json(rows)
}
