import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import axios from 'axios'
import { CourseContent, CourseImage, CourseImageContainer, CourseModulesContainer, CourseName, ModulesContent, ModulesList, ModulesOptions, NewModuleOrLessonContainer, CheckModule, LessonsCounter, ModuleName, ModuleToolBar, ShowLessonsButton, ToolBar, LessonsContainer, ButtonsContainer, LessonToolBar, LessonName, ModuleNameContainer, LessonNameContainer, LessonButtonsContainer } from "./NewModuleOrLesson.style";
import AddBoxIcon from '@mui/icons-material/AddBox';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function NewModuleOrLesson() {

  const { openMenu } = useContext(GlobalContext)

  const [course, setCourse] = useState({})
  const [modules, setModules] = useState([])

  async function load() {
    const courseID = sessionStorage.getItem("courseID");
    if (courseID) {
      const url = `http://localhost:4000/courses/get-course/${courseID}`;
      try {
        const response = await axios.get(url);
        const courseData = response.data;
        setCourse(courseData);
        const modulesData = courseData.modules;
        setModules(modulesData);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("não achou ID do curso")
      // Caso não haja courseID no sessionStorage, redireciona para alguma página de erro ou tratamento adequado
    }
  }

  useEffect(() => {
    load()
  }, [])

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