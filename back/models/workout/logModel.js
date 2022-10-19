import mongoose from "mongoose";

const Schema = mongoose.Schema;

const workoutLogSchema = mongoose.Shema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    workout: {
      type: Schema.Types.ObjectId,
      ref: "Workout",
      required: true,
    },
    completed: {
      type: Boolean,
      default: true,
    },
  },
  {
    minimize: false,
    timestamps: true,
  }
);

const WorkoutLog = mongoose.model("WorkoutLog", workoutLogSchema);

export default WorkoutLog;
