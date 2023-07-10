import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  background-color: ${({theme}) => theme.primaryColor};
  box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.15);
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 220px;
  height: 100%;
`;

export const Logo = styled.h1`
  margin: 0;
  color: ${({theme}) => theme.primaryTextColor};
`;

export const ButtonMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: 1s;

  > svg {
    width: 30px;
    height: auto;
    color: ${({theme}) => theme.secondaryTextColor};;
  }

  &:hover {
    background-color: #DCDEE2;
  }
`;




