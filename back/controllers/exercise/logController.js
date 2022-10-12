import ExerciseLog from "../../models/exercise/logModel.js";
import expressAsyncHandler from "express-async-handler";
import exerciseLogService from "../../services/exercise/exerciseLog.service.js";

//@desc create new logExercise
//@route post/api/exercise/log/create
//@access private
export const createLogExercise = expressAsyncHandler(async (req, res) => {
  const { exerciseId, times } = req.body;
  const prevExercises = await exerciseLogService.saveExerciseLog(req.user._id, exerciseId, times)
});

//@desc get logExercise
//@route get/api/exercise/log/:id
//@access private
export const getLogExercise = expressAsyncHandler(async (req, res) => {
  const exerciseLog = ExerciseLogShema.findById(req.params.id)
    .populate("exercise")
    .lean();
  return res.json(exerciseLog);
});
