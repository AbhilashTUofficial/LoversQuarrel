import { api } from "./client";
import type { getInitalTraits } from "./type";

export const getInitialTraits = (traitsData: getInitalTraits) => {
  return api.post("/ai/getInitialTraits", traitsData);
};

export const getFormattedArgument = (argument: string) => {
  return api.post("/ai/getReformattedArgument", { argument });
};
