import User from "./auth.model.js";

const login = async (req) => {
  {
    try {
      const userObject = await User.findOne({
        email: req.body.email,
        password: req.body.password,
      });

      const isMatch = await bcrypt.compare(password, userObject.user?.password);
      if (!isMatch) return { message: "Invalid credentials", status: "Fail" };
      return {
        user: userObject.user,
        status: "Success",
        message: "Login successful",
      };
    } catch (error) {
      return { message: error.message, status: "Fail" };
    }
  }
};

const register = async () => {
  try {
    const user = await User.create(req.body);
    return user;
  } catch (error) {
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

export default { login };
