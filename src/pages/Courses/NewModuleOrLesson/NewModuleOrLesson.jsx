import { useContext, useState } from "react";
import { ApiContext } from "../../../contexts/ApiContext";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { CourseContent, CourseImage, CourseImageContainer, CourseModulesContainer, CourseName, ModulesContent, ModulesList, ModulesOptions, NewModuleOrLessonContainer, CheckModule, LessonsCounter, ModuleName, ModuleToolBar, ShowLessonsButton, ToolBar, LessonsContainer, ButtonsContainer, LessonToolBar, LessonName, ModuleNameContainer, LessonNameContainer, LessonButtonsContainer } from "./NewModuleOrLesson.style";
import AddBoxIcon from '@mui/icons-material/AddBox';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function NewModuleOrLesson() {
  const { course, modules } = useContext(ApiContext)
  const { openMenu } = useContext(GlobalContext)

  const [moduleLessonsVisibility, setModuleLessonsVisibility] = useState({});

  const handleToggleLessons = (moduleId) => {
    setModuleLessonsVisibility((prevState) => ({
      ...prevState,
      [moduleId]: !prevState[moduleId],
    }));
  };

  return (
    <NewModuleOrLessonContainer openmenu={openMenu ? "true" : "false"}>
      <CourseContent>

        <CourseImageContainer>
          <CourseImage src={course.courseImage} alt="Imagem do curso" />
          <CourseName>{course.courseName}</CourseName>
        </CourseImageContainer>

        <CourseModulesContainer>
          <ModulesContent>
            <ModulesOptions>
              <span>Módulos</span>
              <button>
                <AddBoxIcon />
                Adicionar
              </button>
            </ModulesOptions>

            <ModulesList>
              {modules && modules.length < 1 ?
                (
                  <span>Não há módulos</span>
                )
                :
                (
                  modules.map((module) => (
                    <ModuleToolBar key={module.moduleID}>
                      <ToolBar>
                        <MenuIcon />
                        <CheckModule
                          type="checkbox"
                        />
                        <ModuleNameContainer>
                          <ModuleName>{module.moduleName}</ModuleName>
                        </ModuleNameContainer>
                        <LessonsCounter>{`${module.lessons.length} aulas`}</LessonsCounter>
                        <ButtonsContainer>
                          <AddCircleIcon />
                          <EditIcon />
                          <DeleteIcon />
                        </ButtonsContainer>
                      </ToolBar>
                      <ShowLessonsButton onClick={() => handleToggleLessons(module.moduleID)}>
                        {moduleLessonsVisibility[module.moduleID] ?
                          <KeyboardArrowUpIcon />
                          :
                          <KeyboardArrowDownIcon />
                        }
                      </ShowLessonsButton>
                      {module.lessons.map((lesson) => (
                        <LessonsContainer
                          showlessons={moduleLessonsVisibility[module.moduleID] ? "true" : "false"}
                          key={lesson.lessonID}
                        >
                          <LessonToolBar>
                            <MenuIcon />
                            <CheckModule
                              type="checkbox"
                            />
                            <LessonNameContainer>
                              <LessonName>{lesson.lessonTitle}</LessonName>
                            </LessonNameContainer>
                            <LessonButtonsContainer>
                              <EditIcon />
                              <DeleteIcon />
                            </LessonButtonsContainer>
                          </LessonToolBar>
                        </LessonsContainer>
                      ))}
                    </ModuleToolBar>
                  ))
                )
              }
            </ModulesList>
          </ModulesContent>
        </CourseModulesContainer>

      </CourseContent>
    </NewModuleOrLessonContainer>
  )
}

export default NewModuleOrLesson;