import ExerciseLog from "../../models/exercise/logModel.js";

class ExerciseLogService {
  async saveExerciseLog(user, exercise, times ) {
    const prevExercises = await ExerciseLog.find({
        user, exercise,
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

      return logExercise
  }
}

export default new ExerciseLogService();
