import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "../../domain/interfaces/IAuth";

const initialState: AuthState = {
  isLoading: false,
  isCheckingAuth: true, // 🔹 Nuevo estado para controlar la validación del token
  user: null,
  error: null,
  isServerDown: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isCheckingAuth = false; // 🔹 Se completó la validación del token
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.user = null;
      state.isCheckingAuth = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoading = false;
      state.user = null;
      state.isCheckingAuth = false;
      state.error = null;
    },
    serverUp: (state) => {
      state.isServerDown = false;
    },
    serverDown: (state) => {
      state.isServerDown = true;
    },
    checkingAuth: (state) => {
      state.isCheckingAuth = true;
    },
    stopCheckingAuth: (state) => {
      state.isCheckingAuth = false;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  serverUp,
  serverDown,
  checkingAuth,
  stopCheckingAuth,
} = authSlice.actions;

export default authSlice.reducer;