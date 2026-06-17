import type { GameMode, Traits } from "../../../redux/gameSlice";

/** Re-export so consumers import from one place */
export type { GameMode, Traits };

/** Props for the PlayerTraits slider list */
export type PlayerTraitsProps = {
  traits: Traits;
  isBoyfriend: boolean;
  gameMode: GameMode;
};

/** A single rendered trait row */
export type TraitRow = {
  name: string;
  value: number;
};
