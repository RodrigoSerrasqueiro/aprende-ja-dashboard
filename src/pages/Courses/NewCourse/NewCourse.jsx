import { useContext } from "react"
import { GlobalContext } from "../../../contexts/GlobalContext"
import { NewCourseContainer } from "./NewCourse.style"

function NewCourse() {

  const { openMenu } = useContext(GlobalContext)

  return (
    <NewCourseContainer openmenu={openMenu ? "true" : "false"}>
      Novo curso
    </NewCourseContainer>
  )
}

export default NewCourse;