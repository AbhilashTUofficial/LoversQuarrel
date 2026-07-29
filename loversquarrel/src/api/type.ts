import type { Traits } from "../redux/types";

export type argument = {
  username: string;
  boyfriend?: {
    initialArgument: string;
  };
  girlfriend?: {
    initialArgument: string;
  };
};

export type traits = {
  username: string;
  traits: {
    boyfriend?: {
      traits: Traits;
    };
    girlfriend?: {
      traits: Traits;
    };
  };
};

export type getInitalTraits = {
  username: string;
  argument: string;
  tags: string[];
};
