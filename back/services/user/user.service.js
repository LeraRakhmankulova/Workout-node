import { UserDto } from "../../dto/user.dto.js";
import User from "../../models/userModel.js";
import tokenService from "../token/token.service.js";
import mailService from "./mail.service.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";

class UserService {
  async register(email, password) {
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      throw Error("Данный пользователь уже зарегистрирован");
    }
    const activationLink = uuidv4();
    const user = await User.create({
      email,
      password,
      activationLink,
    });

    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/activate/${activationLink}`
    );

    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto,
    };
  }

  async login(email, enteredPassword){
    const user = await User.findOne({email});
    if (!user){
      throw Error('Пользователя с таким email не существует')
    }
    const isEquals =  await bcrypt.compare(enteredPassword, user.password);
    if (!isEquals){
      throw Error('Неверный пароль')
    }

    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({...userDto});
    await tokenService.saveToken({...tokens, user: userDto})
    
  }

  async logout(refreshToken){
    const token = await tokenService.removeToken(refreshToken) 
    return token;
  }

  async activate(activationLink) {
    const user = await User.findOne({ activationLink });
    if (!user) {
      throw Error("Ссылка некорректна");
    }
    user.isActivated = true;
    await user.save();
  }
}

export default new UserService();
