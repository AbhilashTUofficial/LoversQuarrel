import type { ChaosCardKeys } from "../../redux/gameSlice";

export type { ChaosCardKeys };

export type ChaosCardStatus = "activated" | "deactivated";

/** One chaos card row displayed in ChaosPanel */
export type ChaosCardItem = {
  id: number;
  image: string;
  title: string;
  /** The Redux slice key used to toggle this card's state */
  reduxKey: ChaosCardKeys;
};

/** Props for the individual ChaosCard tile component */
export type ChaosCardProps = ChaosCardItem & {
  isActivated: boolean;
  onToggle: (key: ChaosCardKeys) => void;
};
