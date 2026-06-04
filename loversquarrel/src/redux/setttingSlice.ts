import { createSlice } from "@reduxjs/toolkit";

type settingState = {
  theme: "darkmode" | "lightmode";
  mode: "ai" | "manual";
  userLoggedin: boolean;
};

const initialState: settingState = {
  theme: "darkmode",
  mode: "manual",
  userLoggedin: false,
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setUserLoggedIn: (state, action) => {
      state.userLoggedin = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setUserLoggedIn, setTheme, setMode } = settingSlice.actions;
export default settingSlice.reducer;
