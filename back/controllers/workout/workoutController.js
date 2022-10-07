import asyncHandler from "express-async-handler";


//@desc create new workout
//@route post/api/workout/create
//@access private
export const createWorkout = asyncHandler(async(req, res) => {
    const {name, exercisesId} = req.body
})