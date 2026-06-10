import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit/react";

type userType = "Boyfriend" | "girlfriend" | null;
type userState = {
  username: string | null;
  usertoken: string | null;
  usertype: userType;
  loggedin: boolean;
  userdetails: any;
  loadding: boolean;
};

const initialState: userState = {
  username: null,
  usertoken: null,
  usertype: null,
  loggedin: false,
  userdetails: {},
  loadding: false,
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.loggedin = true;
      state.usertoken = action.payload;
    },
    setUserType: (state, action: PayloadAction<typeof state.usertype>) => {
      state.usertype = action.payload;
    },
  },
});

export const { setUserToken, setUserType } = userSlice.actions;
export default userSlice.reducer;
