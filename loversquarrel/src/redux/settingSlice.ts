import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type SettingState = {
  theme: "darkmode" | "lightmode";
  mode: "ai" | "manual";
  userLoggedin: boolean;
};

const initialState: SettingState = {
  theme: "darkmode",
  mode: "manual",
  userLoggedin: false,
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setUserLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.userLoggedin = action.payload;
    },
    setTheme: (state, action: PayloadAction<"darkmode" | "lightmode">) => {
      state.theme = action.payload;
    },
    setMode: (state, action: PayloadAction<"ai" | "manual">) => {
      state.mode = action.payload;
    },
  },
});

export const { setUserLoggedIn, setTheme, setMode } = settingSlice.actions;
export default settingSlice.reducer;
