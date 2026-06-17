import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import userSlice from "./userSlice.ts";
import settingSlice from "./settingSlice.ts";
import gameSlice from "./gameSlice.ts";

export const store = configureStore({
  reducer: {
    user: userSlice,
    setting: settingSlice,
    game: gameSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
