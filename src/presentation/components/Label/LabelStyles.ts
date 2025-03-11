import styled from "styled-components";

export const StyledLabel = styled.span<{
  level: string;
  color?: string;
  bold?: boolean;
}>`
  font-family: "Roboto", sans-serif;
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
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

  display: block; /* Asegura que se comporte como un bloque */
  max-width: 90%; /* Se adapta al contenedor */
  white-space: normal; /* Permite que el texto se divida en varias líneas */
  overflow-wrap: break-word; /* Rompe las palabras largas */
  word-break: break-word; /* Asegura que el texto se ajuste dentro del espacio */
`;
