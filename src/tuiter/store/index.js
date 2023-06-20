import authReducer from "../../services/auth-reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    users: authReducer,
  },
});
