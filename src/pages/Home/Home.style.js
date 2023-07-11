import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${({theme}) => theme.primaryColor};
  padding: ${({openmenu}) => (openmenu === "true" ? "80px 0 0 310px" : "80px 0 0 10px" )};
  transition: .8s;
  color: ${({theme}) => theme.primaryTextColor};
`;


