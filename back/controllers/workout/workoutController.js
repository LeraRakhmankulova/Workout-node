import asyncHandler from "express-async-handler";
import Workout from "../../models/workout/workoutModel.js";

//@desc create new workout
//@route post/api/workout/create
//@access private
export const createWorkout = asyncHandler(async(req, res) => {
    const {name, exercisesId} = req.body
    const workout = await Workout.create({name, exercise: exercisesId})
    res.json(workout)
})

//@desc get workout
//@route get/api/workout/
//@access private
export const getWorkout = asyncHandler(async(req, res) => {
    const workout = await Workout.findById(req.params.id).populate('exercise')
    res.json(workout)
})

//@desc create new workout
//@route post/api/workout/update
//@access private
export const updateWorkout = asyncHandler(async(req, res) => {
    res.json('perfectly')
})

//@desc create new workout
//@route post/api/workout/remove
//@access private
export const removeWorkout = asyncHandler(async(req, res) => {
    res.json('perfectly')
})