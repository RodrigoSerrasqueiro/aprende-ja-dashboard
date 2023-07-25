import { useContext } from "react";
import { ApiContext } from "../../../contexts/ApiContext";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { CourseContent, CourseImage, CourseImageContainer, CourseModulesContainer, CourseName, ModulesContent, ModulesList, ModulesOptions, NewModuleOrLessonContainer } from "./NewModuleOrLesson.style";
import ModulesToolBar from "../../../components/ModulesToolBar/ModulesTollBar";
import AddBoxIcon from '@mui/icons-material/AddBox';

function NewModuleOrLesson() {
  const { course, modules } = useContext(ApiContext)
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
                    <ModulesToolBar
                      key={module.moduleID}
                      moduleName={module.moduleName}
                      numberOfLessons={`${module.lessons.length} aulas`}
                    />
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