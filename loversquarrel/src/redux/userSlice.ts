import { createSlice } from "@reduxjs/toolkit/react";

type userState = {
  username: string | null;
  usertoken: string | null;
  usertype: string | null;
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
      console.log(action.payload);
      state.loggedin = true;
      state.usertoken = action.payload;
    },
  },
});

export const { setUserToken } = userSlice.actions;
export default userSlice.reducer;
