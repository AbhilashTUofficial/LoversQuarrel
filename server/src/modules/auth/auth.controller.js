import authService from "./auth.service.js";

const register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.send(user);
  } catch (error) {}
};

const login = async (req, res) => {
  try {
    console.log("req.body", req.body);
    const user = await authService.login(req.body);
    res.send(user);
  } catch (error) {}
};

const logout = async (req, res) => {
  res.send("logout");
};

export default { register, login, logout };
