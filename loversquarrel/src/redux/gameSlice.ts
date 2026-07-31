import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  Traits,
  GameState,
  GameMode,
  ChaosCardKeys,
  StatsKeys,
  CaseDetails,
  Argument,
  UserRole,
  ArgumentSender,
} from "../types";

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
    currentUserType: "girlfriend",
    gameStarted: false,
    stats: {
      relationshipHealth: 0,
      relationshipStat: 0,
      dramaStat: 0,
      logicStat: 0,
      toxicityStat: 0,
      round: {
        roundNumber: 7,
        roundStatus: "Heated 🔥",
      },
      caseDetails: {
        caseId: "432432",
        caseTitle: "Why didn't you reply?",
        caseDescription:
          "The argument started because boyfriend took 3 hours to reply to a text.",
      },
    },
    boyfriend: {
      initialArgument: {
        id: "001",
        from: "boyfriend",
        content: "",
        timestamp: new Date().toISOString(),
      },
      traits: { ...initialTraits },
      tags: ["Logical", "Dramatic", "Sarcasm", "Stubborn"],
      chaosCards: {
        oldIncidentChaosCard: {
          id: "oldIncidentChaosCard",
          isActivated: false,
          content: "Chaos Card: Old Incident",
          title: "Old Incident",
          isUsed: false,
        },
        evidenceChaosCard: {
          id: "evidenceChaosCard",
          isActivated: false,
          content: "Chaos Card: Evidence",
          title: "Evidence",
          isUsed: false,
        },
        includeMomChaosCard: {
          id: "includeMomChaosCard",
          isActivated: false,
          content: "Chaos Card: Include Mom",
          title: "Include Mom",
          isUsed: false,
        },
        leaveOnReadChaosCard: {
          id: "leaveOnReadChaosCard",
          isActivated: false,
          content: "Chaos Card: Leave on Read",
          title: "Leave on Read",
          isUsed: false,
        },
        bestFriendChaosCard: {
          id: "bestFriendChaosCard",
          isActivated: false,
          content: "Chaos Card: Best Friend",
          title: "Best Friend",
          isUsed: false,
        },
      },
    },
    girlfriend: {
      initialArgument: {
        id: "001",
        from: "girlfriend",
        content: "",
        timestamp: new Date().toISOString(),
      },
      traits: { ...initialTraits },
      tags: ["Logical", "Dramatic", "Sarcasm", "Stubborn", "Confident"],
      chaosCards: {
        oldIncidentChaosCard: {
          id: "oldIncidentChaosCard",
          isActivated: false,
          content: "Chaos Card: Old Incident",
          title: "Old Incident",
          isUsed: false,
        },
        evidenceChaosCard: {
          id: "evidenceChaosCard",
          isActivated: false,
          content: "Chaos Card: Evidence",
          title: "Evidence",
          isUsed: false,
        },
        includeMomChaosCard: {
          id: "includeMomChaosCard",
          isActivated: false,
          content: "Chaos Card: Include Mom",
          title: "Include Mom",
          isUsed: false,
        },
        leaveOnReadChaosCard: {
          id: "leaveOnReadChaosCard",
          isActivated: false,
          content: "Chaos Card: Leave on Read",
          title: "Leave on Read",
          isUsed: false,
        },
        bestFriendChaosCard: {
          id: "bestFriendChaosCard",
          isActivated: false,
          content: "Chaos Card: Best Friend",
          title: "Best Friend",
          isUsed: false,
        },
      },
    },

    argumentStack: [
      {
        id: 1,
        from: "system",
        content:
          "System: The couple started a conversation about their relationship.",
        timestamp: new Date().toISOString(),
      },
      {
        id: 2,
        from: "girlfriend",
        content:
          "Hello, I'm girlfriend. I'm glad to see you again today. I hope you have a good day. How about a cup of coffee? I'll be waiting for you there.",
        timestamp: new Date().toISOString(),
      },
      {
        id: 3,
        from: "boyfriend",
        content:
          "Hi, I'm boyfriend. I'm happy to see you too. I had a great day. Coffee sounds good. I'll be there in 10 minutes.",
        timestamp: new Date().toISOString(),
      },
      {
        id: 4,
        from: "system",
        content:
          "System: The couple had a great day together. They enjoyed their coffee and talked about their future plans.",
        timestamp: new Date().toISOString(),
      },
      {
        id: 5,
        from: "girlfriend",
        content:
          "I had a great day too. I'm looking forward to our future together. I love you.",
        timestamp: new Date().toISOString(),
      },
      {
        id: 6,
        from: "boyfriend",
        content:
          "I love you too. I'm grateful to have you in my life. Let's make more wonderful memories together.",
        timestamp: new Date().toISOString(),
      },
      {
        id: 7,
        from: "system",
        content:
          "System: The couple's relationship is strong and healthy. They communicate well and support each other.",
        timestamp: new Date().toISOString(),
      },
    ],
  },
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameMode: (state, action: PayloadAction<GameMode>) => {
      state.gamemode = action.payload;
    },

    setUserRole: (state, action: PayloadAction<UserRole>) => {
      state.game.currentUserType = action.payload;
    },

    setCurrentUserType: (
      state,
      action: PayloadAction<"boyfriend" | "girlfriend">,
    ) => {
      state.game.currentUserType = action.payload;
    },

    setChaosCard: (
      state,
      action: PayloadAction<{
        chaosCard: ChaosCardKeys;
        userType: "boyfriend" | "girlfriend";
        status: "activated" | "deactivated";
      }>,
    ) => {
      const { chaosCard, userType, status } = action.payload;
      if (userType === "boyfriend") {
        state.game.boyfriend.chaosCards[chaosCard] = {
          id: chaosCard,
          isActivated: status === "activated",
          content: `Chaos Card: ${chaosCard}`,
          title: chaosCard,
          isUsed: false,
        };
      }
    },

    toggleChaosCard: (
      state,
      action: PayloadAction<{
        card: ChaosCardKeys;
        userType: "boyfriend" | "girlfriend";
      }>,
    ) => {
      const { card, userType } = action.payload;

      const player =
        userType === "boyfriend" ? state.game.boyfriend : state.game.girlfriend;

      player.chaosCards[card].isActivated = true;
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
        traits: Traits;
        userType: "boyfriend" | "girlfriend";
      }>,
    ) => {
      const { traits, userType } = action.payload;
      if (userType === "boyfriend") {
        state.game.boyfriend.traits = traits;
      }
      if (userType === "girlfriend") {
        state.game.girlfriend.traits = traits;
      }
    },

    setRelationshipHealth: (state, action: PayloadAction<number>) => {
      const val = Math.max(0, Math.min(100, action.payload));
      state.game.stats.relationshipHealth = val;
    },

    setRound: (
      state,
      action: PayloadAction<{ roundNumber: number; roundStatus: string }>,
    ) => {
      state.game.stats.round = action.payload;
    },

    setCase: (state, action: PayloadAction<CaseDetails>) => {
      state.game.stats.caseDetails = action.payload;
    },

    setInitialArgument: (state, action: PayloadAction<Argument>) => {
      const argument = action.payload;
      if (argument.from == "boyfriend") {
        state.game.boyfriend.initialArgument = argument;
      }
      if (argument.from == "girlfriend") {
        state.game.girlfriend.initialArgument = argument;
      }
    },

    addArgument: (
      state,
      action: PayloadAction<{
        from: ArgumentSender;
        content: string;
      }>,
    ) => {
      state.game.argumentStack.push({
        id: state.game.argumentStack.length + 1,
        timestamp: new Date().toISOString(),
        from: action.payload.from,
        content: action.payload.content,
      });
    },

    clearArguments: (state) => {
      state.game.argumentStack = [];
    },

    addPlayerTag: (
      state,
      action: PayloadAction<{
        userType: "boyfriend" | "girlfriend";
        tag: string;
      }>,
    ) => {
      const { userType, tag } = action.payload;
      if (userType === "boyfriend") {
        if (!state.game.boyfriend.tags.includes(tag)) {
          state.game.boyfriend.tags.push(tag);
        }
      } else if (userType === "girlfriend") {
        if (!state.game.girlfriend.tags.includes(tag)) {
          state.game.girlfriend.tags.push(tag);
        }
      }
    },

    removePlayerTag: (
      state,
      action: PayloadAction<{
        userType: "boyfriend" | "girlfriend";
        tag: string;
      }>,
    ) => {
      const { userType, tag } = action.payload;
      if (userType === "boyfriend") {
        state.game.boyfriend.tags = state.game.boyfriend.tags.filter(
          (t) => t !== tag,
        );
      } else if (userType === "girlfriend") {
        state.game.girlfriend.tags = state.game.girlfriend.tags.filter(
          (t) => t !== tag,
        );
      }
    },

    startGame: (state) => {
      state.game.gameStarted = true;
    },
  },
});

export const {
  setGameMode,
  setUserRole,
  setChaosCard,
  toggleChaosCard,
  setStats,
  updateStats,
  setTraits,
  setRelationshipHealth,
  setRound,
  setCurrentUserType,
  setCase,
  addArgument,
  clearArguments,
  addPlayerTag,
  removePlayerTag,
  startGame,
  setInitialArgument,
} = gameSlice.actions;

export default gameSlice.reducer;
