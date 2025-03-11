import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { ApiService } from "../../infrastructure/services/ApiServices";
import {
  loginSuccess,
  serverUp,
  serverDown,
  checkingAuth,
  stopCheckingAuth,
  logout,
  loginFailure,
  loginRequest,
} from "../reducers/authSlice";
import { User } from "../../domain/interfaces/IAuth";
import { AuthService } from "../../infrastructure/services/AuthServices";

const apiService = new ApiService();
const authService = new AuthService(apiService);

export const useAuth = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        const response = await apiService.request<any>("/keepalive", "GET");

        if (!response || response.status !== "S") {
          dispatch(serverDown());
        } else {
          dispatch(serverUp());
        }
      } catch {
        dispatch(serverDown());
      }
    };

    checkServerStatus();
    const interval = setInterval(checkServerStatus, 60 * 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    const validateToken = async () => {
      dispatch(checkingAuth());

      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.warn("⚠ No hay token almacenado, cerrando sesión...");
        dispatch(stopCheckingAuth());
        return;
      }

      try {
        const response = await apiService.request<any>(
          "/auth/validateToken",
          "POST",
          { token }
        );

        console.log("🔹 Respuesta de validación de token:", response);

        if (!response?.responseObject) {
          console.warn("⚠ Respuesta inesperada, cerrando sesión...");
          localStorage.removeItem("accessToken");
          dispatch(logout());
          return;
        }

        const { status } = response.responseObject;

        if (status === "Token expirado o inválido") {
          console.warn("⚠ Token expirado o inválido, cerrando sesión...");
          localStorage.removeItem("accessToken");
          dispatch(logout());
          return;
        }

        if (status === "Ok") {
          console.log("✅ Token válido, restaurando sesión...");

          const user: User = {
            id: response.responseObject.id ?? "default-id",
            name: response.responseObject.name ?? "Usuario",
            email: response.responseObject.email ?? "email@example.com",
            accessToken: token,
          };

          dispatch(loginSuccess(user));
        } else {
          console.warn("⚠ Estado inesperado en la validación del token.");
          dispatch(logout());
        }
      } catch (error) {
        console.error("❌ Error al validar token:", error);
        localStorage.removeItem("accessToken");
        dispatch(logout());
      } finally {
        dispatch(stopCheckingAuth());
      }
    };

    validateToken();
  }, [dispatch]);

  const login = async (email: string, password: string): Promise<boolean> => {
    dispatch(loginRequest());

    try {
      const response = await authService.login(email, password);

      console.log("🔹 Respuesta del login:", response);

      if (!response?.responseObject?.accessToken) {
        throw new Error("Respuesta de login inválida");
      }

      const user: User = {
        id: response.responseObject.id ?? "default-id",
        name: response.responseObject.name ?? "Usuario",
        email: response.responseObject.email ?? "email@example.com",
        accessToken: response.responseObject.accessToken,
      };

      localStorage.setItem("accessToken", user.accessToken);
      dispatch(loginSuccess(user));
      return true;
    } catch (error) {
      dispatch(
        loginFailure(
          error instanceof Error ? error.message : "Error desconocido"
        )
      );
      return false;
    }
  };

  return { ...state, login };
};
