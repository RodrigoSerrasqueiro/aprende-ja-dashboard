import { useContext, useState } from "react"
import { ApiContext } from "../../contexts/ApiContext"
import { FormContainer } from "./FormNewCourse.style";

function FormNewCourse() {
  const { createCourse } = useContext(ApiContext)

  const [courseType, setCourseType] = useState("");
  const [courseSubType, setCourseSubType] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseImage, setCourseImage] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseWorkload, setCourseWorkload] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [courseLevel, setCourseLevel] = useState("");

  const handleCourse = () => {
    createCourse(courseType, courseSubType, courseName, courseImage, courseDescription, courseWorkload, teacherName, courseLevel)
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
      <input type="text" onChange={(e) => setCourseName(e.target.value)} />

      <span>IMAGEM DO CURSO</span>
      <input type="text" onChange={(e) => setCourseImage(e.target.value)} />

      <span>DESCRIÇÃO DO CURSO</span>
      <input type="text" onChange={(e) => setCourseDescription(e.target.value)} />

      <span>CARGA HORÁRIA DO CURSO</span>
      <div>
        <input type="number" onChange={(e) => setCourseWorkload(e.target.value)} /> horas
      </div>

      <span>PROFESSOR(A) DO CURSO</span>
      <input type="text" onChange={(e) => setTeacherName(e.target.value)} />

      <span>NÍVEL DO CURSO</span>
      <select value={courseLevel} onChange={(e) => setCourseLevel(e.target.value)}>
        <option value="">Escolha o nível do curso</option>
        <option value="Básico">Básico</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>

      <button onClick={handleCourse}>CADASTRAR CURSO</button>
    </FormContainer>
  )
}

export default FormNewCourse;

