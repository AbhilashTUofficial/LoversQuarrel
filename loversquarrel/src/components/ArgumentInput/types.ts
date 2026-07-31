import type { Trait, GameMode } from "../../types";

export type { Trait };

export interface PlayerTraitsProps {
  traits: Trait[];
  isBoyfriend: boolean;
  gameMode: GameMode;
}

export interface ArgumentInputProps {
  isBfTabActive: boolean;
}
