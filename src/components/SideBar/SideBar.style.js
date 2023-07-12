import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px 0 20px;
  position: fixed;
  top: 70px;
  left: ${({ openmenu }) => (openmenu === "true" ? "0" : "-310px")};
  width: 300px;
  max-height: calc(100vh - 70px);
  background-color: ${({theme}) => theme.secondaryColor};
  box-shadow: 2px 0px 7px 0 ${({theme}) => theme.shadowColor};
  transition: .8s;
  overflow-y: scroll;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 8px;
`;

export const NavContainer = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  
  &:hover {
    cursor: pointer;
    background-color: ${({theme}) => theme.terciaryColor};
  }

  >svg {
    color: ${({theme}) => theme.iconColor};
    font-size: 17px;
    margin: 0 20px;
  }
`;

export const SectionTitle = styled.p`
  color: ${({theme}) => theme.terciaryTextColor};
`;

export const NavText = styled.p`
  color: ${({theme}) => theme.navTextColor};
`;