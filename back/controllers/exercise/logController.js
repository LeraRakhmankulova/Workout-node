import ExerciseLog from "../../models/exercise/logModel.js";
import exerciseLogService from "../../services/exercise/exerciseLog.service.js";
import asyncHandler from "express-async-handler";

//@desc create new logExercise
//@route post/api/exercise/log/create
//@access private
export const createLogExercise = asyncHandler(async (req, res) => {
  const { exerciseId, times } = req.body;
  await exerciseLogService.saveExerciseLog(req.user._id, exerciseId, times);
});

//@desc get logExercise
//@route get/api/exercise/log/:id
//@access private
export const getLogExercise = asyncHandler(async (req, res) => {
  const exerciseLog = ExerciseLog.findById(req.params.id)
    .populate("exercise", "name imageId")
    .lean();

  if (!exerciseLog) {
    res.status(404);
    throw new Error("Лог не найден");
  }
  const prevExerciseLog = await ExerciseLog.find({
    user: req.user._id,
    exercise: exerciseLog._id,
  }).sort("desc");

  const prevExLog = prevExerciseLog[0];

  const reBuildTimes = (log, prevLog = null) => {
    return log.times.map((item, index) => ({
      ...item,
      prevWeight: prevExLog ? prevExLog.times[index].prevWeight : 0,
      prevRepeat: prevExLog ? prevExLog.times[index].repeat : 0,
    }));
  };

  let newTimes = reBuildTimes(exerciseLog);
  if (prevExLog) newTimes = reBuildTimes(exerciseLog, prevExLog);

  res.json({
    ...exerciseLog,
    times: newTimes,
  });
});

//@desc update logExercise
//@route get/api/exercise/log/update
//@access private
export const updateLogExercise = asyncHandler(async (req, res) => {
  const { logId, timeIndex, key, value } = req.body;
  const currentLog = await ExerciseLog.findById(logId);
  if (!currentLog) {
    res.status(404);
    throw new Error("Данный лог не найден");
  }
  let newTimes = currentLog.times;

  if (!timeIndex || !key || !value) {
    res.status(412);
    throw new Error("Вы не указали все поля");
  }

  newTimes[timeIndex][key] = value;
  currentLog.times = newTimes;
  const updateLog = await currentLog.save();
  res.json(updateLog);
});

//@desc update logExercise
//@route get/api/exercise/log/completed
//@access private
export const updateLogExCompleted = asyncHandler(async (req, res) => {
  const { logId, completed } = req.body;
  const currentLog = await ExerciseLog.findById(logId);
  if (!currentLog) {
    res.status(404);
    throw new Error("Лог не найден");
  }
  currentLog.completed = completed;
  const updatedLog = await currentLog.save();
  res.json(updatedLog);
});
