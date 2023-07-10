import { ButtonMenu, Logo, LogoContainer, StyledHeader } from "./Header.style";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";


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
    </StyledHeader>
  )
}

export default Header;