/** Re-export so consumers import from one place */

/** Props for the PlayerTraits slider list */
export type PlayerTraitsProps = {
  isBoyfriend: boolean;
};

/** A single rendered trait row */
export type TraitRow = {
  name: string;
  value: number;
};
