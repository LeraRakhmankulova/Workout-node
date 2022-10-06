import express from "express";
import { createExercise, getExercise, removeExercise, updateExercise } from "../controllers/exercise/exerciseController.js";

const exerciseRouter = express.Router();

exerciseRouter.route("/create").post(createExercise);
exerciseRouter.route("/").get(getExercise);
exerciseRouter.route("/update").post(updateExercise);
exerciseRouter.route("/remove").post(removeExercise);

export default exerciseRouter;
