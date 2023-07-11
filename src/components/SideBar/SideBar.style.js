import styled from 'styled-components'

export const SideBarContainer = styled.div`
  position: fixed;
  top: 70px;
  left: ${({ openmenu }) => (openmenu === "true" ? "0" : "-310px")};
  width: 300px;
  height: 100%;
  background-color: ${({theme}) => theme.secondaryColor};
  box-shadow: 2px 0px 7px 0 ${({theme}) => theme.shadowColor};
  transition: .8s;
`;