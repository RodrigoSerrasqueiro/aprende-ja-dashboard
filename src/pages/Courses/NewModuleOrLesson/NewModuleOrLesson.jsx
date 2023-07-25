import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { ApiContext } from "../../../contexts/ApiContext";
import axios from 'axios'
import { CourseContent, CourseImage, CourseImageContainer, CourseModulesContainer, CourseName, ModulesContent, ModulesList, ModulesOptions, NewModuleOrLessonContainer, CheckModule, LessonsCounter, ModuleName, ModuleToolBar, ShowLessonsButton, ToolBar, LessonsContainer, ButtonsContainer, LessonToolBar, LessonName, ModuleNameContainer, LessonNameContainer, LessonButtonsContainer, NewModuleModal, NewLessonModal } from "./NewModuleOrLesson.style";
import AddBoxIcon from '@mui/icons-material/AddBox';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import RotateLeftRoundedIcon from '@mui/icons-material/RotateLeftRounded';

function NewModuleOrLesson() {

  const { openMenu } = useContext(GlobalContext)
  const { addModuleToCourse, addLessonToModule, lessonID, videoURL, uploadVideo } = useContext(ApiContext)
  const [moduleModalIsOpen, setModuleModalIsOpen] = useState(false)
  const [lessonModalIsOpen, setLessonModalIsOpen] = useState(false)
  const [course, setCourse] = useState({})
  const [modules, setModules] = useState([])
  const [moduleName, setModuleName] = useState("")
  const [updateCounter, setUpdateCounter] = useState(0);
  const [currentModule, setCurrentModule] = useState("")
  const [lessonTitle, setLessonTitle] = useState("")
  const [lessonDescription, setLessonDescription] = useState("")
  const [lessonVideo, setLessonVideo] = useState("")
  const [isLoading, setIsLoading] = useState(false)



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
  }, [updateCounter])

  const [moduleLessonsVisibility, setModuleLessonsVisibility] = useState({});

  const handleToggleLessons = (moduleId) => {
    setModuleLessonsVisibility((prevState) => ({
      ...prevState,
      [moduleId]: !prevState[moduleId],
    }));
  };

  const newModule = () => {
    if (!moduleName) {
      alert("De um nome ao novo módulo!")
      return;
    }
    addModuleToCourse(course.courseID, moduleName)
    setModuleModalIsOpen(false)
    setUpdateCounter((prevCounter) => prevCounter + 1);
  }

  const openLessonModal = (moduleID) => {
    setLessonModalIsOpen(true)
    setCurrentModule(moduleID)
  }

  const handleVideoFile = (e) => {
    setLessonVideo(e.target.files[0])
  }

  const sendVideoFile = () => {
    if (!lessonVideo) {
      return;
    }
    uploadVideo(lessonVideo)
    setIsLoading(true)
  }

  const newLesson = () => {
    if (!course || !currentModule || !lessonID || !lessonTitle || !lessonDescription || !videoURL) {
      alert("Faltam dados")
      return;
    }
    addLessonToModule(course.courseID, currentModule, lessonID, lessonTitle, lessonDescription, videoURL)
    setLessonModalIsOpen(false)
    setUpdateCounter((prevCounter) => prevCounter + 1);
  }
  return (
    <NewModuleOrLessonContainer openmenu={openMenu ? "true" : "false"}>
      <NewModuleModal isopen={moduleModalIsOpen ? "true" : "false"}>
        <div>
          <span>Nome do módulo:</span>
          <CloseIcon onClick={() => setModuleModalIsOpen(false)} />
        </div>
        <input type="text" onChange={(e) => setModuleName(e.target.value)} />
        <button onClick={newModule}>Adicionar módulo</button>
      </NewModuleModal>
      <NewLessonModal isopen={lessonModalIsOpen ? "true" : "false"}>
        <div>
          <span>Preencha os dados da nova aula:</span>
          <CloseIcon onClick={() => setLessonModalIsOpen(false)} />
        </div>
        <span>Título da aula:</span>
        <input type="text" onChange={(e) => setLessonTitle(e.target.value)} />

        <span>Descrição da aula:</span>
        <input type="text" maxLength={300} onChange={(e) => setLessonDescription(e.target.value)} />

        <span>Selecione o vídeo da aula:</span>
        <input type="file" onChange={handleVideoFile} />
        <button onClick={sendVideoFile}>ENVIAR</button>
        {!videoURL && <RotateLeftRoundedIcon style={{ display: isLoading ? 'block' : 'none' }} />}
        {videoURL &&
          <iframe
            src={videoURL}
            title="Video Player"
            width="400"
            height="300"
          ></iframe>
        }
        <button onClick={newLesson}>ADICIONAR AULA</button>
      </NewLessonModal>
      <CourseContent>

        <CourseImageContainer>
          <CourseImage src={course.courseImage} alt="Imagem do curso" />
          <CourseName>{course.courseName}</CourseName>
        </CourseImageContainer>

        <CourseModulesContainer>
          <ModulesContent>
            <ModulesOptions>
              <span>Módulos</span>
              <button onClick={() => setModuleModalIsOpen(true)}>
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
                          <AddCircleIcon onClick={() => openLessonModal(module.moduleID)} />
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