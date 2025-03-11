// src/application/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authSlice"; // ✅ Importamos el nuevo reducer

export const store = configureStore({
  reducer: {
    auth: authReducer, // ✅ Usamos el slice en lugar del reducer clásico
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
