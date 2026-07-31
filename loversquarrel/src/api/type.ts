import type { Traits, UserRole } from "../types";

export interface ArgumentPayload {
  username: string;
  boyfriend?: { initialArgument: string };
  girlfriend?: { initialArgument: string };
}

export type argument = ArgumentPayload;

export interface PlayerTraitsPayload {
  traits: Partial<Record<UserRole, { traits: Traits }>>;
}

export type traits = { username: string } & PlayerTraitsPayload;

export interface GetInitialTraitsPayload {
  username: string;
  argument: string;
  tags: string[];
}

export type getInitalTraits = GetInitialTraitsPayload;
