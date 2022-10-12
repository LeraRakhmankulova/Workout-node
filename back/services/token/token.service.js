import Token from "../../models/tokenModel.js";
import jwt from "jsonwebtoken";
import { token } from "morgan";
import { UserDto } from "../../dto/user.dto.js";

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "30m",
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "14d",
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(user, refreshToken) {
    const existingUser = await Token.findOne({ user });

    if (existingUser) {
      existingUser.refreshToken = refreshToken;
      return existingUser.save();
    }
    const token = await Token.create({
      user,
      refreshToken,
    });
    return token;
  }

  async findToken(refreshToken){
    const tokenData = Token.findOne({refreshToken})
    return tokenData
  }

  async refresh(refreshToken){
    const tokenFromDb = await this.findToken(refreshToken);
    if(!refreshToken || !tokenFromDb){
      throw Error('Пользователь не авторизрван')
    }
    const user = await Token.findOne({user}) //???
    const userDto = new UserDto(user)
    const tokens =  this.generateToken({...userDto})

    await this.saveToken(userDto.id, tokens.refreshToken)
    return {...tokens, user: userDto}
  }

  async removeToken(refreshToken){
    const tokenData = await Token.deleteOne({refreshToken})
    return tokenData
  }
}

export default new TokenService();
