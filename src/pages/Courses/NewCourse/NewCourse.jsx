import { useContext, useState } from "react"
import { GlobalContext } from "../../../contexts/GlobalContext"
import { ApiContext } from "../../../contexts/ApiContext"
import { NewCourseContainer } from "./NewCourse.style"

function NewCourse() {

  const { openMenu } = useContext(GlobalContext)
  const { createCourse } = useContext(ApiContext)

  const [courseType, setCourseType] = useState("");
  const [courseSubType, setCourseSubType] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");

  const handleCourse = () => {
    createCourse(courseType, courseSubType, courseName, courseDescription)
  }

  return (
    <NewCourseContainer openmenu={openMenu ? "true" : "false"}>
      <span>TIPO DE CURSO</span>
      <input type="text" onChange={(e) => setCourseType(e.target.value)} />

      <span>SUBTIPO DE CURSO</span>
      <input type="text" onChange={(e) => setCourseSubType(e.target.value)} />

      <span>NOME DO CURSO</span>
      <input type="text" onChange={(e) => setCourseName(e.target.value)} />

      <span>DESCRIÇÃO DO CURSO</span>
      <input type="text" onChange={(e) => setCourseDescription(e.target.value)} />

      <button onClick={handleCourse}>CADASTRAR CURSO</button>
    </NewCourseContainer>
  )
}

export default NewCourse;