/* eslint-disable no-unused-vars */
// src/domain/interfaces/IAuth.ts

export enum AuthActionType {
  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILURE = "LOGIN_FAILURE",
  LOGOUT = "LOGOUT",
  SERVER_DOWN = "SERVER_DOWN",
}

export interface User {
  id: string;
  name: string;
  email: string;
  accessToken: string;
}

export interface AuthState {
  isLoading: boolean;
  user: User | null;
  error: string | null;
  isAuthenticated: boolean;
  isServerDown: boolean;
}

export interface LoginSuccessPayload {
  user: User;
}

export interface LoginFailurePayload {
  error: string;
}

export type AuthAction =
  | { type: AuthActionType.LOGIN_REQUEST }
  | { type: AuthActionType.LOGIN_SUCCESS; payload: LoginSuccessPayload }
  | { type: AuthActionType.LOGIN_FAILURE; payload: LoginFailurePayload }
  | { type: AuthActionType.LOGOUT }
  | { type: AuthActionType.SERVER_DOWN };
