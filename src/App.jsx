import { ThemeProvider } from "styled-components";
import GlobalStyles from './styles/GlobalStyles';
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <SideBar />
    </ThemeProvider>
  )
}

export default App
