import { createContext, useState } from "react";
import api from '../api'
import axios from 'axios'

export const ApiContext = createContext({});

// eslint-disable-next-line react/prop-types
export const ApiStorage = ({ children }) => {
  const [videoURL, setVideoURL] = useState("")
  const [imageURL, setImageURL] = useState("")
  const [lessonID, setLessonID] = useState("")
  const [courses, setCourses] = useState([])

  const [openModalNewCourse, setOpenModalNewCourse] = useState(false)

  const uploadVideo = async (video) => {
    try {
      const formData = new FormData();
      formData.append('video', video);
      const response = await api.post('/videos/upload', formData);
      if (response.status === 200) {
        alert("Upload realizado com sucesso!")
        console.log(response)
        setVideoURL(response.data.url)
        setLessonID(response.data.id)
      }
    } catch (error) {
      console.log(error);
      alert('Não foi possível fazer o upload do vídeo!');
    }
  };

  const uploadImage = async (image) => {
    try {
      const formData = new FormData();
      formData.append('courseImage', image);
      const response = await api.post('/courses/upload-image', formData);
      if (response.status === 201) {
        alert("Upload realizado com sucesso!")
        setImageURL(response.data.imageUrl)
      }
    } catch (error) {
      console.log(error);
      alert('Não foi possível fazer o upload do vídeo!');
    }
  };

  const getCourses = async () => {
    const url = 'http://localhost:4000/courses/get-courses'
    try {
      const response = await axios.get(url)
      setCourses(response.data)
    } catch (erro) {
      console.log(erro)
    }
  }

  const addNewCourse = () => {
    setOpenModalNewCourse(true)
  }

  const closeModalNewCourse = () => {
    setOpenModalNewCourse(false)
  }

  const newModuleOrLesson = async (courseID) => {
    sessionStorage.setItem("courseID", courseID);
  }

  const createCourse = async (
    courseType,
    courseSubType,
    courseName,
    courseImage,
    courseDescription,
    courseWorkload,
    teacherName,
    courseLevel
  ) => {
    try {
      const response = await api.post('courses/create-course', {
        courseType,
        courseSubType,
        courseName,
        courseImage,
        courseDescription,
        courseWorkload,
        teacherName,
        courseLevel
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 201) {
        alert("Curso cadastrado com sucesso!");
        getCourses()
        closeModalNewCourse()
      }
    } catch (error) {
      console.log(error);
      alert("Erro ao cadastrar curso");
    }
  };

  return (
    <ApiContext.Provider value={{
      uploadVideo,
      uploadImage,
      createCourse,
      videoURL,
      imageURL,
      lessonID,
      getCourses,
      newModuleOrLesson,
      courses,
      closeModalNewCourse,
      addNewCourse,
      openModalNewCourse,
    }}>
      {children}
    </ApiContext.Provider>
  )
}