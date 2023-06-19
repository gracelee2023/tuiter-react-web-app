import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const loginThunk = createAsyncThunk("user/login", async (user) => {
  const currentUser = await authService.login(user);
  return currentUser;
});

export const profileThunk = createAsyncThunk("auth/profile", async () => {
  return await authService.profile();
});

export const logoutThunk = createAsyncThunk("auth/logout", async () => {
  return await authService.logout();
});

export const updateUserThunk = createAsyncThunk(
  "user/updateUser",
  async (user) => {
    const status = await authService.updateUser(user._id, user);
    return user;
  }
);

export const registerThunk = createAsyncThunk("user/register", async (user) => {
  const currentUser = await authService.register(user);
  return currentUser;
});
