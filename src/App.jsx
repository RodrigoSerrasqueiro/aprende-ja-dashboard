import { ThemeProvider } from "styled-components";
import GlobalStyles from './styles/GlobalStyles';
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
