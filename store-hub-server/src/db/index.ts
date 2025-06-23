// store-hub-server/src/db/index.ts
import { Pool } from 'pg'
import dotenv from 'dotenv'
dotenv.config()

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})
