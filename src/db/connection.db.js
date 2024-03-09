import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDb = async () => {
  try {
    const response = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    )
    console.log("\nMongodb Connected...")
    console.log(`Connection Hos: ${response.connection.host}`)
  } catch (error) {
    console.error(error)
  }
}

export { connectDb }
