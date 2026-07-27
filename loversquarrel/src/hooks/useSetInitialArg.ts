import { useQuery } from "@tanstack/react-query";
import { setInitialArgument } from "../api/auth.api";

const useSetInitialArg = () => {
  return useQuery({
    queryKey: ["setInitialArgument"],
    queryFn: () =>
      setInitialArgument({
        username: "defaultUser",
        boyfriend: { initialArgument: "I am a boyfriend" },
        girlfriend: { initialArgument: "I am a girlfriend" },
      }),
  });
};

export default useSetInitialArg;
