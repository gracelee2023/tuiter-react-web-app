import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const getUsersThunk = createAsyncThunk("users/getUsers", async () => {
  const users = await authService.getUsers();
  return users;
});

// export const loginThunk = createAsyncThunk(
//   "user/login",
//   async (credentials) => {
//     const user = await authService.login(credentials);
//     return user;
//   }
// );

export const loginThunk = createAsyncThunk("users/login", async (user) => {
  const currentUser = await authService.login(user);
  return currentUser;
});

// export const profileThunk = createAsyncThunk("users/profile", async () => {
//   // const response = await authService.profile();
//   // return response.data;
//   return await authService.profile();
// });
export const getProfileThunk = createAsyncThunk("users/profile", async () => {
  const currentUser = await authService.getProfile();
  return currentUser;
});

export const logoutThunk = createAsyncThunk("users/logout", async () => {
  return await authService.logout();
});

export const updateUserThunk = createAsyncThunk(
  "user/updateUser",
  async (user) => {
    const status = await authService.updateUser(user._id, user);
    return user;
  }
);

// export const registerThunk = createAsyncThunk(
//   "user/register",
//   async (credentials) => {
//     console.log("registerThunk");
//     const user = await authService.register(credentials);
//     return user;
//   }
// );

export const registerThunk = createAsyncThunk(
  "users/register",
  async (user) => {
    const currentUser = await authService.register(user);
    return currentUser;
  }
);
