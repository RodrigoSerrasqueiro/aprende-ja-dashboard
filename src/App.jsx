import { ThemeProvider } from "styled-components";
import GlobalStyles from './styles/GlobalStyles';
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NewUser from "./pages/Users/NewUser/NewUser";
import NewCourse from "./pages/Courses/NewCourse/NewCourse";
import { ApiStorage } from "./contexts/ApiContext";


function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <ApiStorage>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-user" element={<NewUser />} />
            <Route path="/new-course" element={<NewCourse />} />
          </Routes>
        </ThemeProvider>
      </ApiStorage>
    </BrowserRouter>
  )
}

export default App
