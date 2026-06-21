import User from "./auth.model.js";
import bcrypt from "bcryptjs";

const login = async (user) => {
  {
    console.log("user", user);
    try {
      const userObject = await User.findOne({
        username: user.username,
        password: user.password,
      });

      if (!userObject)
        return { message: "Invalid credentials", status: "Fail" };
      console.log("userObject", userObject);

      const isMatch = await bcrypt.compare(
        user.password,
        userObject.user?.password,
      );
      if (!isMatch) return { message: "Invalid credentials", status: "Fail" };
      return {
        user: userObject.user,
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
  console.log("req", req);
  try {
    const user = await User.create({
      username: req.username,
      password: req.password,
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

export default { login, register, logout };
