import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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

export type GameMode = "ai" | "dual" | "solo";

export type Argument = {
  id: number;
  from: "Boyfriend" | "Girlfriend" | "system";
  content: string;
  timestamp: string; // Serialized date representation for Redux
};

export type CaseDetails = {
  caseId: string;
  caseTitle: string;
  caseDescription: string;
};

export type GameState = {
  gamemode: GameMode;
  game: {
    currentUserType: "Boyfriend" | "Girlfriend";
    gameStarted: boolean;
    relationshipHealth: number;
    boyfriendTraits: Traits;
    girlfriendTraits: Traits;
    boyfriendTags: string[];
    girlfriendTags: string[];
    caseDetails: CaseDetails;
    argumentStack: Argument[];
    stats: {
      relationshipHealth: number;
      relationshipStat: number;
      dramaStat: number;
      logicStat: number;
      toxicityStat: number;
    };
    chaosCards: {
      oldIncidentChaosCard: "activated" | "deactivated";
      evidenceChaosCard: "activated" | "deactivated";
      includeMomChaosCard: "activated" | "deactivated";
      leaveOnReadChaosCard: "activated" | "deactivated";
      bestFriendChaosCard: "activated" | "deactivated";
    };
    round: {
      roundNumber: number;
      roundStatus: string;
    };
  };
};

const initialTraits: Traits = {
  intellect: 0,
  logic: 0,
  drama: 0,
  sarcasm: 0,
  stubbornness: 0,
  confidence: 0,
  memory: 0,
  empathy: 0,
};

