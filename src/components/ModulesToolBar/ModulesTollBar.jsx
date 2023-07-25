/* eslint-disable react/prop-types */
import { CheckModule, LessonsCounter, ModuleName, ModuleToolBar, ShowLessonsButton, ToolBar } from "./ModulesToolBar.style";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';
import { ApiContext } from "../../contexts/ApiContext";
import { useContext } from "react";

function ModulesToolBar(props) {

  const { showLessons, setShowLessons } = useContext(ApiContext)

  return (
    <ModuleToolBar>
      <ToolBar>
        <MenuIcon />
        <CheckModule
          type="checkbox"
        />
        <ModuleName>{props.moduleName}</ModuleName>
        <LessonsCounter>{props.numberOfLessons}</LessonsCounter>
      </ToolBar>
      <ShowLessonsButton onClick={() => setShowLessons(!showLessons)}>
        {showLessons ?
          <KeyboardArrowUpIcon />
          :
          <KeyboardArrowDownIcon />
        }
      </ShowLessonsButton>

    </ModuleToolBar>
  )
}

export default ModulesToolBar;