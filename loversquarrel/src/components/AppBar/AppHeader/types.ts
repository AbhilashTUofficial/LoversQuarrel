import type React from "react";

/** One entry in the rotating game-mode button cycle */
export type ModeConfig = {
  label: string;
  className: string;
  /** The *next* mode this button will cycle to when clicked */
  next: "ai" | "dual" | "solo";
  icon: React.ReactNode;
};
