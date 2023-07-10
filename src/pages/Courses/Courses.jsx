import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"
import { CoursesContainer } from "./Courses.style"

function Courses() {

  const { openMenu } = useContext(GlobalContext)

  return (
    <CoursesContainer openMenu={openMenu}>
      Courses
    </CoursesContainer>
  )
}

export default Courses