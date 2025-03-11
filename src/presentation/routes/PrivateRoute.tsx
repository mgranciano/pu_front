import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../application/store";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
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
  const [isValidated, setIsValidated] = useState(false);

  useEffect(() => {
    const validateToken = async () => {
      dispatch(checkingAuth());

      const storedToken = localStorage.getItem("accessToken");
      if (!storedToken) {
        console.warn("⚠ No hay token almacenado, redirigiendo a login...");
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

        if (!response?.responseObject || response.responseObject.status !== "Ok") {
          console.warn("⚠ Token expirado o inválido, cerrando sesión...");
          localStorage.removeItem("accessToken");
          dispatch(logout());
        } else {
          console.log("✅ Token válido, restaurando sesión...");

          const user: User = {
            id: response.responseObject.id ?? "default-id",
            name: response.responseObject.name ?? "Usuario",
            email: response.responseObject.email ?? "email@example.com",
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
        setIsValidated(true);
      }
    };

    if (!user && !isCheckingAuth) {
      validateToken();
    } else {
      setIsValidated(true);
    }
  }, [dispatch, user, isCheckingAuth]);

  if (!isValidated) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;