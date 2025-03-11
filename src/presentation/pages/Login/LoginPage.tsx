import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";

import {
  StyledPaper,
  BackgroundPaper,
  DynamicLabel,
  LogoContainer,
  CheckboxLinkContainer,
} from "./LoginStyles";

import {
  InputField,
  LabelField,
  FormField,
  CheckboxField,
  TextLinkField,
  LoadingSpinner,
  ButtonField,
} from "../../../presentation/components";

import { useAuth } from "../../../application/hooks/useAuth";
import { useSelector } from "react-redux";
import { RootState } from "../../../application/store";

const LoginPage = () => {
  const { isLoading, login, error, isServerDown } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isChecked, setIsChecked] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.auth.user); // ✅ Accede correctamente
  console.log("🟢 Usuario autenticado:", user);

  useEffect(() => {
    if (location.state?.message) {
      setAuthError(location.state.message);
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({
      ...prev,
      [name]:
        name === "email"
          ? value.includes("@")
            ? ""
            : "Correo electrónico inválido"
          : value.length >= 6
            ? ""
            : "La contraseña debe tener al menos 6 caracteres",
    }));
  };

  const handleSubmit = async () => {
    setAuthError(null);
    const success = await login(form.email, form.password);
    if (success) {
      navigate("/dashboard");
    } else {
      setAuthError("Error en la autenticación, revisa tus credenciales.");
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            height: "100vh",
            padding: "5px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Columna Izquierda */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "stretch",
              alignItems: "center",
            }}
          >
            <BackgroundPaper>
              <LogoContainer />
              <DynamicLabel>Hola, que bueno verte{"\n"}de regreso</DynamicLabel>
            </BackgroundPaper>
          </Grid>

          {/* Columna Derecha */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StyledPaper>
              {isLoading && <LoadingSpinner />}

              <FormField>
                <LabelField
                  level="h4"
                  text="Iniciar sesión"
                  bold={true}
                  style={{ marginBottom: "0px" }}
                />

                <InputField
                  type="email"
                  label="Correo electrónico"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Ingresa un correo electrónico"
                  error={!!errors.email}
                />

                <InputField
                  type="password"
                  name="password"
                  label="Contraseña"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Ingresa tu contraseña"
                  error={!!errors.password}
                />

                {/* 🔹 Mostrar errores de autenticación y conexión al servidor */}
                {(error || authError || isServerDown) && (
                  <div style={{ marginLeft: "10px" }}>
                    <LabelField
                      level="p"
                      text={
                        isServerDown
                          ? "Error de conexión con el servidor, intenta más tarde."
                          : (error ?? authError ?? "")
                      }
                      bold={true}
                      color={"#EC3931"}
                    />
                  </div>
                )}

                <CheckboxLinkContainer>
                  <CheckboxField
                    name="recordarUsuario"
                    label="Recordar usuario"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  <TextLinkField
                    text="Olvidé mi contraseña"
                    href="/forgot-password"
                    target="_blank"
                    color="#1D74D3"
                  />
                </CheckboxLinkContainer>

                <ButtonField
                  theme="TemaAzul"
                  name="btnIniciar"
                  text="Iniciar sesión"
                  onClick={handleSubmit}
                  disabled={
                    isLoading ||
                    !!errors.email ||
                    !!errors.password ||
                    isServerDown
                  }
                  style={{ marginTop: "20px", width: "100%" }}
                />
              </FormField>
            </StyledPaper>
          </Grid>
        </Grid>
      </motion.div>
      <div
        style={{
          position: "fixed",
          bottom: "10px",
          right: "100px",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          zIndex: 10,
        }}
      >
        <LabelField
          level="p"
          text="2024 © Exagono Software"
          bold={false}
          color="background: #343D48"
          style={{
            fontSize: "14px",
            letterSpacing: "2%",
          }}
        />
      </div>
    </>
  );
};

export default LoginPage;
