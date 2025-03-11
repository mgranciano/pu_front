import styled from "styled-components";

export const StyledTextLink = styled.a<{ color?: string }>`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 15.23px;
  letter-spacing: 0%;
  text-decoration: underline;
  text-decoration-style: solid;
  color: ${({ color }) => color};
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  background: transparent;
  margin-right: 10px;
  margin-left: 10px;
  &:hover {
    color: #175da9;
  }
`;
