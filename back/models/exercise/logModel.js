import mongoose from "mongoose";

const Schema = mongoose.Schema;

const exerciseLogShema = mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    exercise: {
      type: Schema.Types.ObjectId,
      ref: "Exercise",
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
    times: [{
        weight: {type: Number, required: true},
        repeat: {type: Number, required: true},
        completed: {type: Boolean, default: false}
    }]
  },
  {
    minimize: false,
    timestamps: true,
  }
);

const ExerciseLog = mongoose.model("ExerciseLog", exerciseLogShema);

export default ExerciseLog;
