import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
// Whenever you try to talk to a database, you need to use try catch, becase problems can occur, also always use Async/Await
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`MongoDB Connected!! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB Connection Failed", error);
    process.exit(1);
  }
};

export default connectDB;
