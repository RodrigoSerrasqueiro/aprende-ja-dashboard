import { ThemeProvider } from "styled-components";
import GlobalStyles from './styles/GlobalStyles';
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

    </ThemeProvider>
  )
}

export default App
