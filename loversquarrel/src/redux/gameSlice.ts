import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
type chaosCardKeys =
  | "oldIncidentChaosCard"
  | "evidenceChaosCard"
  | "includeMomChaosCard"
  | "leaveOnReadChaosCard"
  | "bestFriendChaosCard";

type statsKeys =
  | "relationshipStat"
  | "dramaStat"
  | "logicStat"
  | "toxicityStat";

type gameState = {
  gamemode: "ai" | "manual";
  game: {
    gameStarted: boolean;
    relationshipHealth: number;
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

const initialState: gameState = {
  gamemode: "ai",
  game: {
    gameStarted: false,
    relationshipHealth: 100,
    stats: {
      relationshipHealth: 100,
      relationshipStat: 0,
      dramaStat: 0,
      logicStat: 0,
      toxicityStat: 0,
    },
    chaosCards: {
      oldIncidentChaosCard: "deactivated",
      evidenceChaosCard: "deactivated",
      includeMomChaosCard: "deactivated",
      leaveOnReadChaosCard: "deactivated",
      bestFriendChaosCard: "deactivated",
    },
    round: {
      roundNumber: 0,
      roundStatus: "",
    },
  },
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameMode: (state, action) => {
      state.gamemode = action.payload;
    },

    setChaosCard: (
      state,
      action: PayloadAction<{
        chaosCard: chaosCardKeys;
        status: "activated" | "deactivated";
      }>,
    ) => {
      const { chaosCard, status } = action.payload;
      if (chaosCard in state.game.chaosCards) {
        state.game.chaosCards[chaosCard] = status;
      }
    },
    setStats: (
      state,
      action: PayloadAction<{
        stat: statsKeys;
        value: number;
      }>,
    ) => {
      const { stat, value } = action.payload;
      if (stat in state.game.stats) {
        state.game.stats[stat] = value;
      }
    },
    setRealationshipHealth: (state, action: PayloadAction<number>) => {
      // todo check if value is between 0 and 100
      state.game.relationshipHealth = action.payload;
    },
    setRound: (state, action: PayloadAction<typeof state.game.round>) => {
      state.game.round = action.payload;
    },
  },
});

export const {
  setGameMode,
  setChaosCard,
  setStats,
  setRealationshipHealth,
  setRound,
} = gameSlice.actions;
export default gameSlice.reducer;
