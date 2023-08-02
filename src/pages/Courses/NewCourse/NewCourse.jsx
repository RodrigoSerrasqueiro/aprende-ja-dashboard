import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../../contexts/GlobalContext"
import { CloseButton, CoursesContent, FormContainer, Modal, ModalContent, NewCourseButton, NewCourseContainer } from "./NewCourse.style"
import FormNewCourse from "../../../components/FormNewCourse/FormNewCourse"
import { ApiContext } from "../../../contexts/ApiContext"
import CourseCard from "../../../components/CourseCard/CourseCard"
import AddBoxIcon from '@mui/icons-material/AddBox';
import RotateLeftRoundedIcon from '@mui/icons-material/RotateLeftRounded';
import InputDropZone from "../../../components/InputDropZone/InputDropZone"


function NewCourse() {

  const { openMenu } = useContext(GlobalContext)
  const { courses, getCourses, openModalNewCourse, addNewCourse, closeModalNewCourse, uploadImage, uploadSucessful, uploadFailed, isLoading, editCourse, imageURL } = useContext(ApiContext)
  const [courseData, setCourseData] = useState({})
  const [editCourseModalIsOpen, setEditCourseModalIsOpen] = useState(false)
  const [editImage, setEditImage] = useState(true)
  const [updateCounter, setUpdateCounter] = useState(0);

  useEffect(() => {
    getCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateCounter])

  const openEditCourseModal = (courseData) => {
    setCourseData(courseData)
    setEditCourseModalIsOpen(true)
  }

  const closeEditCourseModal = () => {
    setEditCourseModalIsOpen(false)
    setEditImage(true)
  }

  const editCourseData = async () => {
    if (!courseData) {
      alert("Faltam dados");
      return;
    }

    try {
      if (!imageURL) {
        await editCourse(courseData.courseID, courseData.courseType, courseData.courseSubType, courseData.courseName, courseData.courseImage, courseData.courseDescription, courseData.courseWorkload, courseData.teacherName, courseData.courseLevel);
      } else {
        await editCourse(courseData.courseID, courseData.courseType, courseData.courseSubType, courseData.courseName, imageURL, courseData.courseDescription, courseData.courseWorkload, courseData.teacherName, courseData.courseLevel);
      }

      setUpdateCounter((prevCounter) => prevCounter + 1);
      closeEditCourseModal()
    } catch (error) {
      console.error("Erro ao alterar dados do curso:", error);
    }
  };

  return (
    <NewCourseContainer openmenu={openMenu ? "true" : "false"}>

      <Modal openmodal={openModalNewCourse ? "true" : "false"}>
        <ModalContent>
          <CloseButton onClick={closeModalNewCourse}>Fechar</CloseButton>
          <FormNewCourse />
        </ModalContent>
      </Modal>

      <Modal openmodal={editCourseModalIsOpen ? "true" : "false"}>
        <ModalContent>
          <CloseButton onClick={closeEditCourseModal}>Fechar</CloseButton>
          <FormContainer>

            <span>TIPO DE CURSO</span>
            <select value={courseData.courseType || ""} onChange={(e) => setCourseData((data) => ({ ...data, courseType: e.target.value }))}>
              <option value="">Escolha o tipo de curso</option>
              <option value="Tecnologia">Tecnologia</option>
              <option value="Idiomas">Idiomas</option>
              <option value="Outro">Outro</option>
            </select>

            <span>SUBTIPO DE CURSO</span>
            <select value={courseData.courseSubType || ""} onChange={(e) => setCourseData((data) => ({ ...data, courseSubType: e.target.value }))}>
              <option value="">Escolha o subtipo de curso</option>
              <option value="Programação">Programação</option>
              <option value="Inglês">Inglês</option>
              <option value="Outro">Outro</option>
            </select>


            <span>NOME DO CURSO</span>
            <input type="text" value={courseData.courseName || ""} onChange={(e) => setCourseData((data) => ({ ...data, courseName: e.target.value }))} />

            <button onClick={() => setEditImage(!editImage)}>{editImage ? "Alterar imagem do curso" : "Cancelar"}</button>
            {!editImage && <InputDropZone sendFile={uploadImage} acceptedFileType="image/*" />}
            {!uploadSucessful && <RotateLeftRoundedIcon style={{ display: isLoading ? 'block' : 'none' }} />}
            {uploadSucessful && <span>Upload realizado com sucesso!</span>}
            {uploadFailed && <span style={{ color: "red" }}>O upload falhou! Tente novamente.</span>}

            <span>DESCRIÇÃO DO CURSO</span>
            <input type="text" value={courseData.courseDescription || ""} onChange={(e) => setCourseData((data) => ({ ...data, courseDescription: e.target.value }))} />

            <span>CARGA HORÁRIA DO CURSO</span>
            <div>
              <input type="number" value={courseData.courseWorkload || ""} onChange={(e) => setCourseData((data) => ({ ...data, courseWorkload: e.target.value }))} /> horas
            </div>

            <span>PROFESSOR(A) DO CURSO</span>
            <input type="text" value={courseData.teacherName || ""} onChange={(e) => setCourseData((data) => ({ ...data, teacherName: e.target.value }))} />

            <span>NÍVEL DO CURSO</span>
            <select value={courseData.courseLevel || ""} onChange={(e) => setCourseData((data) => ({ ...data, courseLevel: e.target.value }))}>
              <option value="">Escolha o nível do curso</option>
              <option value="Básico">Básico</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>

            <button onClick={editCourseData}>Salvar alterações</button>
          </FormContainer>
        </ModalContent>
      </Modal>

      <NewCourseButton onClick={addNewCourse}>
        <AddBoxIcon />
        Novo
      </NewCourseButton>
      {courses && courses.length > 0 ?
        <CoursesContent>
          {courses.slice(0).reverse().map((course, index) => (
            <CourseCard
              key={index}
              courseImage={course.courseImage}
              courseName={course.courseName}
              courseID={course.courseID}
              openEditCourseModal={() => openEditCourseModal(course)}
            />
          ))}
        </CoursesContent>
        :
        <h1 style={{ marginTop: "30px" }}>NÃO HÁ CURSOS CADASTRADOS</h1>
      }
    </NewCourseContainer>
  )
}

export default NewCourse;