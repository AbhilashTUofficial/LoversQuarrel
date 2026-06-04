import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.ts";
import settingSlice from "./setttingSlice.ts";
import gameSlice from "./gameSlice.ts";

export const store = configureStore({
  reducer: {
    user: userSlice,
    setting: settingSlice,
    game: gameSlice,
  },
});
