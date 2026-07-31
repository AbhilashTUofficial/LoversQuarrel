import type React from "react";
import type { GameMode } from "../../../types";

export interface ModeConfig {
  label: string;
  className: string;
  next: GameMode;
  icon: React.ReactNode;
}
