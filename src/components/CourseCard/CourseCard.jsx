/* eslint-disable react/prop-types */
import { ButtonsContainer, CardCourseContainer, CourseIMG, CourseName } from "./CourseCard.style";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function CourseCard(props) {
  return (
    <CardCourseContainer>
      <CourseIMG src={props.courseImage} alt="imagem do curso" />
      <CourseName>{props.courseName}</CourseName>
      <ButtonsContainer>
        <AddCircleIcon />
        <EditIcon />
        <DeleteIcon />
      </ButtonsContainer>
    </CardCourseContainer>
  )
}

export default CourseCard