import dotenv from 'dotenv'
import { connectDb } from './db/connection.db.js'
dotenv.config({ path: './.env' })

const port = process.env.PORT || 3000

import { app } from './app.js'

connectDb().then(() => {
  app.listen(port, () =>
    console.log(`\n Server started at: http://localhost:${port}`)
  )
})
