/* eslint-disable react/prop-types */
import { ButtonsContainer, CardCourseContainer, CourseIMG, CourseName } from "./CourseCard.style";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ApiContext } from "../../contexts/ApiContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function CourseCard(props) {

  const { newModuleOrLesson } = useContext(ApiContext)

  const navigate = useNavigate()

  return (
    <CardCourseContainer>
      <CourseIMG src={props.courseImage} alt="imagem do curso" />
      <CourseName>{props.courseName}</CourseName>
      <ButtonsContainer>
        <AddCircleIcon
          onClick={() => {
            newModuleOrLesson(props.courseID)
            navigate('/new-module-or-lesson')
          }}
        />
        <EditIcon />
        <DeleteIcon />
      </ButtonsContainer>
    </CardCourseContainer>
  )
}

export default CourseCard;