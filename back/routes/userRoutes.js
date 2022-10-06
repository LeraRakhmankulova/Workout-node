import { refreshToken } from "../controllers/token/tokenController.js";
import { loginUser, logoutUser } from "../controllers/user/authController.js";
import { getUserProfile } from "../controllers/user/profileController.js";
import {
  activateUser,
  registerUser,
} from "../controllers/user/regController.js";
import { body } from "express-validator";
import express from "express";

const router = express.Router();

router.route("/profile").get(getUserProfile);
router.route("/reg", body('email').isEmail(), body('password').isLength({min: 3, max: 30})).post(registerUser); // тут был just /
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);
router.route("/activate/:link").get(activateUser);
router.route("/refresh").get(refreshToken);

export default router;
