import type { ChaosCard, ChaosCardKeys } from "../../types";

export type { ChaosCard, ChaosCardKeys };

export type ChaosCardStatus = "activated" | "deactivated";

export type ChaosCardProps = Pick<
  ChaosCard,
  "id" | "isActivated" | "content" | "title" | "isUsed"
>;
