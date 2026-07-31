import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserRoleWithNull as UserRole, UserState } from "../types";

export type { UserRole, UserState };

const initialState: UserState = {
  username: null,
  usertoken: null,
  usertype: null,
  loggedin: false,
  userdetails: {},
  loading: false,
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUserToken: (state, action: PayloadAction<string | null>) => {
      state.loggedin = !!action.payload;
      state.usertoken = action.payload;
    },
    setUserType: (state, action: PayloadAction<UserRole>) => {
      state.usertype = action.payload;
    },
    setUsername: (state, action: PayloadAction<string | null>) => {
      state.username = action.payload;
    },
    setUserDetails: (state, action: PayloadAction<any>) => {
      state.userdetails = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setUserLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedin = action.payload;
    },
    logout: (state) => {
      state.username = null;
      state.usertoken = null;
      state.usertype = null;
      state.loggedin = false;
      state.userdetails = {};
      state.loading = false;
    },
  },
});

export const {
  setUserToken,
  setUserType,
  setUsername,
  setUserDetails,
  setLoading,
  setUserLoggedIn,
  logout,
} = userSlice.actions;

export default userSlice.reducer;
