import authService from "./auth.service.js";

const register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    await authService.createUserGameSettings(req.body);
    res.send(user);
  } catch (error) { }
};

const login = async (req, res) => {
  try {
    const user = await authService.login(req.body);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

const logout = async (req, res) => {
  res.send("logout");
};

export default { register, login, logout };
