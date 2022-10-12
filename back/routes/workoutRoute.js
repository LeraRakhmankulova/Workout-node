import express from "express";
import { createWorkout, getWorkout, removeWorkout, updateWorkout } from "../controllers/workout/mainController.js";

const workoutsRouter = express.Router();

workoutsRouter.route("/:id").get(getWorkout);
workoutsRouter.route("/create").post(createWorkout);
workoutsRouter.route("/update").post(updateWorkout);
workoutsRouter.route("/remove").post(removeWorkout);

export default workoutsRouter;
