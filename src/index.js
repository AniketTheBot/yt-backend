import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app, port } from "./app.js";

dotenv.config({
  path: ".env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("Server error:", error);
      throw error;
    });
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error(`MONGO db connection failed!! Error: ${error}`);
  });

/*
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", (error) => {
        console.log(error);
        throw error;
        
    });

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw err;
  }
})();
*/
