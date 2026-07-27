import { api } from "./client";
import type { argument } from "./type";

export const login = (username: string, password: string) => {
  try {
    return api.post("/auth/login", { username, password });
  } catch (error) {
    return error;
  }
};

export const register = (username: string, password: string) => {
  return api.post("/auth/register", { username, password });
};

export const logout = () => {
  return api.post("/auth/logout");
};

export const setInitialArgument = (argument: argument) => {
  return api.post("/game/setInitialArgument", { argument });
};
