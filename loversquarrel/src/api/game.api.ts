import { api } from "./client";
import type { argument, getInitalTraits, traits } from "./type";

export const postInitialArgument = (argument: argument) => {
  return api.post("/game/setInitialArgument", { argument });
};

export const postTraits = (traits: traits) => {
  return api.post("/game/setTraits", traits);
};
