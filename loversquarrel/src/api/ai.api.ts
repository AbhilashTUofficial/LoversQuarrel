import { api } from "./client";
import type { argument, getInitalTraits } from "./type";

export const getInitialTraits = (traitsData: getInitalTraits) => {
  return api.post("/ai/getInitialTraits", traitsData);
};

export const getFormattedArgument = (argument: argument) => {
  return api.post("/ai/getReformattedArgument", { argument });
};
