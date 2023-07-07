import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext";
import { Button } from "./ButtonToggleTheme.style";


function ButtonToggleTheme() {

  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme}>Alterar tema</Button>
  )
}

export default ButtonToggleTheme;