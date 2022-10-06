import userService from "../../services/user/user.service.js";
import asyncHandler from "express-async-handler";

//@desc login user
//@route post /api/login
//@access private
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const userData = await userService.login(email, password);
  res.cookie("refreshToken", userData.refreshToken, {
    maxAge: 14 * 24 * 3600000,
    httpOnly: true,
  });
  return res.json(userData);
});

//@desc logout user
//@route post /api/logout
//@access private
export const logoutUser = asyncHandler(async (req, res) => {
  const { refreshToken } = req.body;
  const token = await userService.logout(refreshToken);
  res.clearCookie("refreshCookie");
  return res.status(200);
});
