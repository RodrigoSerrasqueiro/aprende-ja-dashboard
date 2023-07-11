import { SideBarContainer } from "./SideBar.style";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";


function SideBar() {

  const { openMenu } = useContext(GlobalContext)

  return (
    <SideBarContainer openmenu={openMenu ? "true" : "false"}>

    </SideBarContainer>
  )
}

export default SideBar;