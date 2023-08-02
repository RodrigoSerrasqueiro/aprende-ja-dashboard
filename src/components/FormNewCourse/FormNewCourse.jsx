import { useContext, useState } from "react"
import { ApiContext } from "../../contexts/ApiContext"
import { FormContainer, SubmitButton } from "./FormNewCourse.style";
import InputDropZone from "../InputDropZone/InputDropZone";
import RotateLeftRoundedIcon from '@mui/icons-material/RotateLeftRounded';

function FormNewCourse() {

  const { createCourse, uploadImage, imageURL, uploadSucessful, uploadFailed, isLoading, hideUploadMessage } = useContext(ApiContext)

  const [courseType, setCourseType] = useState("");
  const [courseSubType, setCourseSubType] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseWorkload, setCourseWorkload] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [courseLevel, setCourseLevel] = useState("");

  const handleCourse = async () => {
    if (!courseType || !courseSubType || !courseName || !imageURL || !courseDescription || !courseWorkload || !teacherName || !courseLevel) {
      alert("Faltam dados");
      return;
    }

    try {
      await createCourse(courseType, courseSubType, courseName, imageURL, courseDescription, courseWorkload, teacherName, courseLevel);

      clearInputs()
      hideUploadMessage()
    } catch (error) {
      console.error("Erro ao adicionar o curso:", error);
    }
  };



  const clearInputs = () => {
    setCourseType("")
    setCourseSubType("")
    setCourseName("")
    setCourseWorkload("")
    setTeacherName("")
    setCourseDescription("")
    setCourseLevel("")
  }

  return (
    <FormContainer>
      <span>TIPO DE CURSO</span>
      <select value={courseType} onChange={(e) => setCourseType(e.target.value)}>
        <option value="">Escolha o tipo de curso</option>
        <option value="Tecnologia">Tecnologia</option>
        <option value="Idiomas">Idiomas</option>
        <option value="Outro">Outro</option>
      </select>

      <span>SUBTIPO DE CURSO</span>
      <select value={courseSubType} onChange={(e) => setCourseSubType(e.target.value)}>
        <option value="">Escolha o subtipo de curso</option>
        <option value="Programação">Programação</option>
        <option value="Inglês">Inglês</option>
        <option value="Outro">Outro</option>
      </select>


      <span>NOME DO CURSO</span>
      <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} />

      <span>IMAGEM DO CURSO</span>
      <InputDropZone sendFile={uploadImage} acceptedFileType="image/*" />
      {!uploadSucessful && <RotateLeftRoundedIcon style={{ display: isLoading ? 'block' : 'none' }} />}
      {uploadSucessful && <span>Upload realizado com sucesso!</span>}
      {uploadFailed && <span style={{ color: "red" }}>O upload falhou! Tente novamente.</span>}

      <span>DESCRIÇÃO DO CURSO</span>
      <input type="text" value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)} />

      <span>CARGA HORÁRIA DO CURSO</span>
      <div>
        <input type="number" value={courseWorkload} onChange={(e) => setCourseWorkload(e.target.value)} /> horas
      </div>

      <span>PROFESSOR(A) DO CURSO</span>
      <input type="text" value={teacherName} onChange={(e) => setTeacherName(e.target.value)} />

      <span>NÍVEL DO CURSO</span>
      <select value={courseLevel} onChange={(e) => setCourseLevel(e.target.value)}>
        <option value="">Escolha o nível do curso</option>
        <option value="Básico">Básico</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>

      <SubmitButton onClick={handleCourse}>Cadastrar curso</SubmitButton>
    </FormContainer>
  )
}

export default FormNewCourse;

