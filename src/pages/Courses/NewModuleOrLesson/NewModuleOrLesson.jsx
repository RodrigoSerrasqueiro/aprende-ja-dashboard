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
import InputDropZone from "../../../components/InputDropZone/InputDropZone";

function NewModuleOrLesson() {

  const { openMenu } = useContext(GlobalContext)
  const { addModuleToCourse, addLessonToModule, lessonID, videoURL, uploadVideo, editModuleName, editLessonData, uploadSucessful, hideUploadMessage } = useContext(ApiContext)
  const [moduleModalIsOpen, setModuleModalIsOpen] = useState(false)
  const [editModuleModal, setEditModuleModal] = useState(false)
  const [lessonModalIsOpen, setLessonModalIsOpen] = useState(false)
  const [editLessonModal, setEditLessonModal] = useState(false)
  const [course, setCourse] = useState({})
  const [modules, setModules] = useState([])
  const [moduleName, setModuleName] = useState("")
  const [moduleNameEdited, setModuleNameEdited] = useState("")
  const [updateCounter, setUpdateCounter] = useState(0);
  const [currentModule, setCurrentModule] = useState("")
  const [currentLesson, setCurrentLesson] = useState("")
  const [lessonTitle, setLessonTitle] = useState("")
  const [lessonDescription, setLessonDescription] = useState("")
  const [lessonData, setLessonData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [editVideo, setEditVideo] = useState(true)



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

  const newModule = async () => {
    if (!moduleName) {
      alert("De um nome ao novo módulo!");
      return;
    }

    try {
      await addModuleToCourse(course.courseID, moduleName);

      setUpdateCounter((prevCounter) => prevCounter + 1);
      closeNewModuleModal()
    } catch (error) {
      console.error("Erro ao adicionar o módulo:", error);
    }
  };

  const openLessonModal = (moduleID) => {
    setIsLoading(false)
    setLessonModalIsOpen(true)
    setCurrentModule(moduleID)
    hideUploadMessage()
  }

  const closeNewModuleModal = () => {
    setModuleModalIsOpen(false)
    setModuleName("")
  }

  const closeEditModuleModal = () => {
    setEditModuleModal(false)
  }

  const closeNewLessonModal = () => {
    setLessonModalIsOpen(false)
    setLessonTitle("")
    setLessonDescription("")
  }

  const closeEditLessonModal = () => {
    setEditLessonModal(false)
  }

  const sendVideoFile = (video) => {
    if (!video) {
      return;
    }
    uploadVideo(video)
    setIsLoading(true)
  }

  const newLesson = async () => {
    if (!course || !currentModule || !lessonID || !lessonTitle || !lessonDescription || !videoURL) {
      alert("Faltam dados");
      return;
    }

    try {
      await addLessonToModule(course.courseID, currentModule, lessonID, lessonTitle, lessonDescription, videoURL);

      setUpdateCounter((prevCounter) => prevCounter + 1);
      closeNewLessonModal()

    } catch (error) {
      console.error("Erro ao adicionar a aula:", error);
    }
  };

  const openEditModuleModal = (moduleID, moduleName) => {
    setModuleNameEdited(moduleName)
    setCurrentModule(moduleID)
    setEditModuleModal(true)
  }

  const openEditLessonModal = (moduleID, lessonID, lessonTitle, lessonDescription, lessonVideoURL) => {
    hideUploadMessage()
    setIsLoading(false)
    setCurrentModule(moduleID)
    setCurrentLesson(lessonID)
    setLessonData({ lessonTitle: lessonTitle, lessonDescription: lessonDescription, lessonVideoURL: lessonVideoURL })
    setEditLessonModal(true)
  }

  const editModule = async () => {
    if (!course || !currentModule || !moduleNameEdited) {
      alert("Faltam dados");
      return;
    }

    try {
      await editModuleName(course.courseID, currentModule, moduleNameEdited);

      closeEditModuleModal()
      setUpdateCounter((prevCounter) => prevCounter + 1);
    } catch (error) {
      console.error("Erro ao alterar dados do módulo:", error);
    }
  };

  const editLesson = async () => {
    if (!course || !currentModule || !lessonData.lessonTitle || !lessonData.lessonDescription || !lessonData.lessonVideoURL) {
      alert("Faltam dados");
      return;
    }

    try {
      if (!videoURL) {
        await editLessonData(course.courseID, currentModule, currentLesson, lessonData.lessonTitle, lessonData.lessonDescription, lessonData.lessonVideoURL);
      } else {
        await editLessonData(course.courseID, currentModule, currentLesson, lessonData.lessonTitle, lessonData.lessonDescription, videoURL);
      }

      closeEditLessonModal()
      setUpdateCounter((prevCounter) => prevCounter + 1);
    } catch (error) {
      console.error("Erro ao alterar dados da aula:", error);
    }
  };



  return (
    <NewModuleOrLessonContainer openmenu={openMenu ? "true" : "false"}>
      {/*modal para adição de um novo módulo */}
      <NewModuleModal isopen={moduleModalIsOpen ? "true" : "false"}>
        <div>
          <span>Nome do módulo:</span>
          <CloseIcon onClick={closeNewModuleModal} />
        </div>
        <input type="text" value={moduleName} onChange={(e) => setModuleName(e.target.value)} />
        <button onClick={newModule}>Adicionar módulo</button>
      </NewModuleModal>

      {/*modal para edição de dados do módulo */}
      <NewModuleModal isopen={editModuleModal ? "true" : "false"}>
        <div>
          <span>Nome do módulo:</span>
          <CloseIcon onClick={closeEditModuleModal} />
        </div>
        <input type="text" value={moduleNameEdited} onChange={(e) => setModuleNameEdited(e.target.value)} />
        <button onClick={editModule}>Salvar alterações</button>
      </NewModuleModal>

      {/*modal para adição de uma nova aula */}
      <NewLessonModal isopen={lessonModalIsOpen ? "true" : "false"}>
        <div>
          <span>Preencha os dados da nova aula:</span>
          <CloseIcon onClick={closeNewLessonModal} />
        </div>
        <span>Título da aula:</span>
        <input type="text" value={lessonTitle} onChange={(e) => setLessonTitle(e.target.value)} />

        <span>Descrição da aula:</span>
        <input type="text" value={lessonDescription} maxLength={300} onChange={(e) => setLessonDescription(e.target.value)} />

        <span>Selecione o vídeo da aula:</span>
        <InputDropZone sendFile={sendVideoFile} acceptedFileType="video/*" />
        {!videoURL && <RotateLeftRoundedIcon style={{ display: isLoading ? 'block' : 'none' }} />}
        {uploadSucessful && <span>Upload realizado com sucesso!</span>}
        <button onClick={newLesson}>ADICIONAR AULA</button>
      </NewLessonModal>

      {/*modal para edição dos dados de uma aula */}
      <NewLessonModal isopen={editLessonModal ? "true" : "false"}>
        <div>
          <span>Edite os dados da aula:</span>
          <CloseIcon onClick={closeEditLessonModal} />
        </div>
        <span>Título da aula:</span>
        <input type="text" value={lessonData.lessonTitle} onChange={(e) => setLessonData((data) => ({ ...data, lessonTitle: e.target.value }))} />

        <span>Descrição da aula:</span>
        <input type="text" value={lessonData.lessonDescription} maxLength={300} onChange={(e) => setLessonData((data) => ({ ...data, lessonDescription: e.target.value }))} />

        <button onClick={() => setEditVideo(!editVideo)}>{editVideo ? "Alterar video da aula" : "Cancelar"}</button>
        {!editVideo && <InputDropZone sendFile={sendVideoFile} acceptedFileType="video/*" />}

        {!videoURL && <RotateLeftRoundedIcon style={{ display: isLoading ? 'block' : 'none' }} />}
        {uploadSucessful && <span>Upload realizado com sucesso!</span>}
        <button onClick={editLesson}>Salvar alterações</button>
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
                          <EditIcon onClick={() => openEditModuleModal(module.moduleID, module.moduleName)} />
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
                              <EditIcon
                                onClick={() => openEditLessonModal(module.moduleID, lesson.lessonID, lesson.lessonTitle, lesson.lessonDescription, lesson.lessonVideoURL)}
                              />
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