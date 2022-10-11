import express from "express";
import { createWorkout, getWorkout, removeWorkout, updateWorkout } from "../controllers/workout/workoutController.js";

const workoutsRouter = express.Router();

workoutsRouter.route("/create").post(createWorkout);
workoutsRouter.route("/").get(getWorkout);
workoutsRouter.route("/update").post(updateWorkout);
workoutsRouter.route("/remove").post(removeWorkout);

export default workoutsRouter;
