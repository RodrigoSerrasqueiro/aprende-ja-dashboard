import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) => theme.primaryColor};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.primaryTextColor};
`;

