/* eslint-disable no-unused-vars */

import React from "react";
import { StyledForm } from "./FormStyles";

interface FormFieldProps {
  children: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  style?: React.CSSProperties;
}

const FormField: React.FC<FormFieldProps> = ({ children, onSubmit, style }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 🚀 Evita la recarga de la página
    if (onSubmit) onSubmit(event);
  };

  return (
    <StyledForm as="form" onSubmit={handleSubmit} style={style}>
      {children}
    </StyledForm>
  );
};

export default FormField;