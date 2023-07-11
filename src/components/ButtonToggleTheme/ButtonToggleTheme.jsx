import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext";
import { MaterialUISwitch } from "./ButtonToggleTheme.style";


function ButtonToggleTheme() {

  const { toggleTheme, darkMode } = useContext(ThemeContext);

  return (
    <MaterialUISwitch sx={{ m: 1 }} defaultChecked={false} onChange={toggleTheme} darkmode={darkMode ? "true" : "false"} />
  )
}

export default ButtonToggleTheme;