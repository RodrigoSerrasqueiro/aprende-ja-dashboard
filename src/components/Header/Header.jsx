import { ButtonMenu, Logo, LogoContainer, StyledHeader } from "./Header.style";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import ButtonToggleTheme from "../ButtonToggleTheme/ButtonToggleTheme";


function Header() {

  const { openMenu, setOpenMenu } = useContext(GlobalContext)

  return (
    <StyledHeader>
      <LogoContainer>
        <ButtonMenu onClick={() => setOpenMenu(!openMenu)}>
          {
            openMenu ? <CloseIcon /> : <MenuIcon />
          }
        </ButtonMenu>
        <Logo>AprendeJá</Logo>
      </LogoContainer>
      <ButtonToggleTheme />
    </StyledHeader>
  )
}

export default Header;