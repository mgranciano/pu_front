import styled from "styled-components";
import { Paper } from "@mui/material";

export const StyledPaper = styled(Paper)`
  max-width: 500px;
  min-width: 500px;
  border: none !important;
  box-shadow: none !important;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 16px;
  position: relative;
  z-index: 10;
  pointer-events: all;
`;

export const DynamicLabel = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: clamp(28px, 5vw, 48px); /* Tamaño dinámico según la pantalla */
  line-height: clamp(38px, 6vw, 65.28px);
  letter-spacing: 0%;
  color: white;
  text-align: left;
  white-space: pre-line; /* Permite dividir el texto en dos líneas */
  width: 80%; /* Mantiene un ancho flexible */
  max-width: 600px; /* No deja que se extienda demasiado */
  margin-left: 11vw; /* Margen dinámico izquierdo */
  margin-top: 15vh; /* Margen dinámico superior */
`;

export const BackgroundPaper = styled.div`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  background-image: url("/assets/login-bg.svg");
  background-size: 55% 96%;
  background-position: left 1vw bottom 1vw;
  background-repeat: no-repeat;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: fixed;
  pointer-events: none;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const LogoContainer = styled.div`
  width: 288.33px; /* Tamaño fijo para el logo */
  height: 40px;
  background-image: url("/assets/logo.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 7vh; /* Ajuste superior dinámico */
  left: 11vw; /* Ajuste izquierdo dinámico */
`;

export const CheckboxLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;
