import Exercise from "../../models/exercise/mainModel.js";
import asyncHandler from "express-async-handler";

//@desc create new exercise
//@route post/api/exercise/create
//@access private
export const createExercise = asyncHandler(async (req, res) => {
  const { name, times, image } = req.body;
  await Exercise.create({ name, times, image });
});

//@desc get exercise
//@route get/api/exercise/:id
//@access private
export const getExercise = asyncHandler(async (req, res) => {
  const exercise = await Exercise.findById(req.params.id).populate().lean();
  return res.json(exercise);
});

//@desc get exercises
//@route get/api/exercises
//@access private
export const getExercises = asyncHandler(async (req, res) => {
    const exercises = await Exercise.find({})
    return res.json(exercises);
  });

//@desc update exercise
//@route put /api/exercise/:id
//@access private
export const updateExercise = asyncHandler(async (req, res) => {
  const { name, times, imageId, exerciseId } = req.body;
  const exercise = await Exercise.findById(exerciseId);

  if (!exercise) {
    res.status(404);
    throw new Error("Данная тренировка не найдена!");
  }

  exercise.name = name;
  exercise.times = times;
  exercise.imageId = imageId;

  const updatedExercise = await exercise.save();
  res.json(updatedExercise);
});

//@desc delete exercise
//@route delete /api/exercise/remove
//@access private
export const removeExercise = asyncHandler(async (req, res) => {
  const { exerciseId } = req.body;
  const exercise = await Exercise.findById(exerciseId);

  if (!exercise) {
    res.status(404);
    throw new Error("Упражнения не найдено!");
  }

  await exercise.remove();
  res.json("Упражнение удалено");
});
