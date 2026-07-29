export type ChaosCardStatus = "activated" | "deactivated";

export type ChaosCardItem = {
  id: number;
  image: string;
  title: string;
};

export type ChaosCard = {
  isActivated: boolean;
  content: string;
  title: string;
  isUsed: boolean;
};
