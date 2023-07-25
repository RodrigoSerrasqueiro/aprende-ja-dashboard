import { useContext } from "react";
import { ApiContext } from "../../../contexts/ApiContext";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { CourseContent, CourseImage, CourseImageContainer, CourseModulesContainer, CourseName, ModulesContent, ModulesList, ModulesOptions, NewModuleOrLessonContainer, CheckModule, LessonsCounter, ModuleName, ModuleToolBar, ShowLessonsButton, ToolBar, Lesson } from "./NewModuleOrLesson.style";
import AddBoxIcon from '@mui/icons-material/AddBox';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function NewModuleOrLesson() {
  const { course, modules, showLessons, setShowLessons } = useContext(ApiContext)
  const { openMenu } = useContext(GlobalContext)

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
                        <ModuleName>{module.moduleName}</ModuleName>
                        <LessonsCounter>{`${module.lessons.length} aulas`}</LessonsCounter>
                      </ToolBar>
                      <ShowLessonsButton onClick={() => setShowLessons(!showLessons)}>
                        {showLessons ?
                          <KeyboardArrowUpIcon />
                          :
                          <KeyboardArrowDownIcon />
                        }
                      </ShowLessonsButton>
                      {module.lessons.map((lesson) => (
                        <Lesson showlessons={showLessons ? "true" : "false"} key={lesson.lessonID}>
                          {lesson.lessonTitle}
                        </Lesson>
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