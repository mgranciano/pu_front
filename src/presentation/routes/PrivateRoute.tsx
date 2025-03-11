import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../application/store";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import {
  loginSuccess,
  checkingAuth,
  stopCheckingAuth,
  logout,
} from "../../application/reducers/authSlice";
import { ApiService } from "../../infrastructure/services/ApiServices";
import { User } from "../../domain/interfaces/IAuth";

const apiService = new ApiService();

const PrivateRoute = () => {
  const dispatch = useDispatch();
  const { user, isCheckingAuth } = useSelector(
    (state: RootState) => state.auth
  );

  console.log(
    "🔍 Estado de autenticación en PrivateRoute antes de validar:",
    user,
    "isCheckingAuth:",
    isCheckingAuth
  );

  useEffect(() => {
    const validateToken = async () => {
      dispatch(checkingAuth());

      const storedToken = localStorage.getItem("accessToken");
      if (!storedToken) {
        console.warn("⚠ No hay token almacenado, redirigiendo a login...");
        dispatch(stopCheckingAuth());
        dispatch(logout());
        return;
      }

      try {
        const response = await apiService.request<any>(
          "/auth/validateToken",
          "POST",
          { token: storedToken }
        );

        console.log("🔹 Respuesta de validación de token:", response);

        if (response?.responseObject?.estatus === "E") {
          console.warn("⚠ Token inválido o expirado, cerrando sesión...");
          localStorage.removeItem("accessToken");
          dispatch(logout());
        } else if (response?.responseObject?.estatus === "S") {
          console.log("✅ Token válido, restaurando sesión...");

          const user: User = {
            id: response.responseObject.responseObject?.id ?? "default-id",
            name: response.responseObject.responseObject?.name ?? "Usuario",
            email:
              response.responseObject.responseObject?.email ??
              "email@example.com",
            accessToken: storedToken,
          };

          dispatch(loginSuccess(user));
        }
      } catch (error) {
        console.error("❌ Error al validar token:", error);
        localStorage.removeItem("accessToken");
        dispatch(logout());
      } finally {
        dispatch(stopCheckingAuth());
      }
    };

    if (!user) {
      validateToken();
    }
  }, [dispatch, user]);

  console.log(
    "🔍 Estado de autenticación en PrivateRoute después de validar:",
    user,
    "isCheckingAuth:",
    isCheckingAuth
  );

  if (isCheckingAuth) {
    return null; // 🔹 Esperar a que termine la validación antes de redirigir
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ message: "Sesión expirada" }} replace />
  );
};

export default PrivateRoute;
