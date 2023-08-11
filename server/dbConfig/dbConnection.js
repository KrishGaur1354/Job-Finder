import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// DB Connection
const dbConnection = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGODB_URL);

    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export default dbConnection;
