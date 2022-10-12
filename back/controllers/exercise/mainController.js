import asyncHandler from "express-async-handler";
import Exercise from "../../models/exercise/mainModel.js";

//@desc create new exercise
//@route post/api/exercise/create
//@access private
export const createExercise = asyncHandler(async(req, res) =>{
    const {name, times, image} = req.body
    const exercise = await Exercise.create({name, times, image})
    return res.json(exercise)
})

//@desc get exercise
//@route get/api/exercise/:id
//@access private
export const getExercise = asyncHandler(async(req, res) => {
   const exercise = await Exercise.findById(req.params.id).populate().lean()
   return res.json(exercise)
})

//@desc create new exercise
//@route post/api/exercise/update
//@access private
export const updateExercise = asyncHandler(async(req, res) => {
    res.json('perfectly')
})

//@desc create new exercise
//@route post/api/exercise/remove
//@access private
export const removeExercise = asyncHandler(async(req, res) => {
    res.json('perfectly')
})

