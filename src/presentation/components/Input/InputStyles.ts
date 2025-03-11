import styled from "styled-components";

interface InputProps {
  $error?: boolean; // 🔹 Se cambia "error" a "$error" para evitar que llegue al DOM
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

export const InputContainer = styled.div<InputProps>`
  min-width: 320px;
  height: 22px;
  display: flex;
  align-items: center;
  border: 1px solid #bfbfbf;
  border-radius: 8px;
  padding: 10px;
  background: ${({ $error }) => ($error ? "#ffebee" : "#ffffff")};
  transition: border-color 0.3s;
  pointer-events: auto;

  &:focus-within {
    border-color: #1d74d3;
    background: #ffffff !important; /* 🔹 Corrige el fondo azul */
  }

  &:has(input:not(:placeholder-shown)) {
    border-color: #bfbfbf;
  }

  ${({ $error }) => $error && "border-color: #EC3931;"}

  &:disabled {
    border-color: #bfbfbf;
    background: #f5f5f5;
  }
`;

export const StyledInput = styled.input<InputProps>`
  font-size: 14px;
  &::placeholder {
    font-size: 14px;
    color: #bfbfbf;
  }
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  background: transparent;
  padding: 4px 0;
  width: 100%;
  color: ${({ $error }) => ($error ? "#d32f2f" : "#212121")};

  /* 🔹 Elimina el fondo azul al cambiar de campo */
  &:focus {
    background: transparent !important;
    outline: none;
    box-shadow: none;
  }

  /* 🔹 Evita efecto azul en autocompletado */
  &:-webkit-autofill {
    background: transparent !important;
    box-shadow: 0 0 0px 1000px white inset !important;
    -webkit-text-fill-color: #212121 !important;
  }

  &:disabled {
    background: #f5f5f5;
    color: #9e9e9e;
  }
`;

export const Icon = styled.div`
  margin-right: 10px;
  color: #757575;
  display: flex;
  align-items: center;
`;