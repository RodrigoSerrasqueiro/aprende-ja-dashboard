/* eslint-disable react/prop-types */
import { ButtonsContainer, CardCourseContainer, CourseIMG, CourseName } from "./CourseCard.style";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ApiContext } from "../../contexts/ApiContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function CourseCard({ courseImage, courseName, courseID, openEditCourseModal }) {

  const { newModuleOrLesson } = useContext(ApiContext)

  const navigate = useNavigate()

  return (
    <CardCourseContainer>
      <CourseIMG src={courseImage} alt="imagem do curso" />
      <CourseName>{courseName}</CourseName>
      <ButtonsContainer>
        <AddCircleIcon
          onClick={() => {
            newModuleOrLesson(courseID)
            navigate('/new-module-or-lesson')
          }}
        />
        <EditIcon
          onClick={() => openEditCourseModal()}
        />
        <DeleteIcon />
      </ButtonsContainer>
    </CardCourseContainer>
  )
}

export default CourseCard;