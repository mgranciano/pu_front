import { StyledLabel } from "./LabelStyles";

interface LabelFieldProps {
  bold?: boolean;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "caption" | "footnote";
  text: string;
  color?: string;
  style?: React.CSSProperties;
}

const LabelField: React.FC<LabelFieldProps> = ({
  level,
  text,
  color = "#000",
  bold = false,
  style
}) => {
  return (
    <StyledLabel
      as={level}
      level={level}
      color={color}
      bold={bold}
      style={style}
    >
      {text}
    </StyledLabel>
  );
};

export default LabelField;
