import { useMutation } from "@tanstack/react-query";
import type { traits } from "../api/type";
import { postTraits } from "../api/game.api";

const useSetTraits = () => {
  return useMutation({
    mutationKey: ["setTraits"],
    mutationFn: (traits: traits) => postTraits(traits),
  });
};

export default useSetTraits;
