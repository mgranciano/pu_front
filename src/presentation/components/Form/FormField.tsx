/* eslint-disable no-unused-vars */

import React from "react";
import { StyledForm } from "./FormStyles";

interface FormFieldProps {
  children: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  style?: React.CSSProperties;
}

const FormField: React.FC<FormFieldProps> = ({ children, onSubmit, style }) => {
  return (
    <StyledForm onSubmit={onSubmit} style={style}>
      {children}
    </StyledForm>
  );
};

export default FormField;