const initialState: GameState = {
  gamemode: "ai",
  game: {
    currentUserType: "Girlfriend",
    gameStarted: false,
    relationshipHealth: 100,
    boyfriendTraits: { ...initialTraits },
    girlfriendTraits: { ...initialTraits },
    boyfriendTags: ["Logical", "Dramatic", "Sarcasm", "Stubborn"],
    girlfriendTags: ["Logical", "Dramatic", "Sarcasm", "Stubborn", "Confident"],
    caseDetails: {
      caseId: "432432",
      caseTitle: "Why didn't you reply?",
      caseDescription: "The argument started because boyfriend took 3 hours to reply to a text.",
    },
    argumentStack: [
      {
        id: 1,
        from: "system",
        content: "System: The couple started a conversation about their relationship.",
        timestamp: new Date().toISOString(),
      },
      {
        id: 2,
        from: "Girlfriend",
        content: "Hello, I'm girlfriend. I'm glad to see you again today. I hope you have a good day. How about a cup of coffee? I'll be waiting for you there.",
        timestamp: new Date().toISOString(),
      },
      {
        id: 3,
        from: "Boyfriend",
        content: "Hi, I'm boyfriend. I'm happy to see you too. I had a great day. Coffee sounds good. I'll be there in 10 minutes.",
        timestamp: new Date().toISOString(),
      },
      {
        id: 4,
        from: "system",
        content: "System: The couple had a great day together. They enjoyed their coffee and talked about their future plans.",
        timestamp: new Date().toISOString(),
      },
      {
        id: 5,
        from: "Girlfriend",
        content: "I had a great day too. I'm looking forward to our future together. I love you.",
        timestamp: new Date().toISOString(),
      },
      {
        id: 6,
        from: "Boyfriend",
        content: "I love you too. I'm grateful to have you in my life. Let's make more wonderful memories together.",
        timestamp: new Date().toISOString(),
      },
      {
        id: 7,
        from: "system",
        content: "System: The couple's relationship is strong and healthy. They communicate well and support each other.",
        timestamp: new Date().toISOString(),
      },
    ],
    stats: {
      relationshipHealth: 100,
      relationshipStat: 72,
      dramaStat: 91,
      logicStat: 22,
      toxicityStat: 84,
    },
    chaosCards: {
      oldIncidentChaosCard: "deactivated",
      evidenceChaosCard: "deactivated",
      includeMomChaosCard: "deactivated",
      leaveOnReadChaosCard: "deactivated",
      bestFriendChaosCard: "deactivated",
    },
    round: {
      roundNumber: 7,
      roundStatus: "Heated 🔥",
    },
  },
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameMode: (state, action: PayloadAction<GameMode>) => {
      state.gamemode = action.payload;
    },

    setCurrentUserType: (
      state,
      action: PayloadAction<"Boyfriend" | "Girlfriend">,
    ) => {
      state.game.currentUserType = action.payload;
    },

    setChaosCard: (
      state,
      action: PayloadAction<{
        chaosCard: ChaosCardKeys;
        status: "activated" | "deactivated";
      }>,
    ) => {
      const { chaosCard, status } = action.payload;
      if (chaosCard in state.game.chaosCards) {
        state.game.chaosCards[chaosCard] = status;
      }
    },

    toggleChaosCard: (state, action: PayloadAction<ChaosCardKeys>) => {
      const card = action.payload;
      if (card in state.game.chaosCards) {
        state.game.chaosCards[card] =
          state.game.chaosCards[card] === "activated" ? "deactivated" : "activated";
      }
    },

    setStats: (
      state,
      action: PayloadAction<{
        stat: StatsKeys;
        value: number;
      }>,
    ) => {
      const { stat, value } = action.payload;
      if (stat in state.game.stats) {
        state.game.stats[stat] = value;
      }
    },

    updateStats: (
      state,
      action: PayloadAction<{
        relationship: number;
        drama: number;
        logic: number;
        toxicity: number;
      }>,
    ) => {
      state.game.stats.relationshipStat = action.payload.relationship;
      state.game.stats.dramaStat = action.payload.drama;
      state.game.stats.logicStat = action.payload.logic;
      state.game.stats.toxicityStat = action.payload.toxicity;
    },

    setTraits: (
      state,
      action: PayloadAction<{
        trait: Traits;
        userType: "Boyfriend" | "Girlfriend";
      }>,
    ) => {
      const { trait, userType } = action.payload;
      if (userType === "Boyfriend") {
        state.game.boyfriendTraits = trait;
      } else if (userType === "Girlfriend") {
        state.game.girlfriendTraits = trait;
      }
    },

    setRelationshipHealth: (state, action: PayloadAction<number>) => {
      const val = Math.max(0, Math.min(100, action.payload));
      state.game.relationshipHealth = val;
      state.game.stats.relationshipHealth = val;
    },

    adjustRelationshipHealth: (state, action: PayloadAction<number>) => {
      const val = Math.max(0, Math.min(100, state.game.relationshipHealth + action.payload));
      state.game.relationshipHealth = val;
      state.game.stats.relationshipHealth = val;
    },

    setRound: (state, action: PayloadAction<{ roundNumber: number; roundStatus: string }>) => {
      state.game.round = action.payload;
    },

    incrementRound: (state) => {
      state.game.round.roundNumber += 1;
    },

    setRoundStatus: (state, action: PayloadAction<string>) => {
      state.game.round.roundStatus = action.payload;
    },

    setCase: (state, action: PayloadAction<CaseDetails>) => {
      state.game.caseDetails = action.payload;
    },

    addArgument: (
      state,
      action: PayloadAction<{ from: "Boyfriend" | "Girlfriend" | "system"; content: string }>,
    ) => {
      state.game.argumentStack.push({
        id: state.game.argumentStack.length + 1,
        timestamp: new Date().toISOString(),
        ...action.payload,
      });
    },

    clearArguments: (state) => {
      state.game.argumentStack = [];
    },

    addPlayerTag: (state, action: PayloadAction<{ userType: "Boyfriend" | "Girlfriend"; tag: string }>) => {
      const { userType, tag } = action.payload;
      if (userType === "Boyfriend") {
        if (!state.game.boyfriendTags.includes(tag)) {
          state.game.boyfriendTags.push(tag);
        }
      } else if (userType === "Girlfriend") {
        if (!state.game.girlfriendTags.includes(tag)) {
          state.game.girlfriendTags.push(tag);
        }
      }
    },

    removePlayerTag: (state, action: PayloadAction<{ userType: "Boyfriend" | "Girlfriend"; tag: string }>) => {
      const { userType, tag } = action.payload;
      if (userType === "Boyfriend") {
        state.game.boyfriendTags = state.game.boyfriendTags.filter((t) => t !== tag);
      } else if (userType === "Girlfriend") {
        state.game.girlfriendTags = state.game.girlfriendTags.filter((t) => t !== tag);
      }
    },

    startGame: (state) => {
      state.game.gameStarted = true;
    },

    resetGame: (state) => {
      state.game.gameStarted = false;
      state.game.relationshipHealth = 100;
      state.game.boyfriendTraits = { ...initialTraits };
      state.game.girlfriendTraits = { ...initialTraits };
      state.game.boyfriendTags = ["Logical", "Dramatic", "Sarcasm", "Stubborn"];
      state.game.girlfriendTags = ["Logical", "Dramatic", "Sarcasm", "Stubborn", "Confident"];
      state.game.stats = {
        relationshipHealth: 100,
        relationshipStat: 72,
        dramaStat: 91,
        logicStat: 22,
        toxicityStat: 84,
      };
      state.game.round = {
        roundNumber: 1,
        roundStatus: "Chill ❄️",
      };
      state.game.argumentStack = [
        {
          id: 1,
          from: "system",
          content: "System: The game has been reset. A new conversation started.",
          timestamp: new Date().toISOString(),
        },
      ];
    },
  },
});

export const {
  setGameMode,
  setChaosCard,
  toggleChaosCard,
  setStats,
  updateStats,
  setTraits,
  setRelationshipHealth,
  adjustRelationshipHealth,
  setRound,
  incrementRound,
  setRoundStatus,
  setCurrentUserType,
  setCase,
  addArgument,
  clearArguments,
  addPlayerTag,
  removePlayerTag,
  startGame,
  resetGame,
} = gameSlice.actions;

export default gameSlice.reducer;
