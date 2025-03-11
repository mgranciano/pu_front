import React from "react";
import { StyledTextLink } from "./TextLinkStyles";

interface TextLinkProps {
  text: string;
  href: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  color?: string;
  style?: React.CSSProperties;
}

const TextLinkField: React.FC<TextLinkProps> = ({
  text,
  href,
  target = "_self",
  color = "#1D74D3",
  style,
}) => {
  return (
    <StyledTextLink href={href} target={target} color={color} style={style}>
      {text}
    </StyledTextLink>
  );
};

export default TextLinkField;
