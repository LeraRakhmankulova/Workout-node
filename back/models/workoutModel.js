import mongoose from "mongoose";

const Schema = mongoose.Schema;

const workoutShema = mongoose.Schema(
  {
    name: { type: String, required: true },
    exercise: { type: Schema.Types.ObjectId, ref: "Exercise" },
  },
  {
    minimize: false,
    timestamps: true,
  }
);

const Workout = mongoose.model("Workout", workoutShema);

export default Workout;
