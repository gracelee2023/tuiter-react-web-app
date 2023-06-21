import { createSlice } from "@reduxjs/toolkit";
import {
  getUsersThunk,
  loginThunk,
  logoutThunk,
  getProfileThunk,
  updateUserThunk,
  registerThunk,
} from "./auth-thunks";

const initialState = {
  users: [],
  newUser: {},
  error: null,
  loading: false,
  currentUser: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  // reducer is meant to sync with the data maintained in the this javascript process
  // however the data is in the remote server, not in the local javascript process
  // so leave the reducer empty here, instead use additionalReducers!!
  reducers: {},
  // additionalReducers allows us to make these calls out to the server and get the data from the server
  // and then populate the state with the data from the server
  // need to use the service(users-service.js) to fetch all the data or delete or update data
  // instead of in index.js doing setUsers, updating a local state, do that in reducer

  extraReducers: {
    // profile thunk
    [getProfileThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.error = null;
      state.loading = false;
    },
    //logoutThunk
    [logoutThunk.fulfilled]: (state, action) => {
      state.currentUser = null;
      state.error = null;
      state.loading = false;
    },

    // loginThunk
    [loginThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.error = null;
      state.loading = false;
    },

    [getUsersThunk.fulfilled]: (state, action) => {
      // the return value from the getUsersThunk is action.payload
      // then set the initial state users to action.payload which is the data from the server
      state.users = action.payload;
      state.error = null;
      state.loading = false;
    },
    [getUsersThunk.rejected]: (state, action) => {
      state.error = action.error;
      // when get an error, set the users to empty array
      state.users = [];
      state.loading = false;
    },
    [getUsersThunk.pending]: (state, action) => {
      state.users = [];
      state.loading = true;
      state.error = null;
    },
    [registerThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.error = null;
      state.loading = false;
    },
    [updateUserThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.error = null;
      state.loading = false;
    },
  },
});

export default usersSlice.reducer;
