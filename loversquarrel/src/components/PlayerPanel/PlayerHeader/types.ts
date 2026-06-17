/** Player stance mode label shown under the player avatar */
export type PlayerStance = "Defensive" | "Offensive" | "Furious";

/** Props for PlayerHeader avatar + name + stance indicator */
export type PlayerHeaderProps = {
  isBoyfriend: boolean;
  mode: PlayerStance;
};
