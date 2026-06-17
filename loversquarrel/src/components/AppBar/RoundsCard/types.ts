/** Status label describing the heat level of the current round */
export type RoundStatus =
  | "Chill ❄️"
  | "Heated 🔥"
  | "Toxic ☠️"
  | "Nuclear 💥";

/** Round data shape from Redux */
export type RoundState = {
  roundNumber: number;
  roundStatus: RoundStatus | string; // string fallback for custom statuses
};
