import express from "express";
import { createLogWorkout } from "../controllers/workout/logController.js";
import { createWorkout, getWorkout, removeWorkout, updateWorkout } from "../controllers/workout/mainController.js";

const workoutsRouter = express.Router();

workoutsRouter.route("/:id").get(getWorkout);

workoutsRouter.route("/create").post(createWorkout);
workoutsRouter.route("/log/create").post(createLogWorkout);

workoutsRouter.route("/:id").put(updateWorkout);
workoutsRouter.route("/remove").delete(removeWorkout);

export default workoutsRouter;
