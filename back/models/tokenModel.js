import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tokenShema = mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    refreshToken: { type: String, required: true },
  },
  {
    minimize: false,
    timestamps: true,
  }
);

const Token = mongoose.model("Token", tokenShema);

export default Token;
