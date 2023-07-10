import styled from 'styled-components'

export const SideBarContainer = styled.div`
  position: fixed;
  top: 70px;
  left: ${({openMenu}) => openMenu? '0' : '-300px'};
  width: 300px;
  height: 100%;
  background-color: ${({theme}) => theme.secondaryColor};
  box-shadow: 5px 0px 7px 0 rgba(0, 0, 0, 0.15);
  transition: .8s;
`;