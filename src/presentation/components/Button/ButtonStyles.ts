import styled from "styled-components";

export const StyledButton = styled.button<{
  theme: string;
  disabled?: boolean;
}>`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 17.58px;
  text-align: center;
  height: 44px;
  border-radius: 8px;
  padding: 10px 16px;
  cursor: pointer;
  transition:
    background 0.3s,
    border 0.3s;
  border: none;
  color: #fff;
  margin-top: 10px;
  margin-left: 5px;
  margin-bottom: 5px;
  margin-right: 5px;

  ${({ theme, disabled }) =>
    theme === "TemaAzul" &&
    `
      background: ${disabled ? "#A5C7ED" : "#1D74D3"};
      &:hover { background: ${disabled ? "#A5C7ED" : "#175DA9"}; }
    `}

  ${({ theme, disabled }) =>
    theme === "TemaNegro" &&
    `
      background: ${disabled ? "#C2C5C8" : "#343D48"};
      &:hover { background: ${disabled ? "#C2C5C8" : "#000E15"}; }
    `}

  ${({ theme, disabled }) =>
    theme === "TemaNaranja" &&
    `
      background: ${disabled ? "#F48883" : "#EC3931"};
      &:hover { background: ${disabled ? "#F48883" : "#D4332C"}; }
    `}

  ${({ theme, disabled }) =>
    theme === "TemaClaro" &&
    `
      background: ${disabled ? "#fff" : "#fff"};
      color: ${disabled ? "#A5C7ED" : "#1D74D3"};
      border: 1px solid ${disabled ? "#A5C7ED" : "#1D74D3"};
      &:hover { background: ${disabled ? "#fff" : "#175DA9"}; color: #fff; }
    `}

  &:disabled {
    cursor: not-allowed;
  }
`;
