//@desc user profile
//@route get /api/users/profile
import ExerciseLog from "../../models/exercise/logModel";
import User from "../../models/userModel";
import WorkoutLog from "../../models/workout/logModel";

//@access private
export const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id).select("-password").lean;

  const exerciseLogByUser = await ExerciseLog.find({
    user: user._id,
    completed: true,
  });

  let countExerciseTimesCompleted = 0;
  let kgs = 0;

  exerciseLogByUser.forEach((log) => {
    countExerciseTimesCompleted += log.times.length;
    log.times.forEach((item) => {
      kgs += item.weight;
    });
  });

  const minutes = Math.ceil(countExerciseTimesCompleted * 2.3);
  const workouts = await WorkoutLog.find({
    user: user._id,
    completed: true,
  }).countDocuments();

  res.json({
    ...user,
    minutes,
    workouts,
    kgs,
  });
};
