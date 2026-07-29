import { useMutation } from "@tanstack/react-query";
import type { getInitalTraits } from "../api/type";
import { getInitialTraits } from "../api/ai.api";

const useGetInitialTraits = () => {
  return useMutation({
    mutationKey: ["getInitialTraits"],
    mutationFn: (traitsData: getInitalTraits) => getInitialTraits(traitsData),
  });
};

export default useGetInitialTraits;
