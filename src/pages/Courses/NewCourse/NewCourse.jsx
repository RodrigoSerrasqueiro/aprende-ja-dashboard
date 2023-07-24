import { useContext, useEffect } from "react"
import { GlobalContext } from "../../../contexts/GlobalContext"
import { CoursesContent, Modal, ModalContent, NewCourseContainer } from "./NewCourse.style"
import FormNewCourse from "../../../components/FormNewCourse/FormNewCourse"
import { ApiContext } from "../../../contexts/ApiContext"
import CourseCard from "../../../components/CourseCard/CourseCard"


function NewCourse() {

  const { openMenu } = useContext(GlobalContext)
  const { courses, getCourses, openModalNewCourse, addNewCourse, closeModalNewCourse } = useContext(ApiContext)


  useEffect(() => {
    getCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <NewCourseContainer openmenu={openMenu ? "true" : "false"}>

      <Modal openmodal={openModalNewCourse ? "true" : "false"}>
        <ModalContent>
          <button onClick={closeModalNewCourse}>Fechar</button>
          <FormNewCourse />
        </ModalContent>
      </Modal>

      <button style={{ width: "40px" }} onClick={addNewCourse}>Novo</button>
      {courses && courses.length > 0 ?
        <CoursesContent>
          {courses.slice(0).reverse().map((course, index) => (
            <CourseCard
              key={index}
              courseImage={course.courseImage}
              courseName={course.courseName}
              courseID={course.courseID}
            />
          ))}
        </CoursesContent>
        :
        <h1>NÃO HÁ CURSOS CADASTRADOS</h1>
      }
    </NewCourseContainer>
  )
}

export default NewCourse;