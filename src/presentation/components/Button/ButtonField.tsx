import { StyledButton } from "./ButtonStyles";

interface ButtonFieldProps {
  name?: string;
  theme: "TemaAzul" | "TemaNegro" | "TemaNaranja" | "TemaClaro";
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const ButtonField: React.FC<ButtonFieldProps> = ({
  name,
  theme,
  text,
  disabled,
  onClick,
  style,
}) => {
  return (
    <StyledButton
      $theme={theme} // Cambio de `theme` a `$theme`
      disabled={disabled}
      onClick={onClick}
      name={name}
      style={style}
    >
      {text}
    </StyledButton>
  );
};

export default ButtonField;