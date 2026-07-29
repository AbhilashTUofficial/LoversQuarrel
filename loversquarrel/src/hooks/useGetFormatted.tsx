import { useMutation } from "@tanstack/react-query";
import type { argument } from "../api/type";
import { getFormattedArgument } from "../api/ai.api";

const useGetFormatted = () => {
    return useMutation({
        mutationKey: ["getFormattedArgument"],
        mutationFn: (argument: argument) => getFormattedArgument(argument),
    });
};

export default useGetFormatted;
