import mongoose from "mongoose";

export async function connectDb(params) {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error("MONGO_URI is required");
    }

    const conn = await mongoose.connect(mongoUri)

    console.log("MongoDb connected", conn.connection.host);
  } catch (error) {
    console.log("MongoDb connection error", error.message);
    process.exit(1);
  }
}
