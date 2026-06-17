import type { GameMode } from "../../../redux/gameSlice";
import type React from "react";

export type { GameMode };

/** One entry in the rotating game-mode button cycle */
export type ModeConfig = {
  label: string;
  className: string;
  /** The *next* mode this button will cycle to when clicked */
  next: GameMode;
  icon: React.ReactNode;
};
