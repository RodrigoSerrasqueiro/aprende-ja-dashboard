/* eslint-disable react/prop-types */
import { CardCourseContainer, CourseIMG, CourseName } from "./CourseCard.style";


function CourseCard(props) {
  return (
    <CardCourseContainer>
      <CourseIMG src={props.courseImage} alt="imagem do curso" />
      <CourseName>{props.courseName}</CourseName>
    </CardCourseContainer>
  )
}

export default CourseCard