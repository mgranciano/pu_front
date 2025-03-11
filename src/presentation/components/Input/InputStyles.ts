import styled from "styled-components";

interface InputProps {
  error?: boolean;
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //gap: 8px;
  margin: 5px;
`;

export const Label = styled.label<InputProps>`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 15px;
  color: ${(props) => (props.error ? "#d32f2f" : "#000")};
`;

export const InputContainer = styled.div<InputProps>`
  min-width: 320px;
  height: 22px;
  display: flex;
  align-items: center;
  border: 1px solid #BFBFBF;
  border-radius: 8px;
  padding: 10px;
  background: ${(props) => (props.error ? "#ffebee" : "#ffffff")};
  transition: border-color 0.3s;
  pointer-events: auto;

  &:focus-within {
    border-color: #1D74D3;
  }

  &:has(input:not(:placeholder-shown)) {
    border-color: #BFBFBF;
  }

  ${(props) => props.error && "border-color: #EC3931;"}

  &:disabled {
    border-color: #BFBFBF;
    background: #f5f5f5;
  }
`;

export const StyledInput = styled.input<InputProps>`
  font-size: 14px;
  &::placeholder {
    font-size: 14px;
    color: #BFBFBF;
  }
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  background: transparent;
  padding: 4px 0;
  width: 100%;
  color: ${(props) => (props.error ? "#d32f2f" : "#212121")};
  pointer-events: auto;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: #f5f5f5;
    color: #9e9e9e;
  }
`;

export const Icon = styled.div`
  margin-right: 10px;
  color: #757575;
  display: flex;
  align-items: center;
`;
