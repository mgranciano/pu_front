import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "../../domain/interfaces/IAuth";

const storedUser = localStorage.getItem("user");
const initialUser: User | null = storedUser ? JSON.parse(storedUser) : null;

const initialState: AuthState = {
  isLoading: false,
  isCheckingAuth: false,
  user: initialUser, // 🔥 Cargar usuario desde `localStorage` si existe
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
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.user = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoading = false;
      state.user = null;
      state.error = null;
    },
    serverUp: (state) => {
      state.isServerDown = false;
    },
    serverDown: (state) => {
      state.isServerDown = true;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout, serverUp, serverDown } =
  authSlice.actions;
export default authSlice.reducer;