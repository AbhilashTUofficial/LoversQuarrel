import { useMutation, useQuery } from "@tanstack/react-query";
import type { argument, traits } from "../api/type";
import { postInitialArgument, postTraits } from "../api/game.api";

const useSetTraits = () => {
  return useMutation({
    mutationKey: ["setTraits"],
    mutationFn: (traits: traits) => postTraits(traits),
  });
};

export default useSetTraits;
