import ExerciseLog from "../../models/exercise/logModel.js";
import expressAsyncHandler from "express-async-handler";

//по хорошему вынести бы енто в сервис!!!

//@desc create new logExercise
//@route post/api/exercise/log/create
//@access private
export const createLogExercise = expressAsyncHandler(async (req, res) => {
  const { exerciseId, times } = req.body;
  const prevExercises = await ExerciseLog.find({
    user: req.user._id,
    exercise: exerciseId,
  }).sort("desc");
  let timesArr = [];

  if (prevExercises[0]) {
    timesArr = prevExercises[0].times; //количество подходов в певром по дате упражнении созданным юзером
  } else {
    for (let i = 0; i < times; i++) {
      timesArr.push({
        weight: 0,
        repeat: 0,
      });
    }
  }

  const logExercise = await ExerciseLog.create({
    user: req.user._id,
    exercise: exerciseId,
    times: timesArr,
  });
  return res.json(logExercise);
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
