import { styled } from "styled-components";

export const Button = styled.button`
  color: ${({theme}) => theme.primaryTextColor};
  padding: 5px;
  border-radius: 8px;
  cursor: pointer;
`;