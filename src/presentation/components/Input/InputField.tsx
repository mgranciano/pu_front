/* eslint-disable no-unused-vars */
import { JSX } from "react";
import { InputWrapper, StyledInput, InputContainer, Icon } from "./InputStyles";
import { useState } from "react";
import mostrarIcon from "../../../assets/accion-mostrar.svg";
import ocultarIcon from "../../../assets/accion-ocultar.svg";
import LabelField from "../Label/LabelField";

interface InputFieldProps {
  type?: string;
  name?: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  placeholder?: string;
  disabled?: boolean;
  icon?: JSX.Element;
  labelLevel?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "caption"
    | "footnote";
  labelBold?: boolean;
  style?: React.CSSProperties;
}

const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  name,
  label,
  value,
  onChange,
  error,
  placeholder,
  disabled,
  icon,
  labelLevel = "p",
  labelBold = true,
  style,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <InputWrapper>
      <LabelField
        level={labelLevel}
        text={label}
        bold={labelBold}
        color={error ? "#d32f2f" : "#000"}
      />
      <InputContainer error={error}>
        {icon && <Icon>{icon}</Icon>}
        <StyledInput
          type={type === "password" && !isPasswordVisible ? "password" : "text"}
          name={name}
          value={value}
          style={style}
          onChange={(e) => {
            onChange(e);
          }}
          placeholder={placeholder}
          disabled={disabled}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <img
              src={isPasswordVisible ? ocultarIcon : mostrarIcon}
              alt={
                isPasswordVisible ? "Ocultar contraseña" : "Mostrar contraseña"
              }
              width="20"
              height="20"
            />
          </button>
        )}
      </InputContainer>
    </InputWrapper>
  );
};

export default InputField;
