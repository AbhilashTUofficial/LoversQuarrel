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

export type Traits = {
  intellect: number;
  logic: number;
  drama: number;
  sarcasm: number;
  stubbornness: number;
  confidence: number;
  memory: number;
  empathy: number;
};

export type ChaosCard = {
  id: number | string;
  isActivated: boolean;
  content: string;
  title: string;
  isUsed: boolean;
};

export type GameMode = "ai" | "dual" | "solo";

export type Argument = {
  id: number | string;
  from: "boyfriend" | "girlfriend" | "system";
  content: string;
  timestamp: string; // Serialized date representation for Redux
};

export type CaseDetails = {
  caseId: string;
  caseTitle: string;
  caseDescription: string;
};

export type ChaosCards = {
  oldIncidentChaosCard: ChaosCard;
  evidenceChaosCard: ChaosCard;
  includeMomChaosCard: ChaosCard;
  leaveOnReadChaosCard: ChaosCard;
  bestFriendChaosCard: ChaosCard;
};

export type GameState = {
  gamemode: GameMode;
  game: {
    currentUserType: "boyfriend" | "girlfriend";
    gameStarted: boolean;
    stats: {
      relationshipHealth: number;
      relationshipStat: number;
      dramaStat: number;
      logicStat: number;
      toxicityStat: number;
      round: {
        roundNumber: number;
        roundStatus: string;
      };
      caseDetails: CaseDetails;
    };
    boyfriend: {
      traits: Traits;
      tags: string[];
      chaosCards: ChaosCards;
      initialArgument: Argument;
    };
    girlfriend: {
      traits: Traits;
      tags: string[];
      chaosCards: ChaosCards;
      initialArgument: Argument;
    };
    argumentStack: Argument[];
  };
};
