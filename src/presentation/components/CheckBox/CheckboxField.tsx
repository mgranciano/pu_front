/* eslint-disable no-unused-vars */
import React from "react";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
} from "./CheckboxStyles";

interface CheckboxProps {
  label?: string;
  name?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

const CheckboxField: React.FC<CheckboxProps> = ({
  label = "Checkbox",
  name,
  checked,
  onChange,
  style,
}) => {
  return (
    <CheckboxContainer>
      {/* Input real, pero oculto */}
      <HiddenCheckbox name={name} checked={checked} onChange={onChange} />
      {/* Checkbox estilizado */}
      <StyledCheckbox $checked={checked} style={style} />
      <span style={{ marginLeft: "8px" }}>{label}</span>
    </CheckboxContainer>
  );
};

export default CheckboxField;