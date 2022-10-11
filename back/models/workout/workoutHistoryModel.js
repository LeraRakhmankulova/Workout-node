import mongoose from "mongoose";

const Schema = mongoose.Schema;

const workoutHistorySchema = mongoose.Shema(
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
      default: false,
    },
  },
  {
    minimize: false,
    timestamps: true,
  }
);

const WorkoutHistory = mongoose.model("WorkoutHistory", workoutHistorySchema);

export default WorkoutHistory;
