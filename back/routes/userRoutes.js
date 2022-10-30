import { refreshToken } from "../controllers/token/tokenController.js";
import { loginUser, logoutUser } from "../controllers/user/authController.js";
import { getUserProfile } from "../controllers/user/profileController.js";
import {
  activateUser,
  registerUser,
} from "../controllers/user/regController.js";
import { body } from "express-validator";
import express from "express";

const userRouter = express.Router();

userRouter.route("/:id").get(getUserProfile)
  .post(registerUser, body('email').isEmail(), body('password').isLength({min: 3, max: 30}))
.route("/login").post(loginUser)
.route("/logout").post(logoutUser)
.route("/activate/:link").get(activateUser)
.route("/refresh").get(refreshToken)

export default userRouter;
