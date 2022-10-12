import express from "express";
import { createLogExercise, getLogExercise } from "../controllers/exercise/logController.js";
import { createExercise, getExercise, removeExercise, updateExercise } from "../controllers/exercise/mainController.js";

const exerciseRouter = express.Router();

exerciseRouter.route("/:id").get(getExercise);
exerciseRouter.route("/log/:id").get(getLogExercise);

exerciseRouter.route("/create").post(createExercise);
exerciseRouter.route("/log/create").post(createLogExercise);

exerciseRouter.route("/update").post(updateExercise);
exerciseRouter.route("/remove").post(removeExercise);

export default exerciseRouter;
