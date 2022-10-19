import ExerciseLog from "../../models/exercise/logModel.js";
import exerciseLogService from "../../services/exercise/exerciseLog.service.js";
import asyncHandler from "express-async-handler";
import WorkoutLog from "../../models/workout/logModel.js";

//@desc create new logWorkout
//@route post/api/workout/log/create
//@access private
export const createLogWorkout = asyncHandler(async (req, res) => {
  const { workoutId, times } = req.body;
  const workoutLog = await WorkoutLog.create({
    user: req.user._id,
    workout: workoutId
  })
  res.json(workoutLog)
});

