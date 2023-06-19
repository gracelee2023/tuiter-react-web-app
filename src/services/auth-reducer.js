import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  logoutThunk,
  profileThunk,
  updateUserThunk,
  registerThunk,
} from "./auth-thunks";

const authSlice = createSlice({
  name: "auth",
  initialState: { currentUser: null },
  reducers: {},
  extraReducers: {
    [loginThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [logoutThunk.fulfilled]: (state, action) => {
      state.currentUser = null;
    },
    [profileThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [updateUserThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [registerThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});
export default authSlice.reducer;
