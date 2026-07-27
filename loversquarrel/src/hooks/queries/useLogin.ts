import { login } from "../../api/auth.api";
import { useQuery } from "@tanstack/react-query";

const useLogin = () => {
  return useQuery({
    queryKey: ["login"],
    queryFn: () => login("jaketheplumber", "securePass123"),
    staleTime: Infinity,
  });
};

export default useLogin;
