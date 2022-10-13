import {
  createLogExercise,
  getLogExercise,
  updateLogExCompleted,
  updateLogExercise,
} from "../controllers/exercise/logController.js";
import {
  createExercise,
  getExercise,
  removeExercise,
  updateExercise,
} from "../controllers/exercise/mainController.js";
import express from "express";

const exerciseRouter = express.Router();

exerciseRouter.route("/create").post(createExercise);
exerciseRouter.route("/log/create").post(createLogExercise);

exerciseRouter.route("/update").put(updateExercise);
exerciseRouter.route("/log/update").put(updateLogExercise);
exerciseRouter.route("/log/update/completed").put(updateLogExCompleted);

exerciseRouter.route("/:id").get(getExercise);
exerciseRouter.route("/log/:id").get(getLogExercise);

exerciseRouter.route("/remove").delete(removeExercise);

export default exerciseRouter;
