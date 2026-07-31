export type UserRole = "boyfriend" | "girlfriend";
export type UserRoleWithNull = UserRole | null;
export type ArgumentSender = UserRole | "system";
export type GameMode = "ai" | "dual" | "solo";
export type PlayerStance = "Defensive" | "Offensive" | "Furious";
export type RoundStatus = "Chill ❄️" | "Heated 🔥" | "Toxic ☠️" | "Nuclear 💥";

export type ChaosCardKeys =
  | "oldIncidentChaosCard"
  | "evidenceChaosCard"
  | "includeMomChaosCard"
  | "leaveOnReadChaosCard"
  | "bestFriendChaosCard";

export type StatsKeys =
  | "relationshipStat"
  | "dramaStat"
  | "logicStat"
  | "toxicityStat";

export interface Traits {
  intellect: number;
  logic: number;
  drama: number;
  sarcasm: number;
  stubbornness: number;
  confidence: number;
  memory: number;
  empathy: number;
}

export interface Trait {
  name: string;
  value: number;
}

export interface ChaosCard {
  id: ChaosCardKeys | string | number;
  isActivated: boolean;
  content: string;
  title: string;
  isUsed: boolean;
}

export type ChaosCards = Record<ChaosCardKeys, ChaosCard>;

export interface Argument {
  id: number | string;
  from: ArgumentSender;
  content: string;
  timestamp: string;
}

export interface CaseDetails {
  caseId: string;
  caseTitle: string;
  caseDescription: string;
}

export interface RoundState {
  roundNumber: number;
  roundStatus: RoundStatus | string;
}

export interface StatCard {
  id: number;
  image: string;
  title: string;
  value: number;
}

export interface PlayerState {
  traits: Traits;
  tags: string[];
  chaosCards: ChaosCards;
  initialArgument: Argument;
}

export interface GameStats {
  relationshipHealth: number;
  relationshipStat: number;
  dramaStat: number;
  logicStat: number;
  toxicityStat: number;
  round: RoundState;
  caseDetails: CaseDetails;
}

export interface GameState {
  gamemode: GameMode;
  game: {
    currentUserType: UserRole;
    gameStarted: boolean;
    stats: GameStats;
    boyfriend: PlayerState;
    girlfriend: PlayerState;
    argumentStack: Argument[];
  };
}

export interface UserState {
  username: string | null;
  usertoken: string | null;
  usertype: UserRoleWithNull;
  loggedin: boolean;
  userdetails: Record<string, any>;
  loading: boolean;
}

export interface SettingState {
  theme: "darkmode" | "lightmode";
  mode: "ai" | "manual";
  userLoggedin: boolean;
}
