// store-hub-server/src/controllers/usersController.ts
import { RequestHandler } from 'express'
import { pool } from '../db/index'

export const register: RequestHandler = async (req, res, next) => {
  try {
    const { email, passwordHash, name } = req.body
    const result = await pool.query(
      `INSERT INTO users(email,password_hash,name) VALUES($1,$2,$3) RETURNING id,email,name,created_at`,
      [email, passwordHash, name]
    )
    res.status(201).json(result.rows[0])
  } catch (err) {
    next(err)
  }
}

export const login: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.body
    const result = await pool.query(
      `SELECT id,email,name,password_hash FROM users WHERE email=$1`,
      [email]
    )
    const user = result.rows[0]
    if (!user) {
      res.status(401).send('Invalid credentials')
      return
    }
    res.json({ id: user.id, email: user.email, name: user.name })
  } catch (err) {
    next(err)
  }
}
