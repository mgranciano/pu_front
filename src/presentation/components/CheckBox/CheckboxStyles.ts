import styled from "styled-components";

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 15.23px;
  letter-spacing: 0%;
  color: #000;
  margin-left: 10px;
  margin-right: 10px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const StyledCheckbox = styled.div<{ $checked: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 4px;
  border: 2px solid #c2c5c8;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $checked }) => ($checked ? "#1D74D3" : "transparent")};
  transition: all 0.2s ease-in-out;

  &:after {
    content: "";
    display: ${({ $checked }) => ($checked ? "block" : "none")};
    width: 8px;
    height: 8px;
    background-color: white;
    border-radius: 4px;
  }
`;