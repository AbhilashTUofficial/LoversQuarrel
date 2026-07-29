import { useMutation, useQuery } from "@tanstack/react-query";
import type { argument } from "../api/type";
import { postInitialArgument } from "../api/game.api";

const useSetInitialArg = () => {
  return useMutation({
    mutationKey: ["setInitialArgument"],
    mutationFn: (argument: argument) => postInitialArgument(argument),
  });
};

export default useSetInitialArg;
