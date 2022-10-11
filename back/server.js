import { connectDB } from "./config/db.js";
import { errorHandler, notFount } from "./middleware/errorMiddkeware.js";
import colors from "colors";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import userRouter from "./routes/userRoutes.js";
import exerciseRouter from "./routes/exerciseRoutes.js";
import workoutsRouter from "./routes/workoutRoute.js";

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(express.json());
app.use(cookieParser()); //!important for refreshToken
app.use(cors());
app.use("/api/user", userRouter);
app.use("/api/exercise", exerciseRouter);
app.use("/api/workout", workoutsRouter);
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
