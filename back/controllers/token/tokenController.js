import asyncHandler from "express-async-handler";
import tokenService from "../../services/token/token.service.js";

//@desc refresh token
//@route post/api/refresh
//@access private
export const refreshToken = asyncHandler(async (req, res) => {
  const {refreshToken} = await req.cookies
  const userData = await tokenService.refresh(refreshToken);
  res.cookie('refreshToken', userData.refreshToken, {maxAge: 14 * 24 * 3600000, httpOnly: true })
  return res.json(userData);
});
