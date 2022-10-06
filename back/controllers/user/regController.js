import User from "../../models/userModel.js";
import userService from "../../services/user/user.service.js";
import asyncHandler from "express-async-handler";
import { validationResult } from "express-validator";

//@desc user registration
//@route post/api/registration
//@access public
export const registerUser = asyncHandler(async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    res.status(400);
    throw Error("Поле некорректно");
  }
  const { email, password } = req.body;
  const userData = await userService.register(email, password);
  res.cookie("refreshToken", userData.refreshToken, {
    maxAge: 14 * 24 * 3600000,
    httpOnly: true,
  }); //важно указывать httponly
  return res.json(userData);
});

//@desc activate user
//@route get/api/activate/:link
//@access private
export const activateUser = asyncHandler(async (req, res) => {
  const activationLink = req.params.link;
  userService.activate(activationLink);
  res.redirect(process.env.CLIENT_URL);
});
