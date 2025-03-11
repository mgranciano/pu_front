import styled from "styled-components";

export const StyledLabel = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "$bold" && prop !== "level"
})<{ $bold?: boolean; level: string; color?: string }>`
  font-family: "Roboto", sans-serif;
  font-weight: ${({ $bold }) => ($bold ? 700 : 400)};
  font-size: ${({ level }) =>
    level === "h1"
      ? "48px"
      : level === "h2"
      ? "40px"
      : level === "h3"
      ? "33px"
      : level === "h4"
      ? "28px"
      : level === "h5"
      ? "23px"
      : level === "h6"
      ? "19px"
      : level === "p"
      ? "15px"
      : level === "caption"
      ? "13px"
      : "11px"};
  line-height: ${({ level }) =>
    level === "h1"
      ? "65.28px"
      : level === "h2"
      ? "56px"
      : level === "h3"
      ? "46.2px"
      : level === "h4"
      ? "39.2px"
      : level === "h5"
      ? "32.2px"
      : level === "h6"
      ? "26.6px"
      : level === "p"
      ? "21px"
      : "18px"};
  color: ${({ color }) => color ?? "#000"};
  text-align: left;
  display: block;
  max-width: 90%;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: break-word;
`;