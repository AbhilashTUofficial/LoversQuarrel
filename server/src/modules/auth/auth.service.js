import User from "./auth.model.js";
import gameSettings from "../game/game.model.js"
import bcrypt from "bcryptjs";

const login = async (user) => {
  {
    try {
      const userObject = await User.findOne({
        username: user.username,
      });

      if (!userObject)
        return { message: "Invalid credentials", status: "Fail" };
      const isMatch = await bcrypt.compare(
        user.password,
        userObject.password,
      );
      if (!isMatch) return { message: "Invalid credentials", status: "Fail" };
      return {
        user: userObject,
        status: "Success",
        message: "Login successful",
      };
    } catch (error) {
      console.log(error);
      return { message: error.message, status: "Fail" };
    }
  }
};

const register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.password, 10);
    const user = await User.create({
      username: req.username,
      password: hashedPassword,
      email: req.email,
    });
    return user;
  } catch (error) {
    console.log(error);
    return { message: error.message, status: "Fail" };
  }
};

const logout = async () => {
  try {
    return { message: "Logout successful", status: "Success" };
  } catch (error) {
    return { message: error.message, status: "Fail" };
  }
};

const createUserGameSettings = async (req, res) => {
  try {
    const gameSettingsData = await gameSettings.create({
      username: req.username,
      boyfriend: {
        username: "Boyfriend",
        id: "bf_default",
        initialArgument: "Hello",
        traits: {
          intellect: 0,
          logic: 0,
          drama: 0,
          sarcasm: 0,
          stubborness: 0,
          confidence: 0,
          memory: 0,
          empathy: 0
        }
      },
      girlfriend: {
        username: "Girlfriend",
        id: "gf_default",
        initialArgument: "Hello",
        traits: {
          intellect: 0,
          logic: 0,
          drama: 0,
          sarcasm: 0,
          stubborness: 0,
          confidence: 0,
          memory: 0,
          empathy: 0
        }
      }
    })
    return gameSettingsData;
  } catch (error) {
    console.log(error);
    return { message: error.message, status: "Fail" };
  }
}

export default { login, register, logout, createUserGameSettings };
