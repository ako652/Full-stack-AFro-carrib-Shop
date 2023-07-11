import dotenv from "dotenv";
// connect database
import mongoose from "mongoose";

import app from "./app";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => {
    app.listen(8000, () => console.log("server is running at port 8000"));
  })
  .catch((error) => console.log(error));
