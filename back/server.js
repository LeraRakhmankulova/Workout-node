import { connectDB } from "./config/db.js";
import { errorHandler, notFount } from "./middleware/errorMiddkeware.js";
import router from "./routes/userRoutes.js";
import colors from "colors";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(express.json());
app.use(cookieParser()); //!important for refreshToken
app.use(cors());
app.use("/api", router);
app.use(notFount);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.bgMagenta
      .bold
  )
);
