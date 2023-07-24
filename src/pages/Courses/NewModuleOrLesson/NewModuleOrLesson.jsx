import { useContext, useState } from "react";
import { ApiContext } from "../../../contexts/ApiContext";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { CourseContent, CourseImage, CourseImageContainer, CourseModulesContainer, CourseName, ModuleEdit, ModulesContent, ModulesList, ModulesOptions, NewModuleOrLessonContainer } from "./NewModuleOrLesson.style";

function NewModuleOrLesson() {
  const { course } = useContext(ApiContext)
  const { openMenu } = useContext(GlobalContext)
  const modules = course.modules
  const [openModulesList, setOpenModulesList] = useState(true)

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
              <span>Modules</span>
              <button>Adicionar módulo</button>
              <button onClick={() => setOpenModulesList(!openModulesList)}>{openModulesList ? "Fechar" : "Abrir"}</button>
            </ModulesOptions>

            <ModulesList openmoduleslist={openModulesList ? "true" : "false"}>
              {modules && modules.length < 1 ?
                (
                  <span>Não há módulos</span>
                )
                :
                (
                  modules.map((module) => (
                    <ModuleEdit key={module.moduleID}>
                      <span>{module.moduleName}</span>
                      <button>ver aulas</button>
                      <button>Adicionar aula</button>
                    </ModuleEdit>

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