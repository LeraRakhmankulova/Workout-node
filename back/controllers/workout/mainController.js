import Workout from "../../models/workout/mainModel.js";
import asyncHandler from "express-async-handler";

//@desc create new workout
//@route post/api/workout/create
//@access private
export const createWorkout = asyncHandler(async (req, res) => {
  const { name, exercisesId } = req.body;
  await Workout.create({ name, exercise: exercisesId });
});

//@desc get workout
//@route get/api/workout/:id
//@access private
export const getWorkout = asyncHandler(async (req, res) => {
  const workout = await Workout.findById(req.params.id)
    .populate("exercise")
    .lean();
  const minutes = Math.ceil(workout.exercise.lenght * 3);
  res.json({ ...workout, minutes });
});

//@desc update workout
//@route put/api/workout/:id
//@access private
export const updateWorkout = asyncHandler(async (req, res) => {
  const { name, exerciseId, workoutId } = req.body;
  const workout = await Workout.findById(workoutId);

  if (!workout) {
    res.status(404);
    throw new Error("Тренировка не найдена");
  }
  workout.name = name;
  workout.exercise = exerciseId;

  const updatedWorkout = await workout.save();
  res.json(updatedWorkout);
});

//@desc delete  workout
//@route delete /api/workout/remove
//@access private
export const removeWorkout = asyncHandler(async (req, res) => {
  const { workoutId } = req.body;
  const workout = await Workout.findById(workoutId);

  if (!workout) {
    res.status(404);
    throw new Error("Данная тренировка не найдена");
  }

  await workout.remove();

  res.json("Тренировка удалена");
});
