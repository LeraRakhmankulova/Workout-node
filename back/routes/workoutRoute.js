import express from "express";
import { createWorkout, getWorkout, removeWorkout, updateWorkout } from "../controllers/workout/workoutController.js";

const workoutRouter = express.Router();

workoutRouter.route("/create").post(createWorkout);
workoutRouter.route("/").get(getWorkout);
workoutRouter.route("/update").post(updateWorkout);
workoutRouter.route("/remove").post(removeWorkout);

export default workoutRouter;
