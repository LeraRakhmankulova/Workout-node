import ExerciseLog from "../../models/exercise/logModel.js";

class ExerciseLogService {
  async saveExerciseLog(user, exercise, times) {
    let timesArr = [];

    for (let i = 0; i < times; i++) {
      timesArr.push({
        weight: 0,
        repeat: 0,
      });
    }

    const logExercise = await ExerciseLog.create({
      user: req.user._id,
      exercise,
      times: timesArr,
    });

    return logExercise;
  }

//   async getExerciseLog(user, exercise, times) {

}

export default new ExerciseLogService();
