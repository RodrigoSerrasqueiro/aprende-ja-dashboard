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
  const [uploadSucessful, setUploadSucessfull] = useState(false)
  const [uploadFailed, setUploadFailed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState(null);

  const [openModalNewCourse, setOpenModalNewCourse] = useState(false)

  const uploadVideo = async (video) => {
    setVideoURL("")
    setIsLoading(true)
    setUploadSucessfull(false)
    setUploadFailed(false)
    try {
      const formData = new FormData();
      formData.append('video', video);
      const response = await api.post('/videos/upload', formData);
      if (response.status === 200) {
        setVideoURL(response.data.videoData.video_player)
        setLessonID(response.data.videoData.id)
        setUploadSucessfull(true)
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error);
      setUploadFailed(true)
      setIsLoading(false)
    }
  };

  const uploadImage = async (image) => {
    setImageURL("")
    setIsLoading(true)
    setUploadSucessfull(false)
    setUploadFailed(false)
    try {
      const formData = new FormData();
      formData.append('courseImage', image);
      const response = await api.post('/courses/upload-image', formData);
      if (response.status === 201) {
        setImageURL(response.data.imageUrl)
        setUploadSucessfull(true)
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error);
      setUploadFailed(true)
      setIsLoading(false)
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

  const hideUploadMessage = () => {
    setUploadSucessfull(false)
    setUploadFailed(false)
  }

  const newModuleOrLesson = async (courseID) => {
    sessionStorage.setItem("courseID", courseID);
  }

  const handleImagePreview = (URL) => {
    setImagePreview(URL)
  }

  const resetImagePreview = () => {
    setImagePreview(null)
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
        setImageURL("")
        setImagePreview(null)
        hideUploadMessage()
      }
    } catch (error) {
      console.log(error);
      alert("Erro ao cadastrar curso");
    }
  };

  const addModuleToCourse = async (courseID, moduleName) => {
    const url = `http://localhost:4000/courses/new-module/${courseID}`
    try {
      const response = await api.post(url, { moduleName },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      if (response.status === 200) {
        alert("Módulo adicionado ao curso!");
      }
    } catch (erro) {
      console.log(erro)
      alert("erro ao adicionar módulo")
    }
  }

  const editModuleName = async (courseID, moduleID, moduleName) => {
    const url = `http://localhost:4000/courses/update-module/${courseID}/${moduleID}`
    try {
      const response = await api.patch(url, { moduleName },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      if (response.status === 200) {
        alert("O nome do módulo foi atualizado!");
      }
    } catch (erro) {
      console.log(erro)
      alert("erro ao atualizar nome do módulo")
    }
  }

  const addLessonToModule = async (courseID, moduleID, lessonID, lessonTitle, lessonDescription, lessonVideoURL) => {
    const url = `http://localhost:4000/courses/new-lesson/${courseID}/${moduleID}`
    try {
      const response = await api.post(url, { lessonID, lessonTitle, lessonDescription, lessonVideoURL },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      if (response.status === 200) {
        alert("Aula adicionada ao módulo!");
        setVideoURL("")
        setImagePreview(null)
        hideUploadMessage()
      }
    } catch (erro) {
      console.log(erro)
      alert("erro ao adicionar aula")
    }
  }

  const editLessonData = async (courseID, moduleID, lessonID, lessonTitle, lessonDescription, lessonVideoURL) => {
    const url = `http://localhost:4000/courses/update-lesson/${courseID}/${moduleID}/${lessonID}`
    try {
      const response = await api.patch(url, { lessonTitle, lessonDescription, lessonVideoURL },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      if (response.status === 200) {
        alert("Dados da aula editados com sucesso!");
      }
    } catch (erro) {
      console.log(erro)
      alert("erro ao atualizar dados da aula")
    }
  }

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
      addModuleToCourse,
      editModuleName,
      addLessonToModule,
      editLessonData,
      openModalNewCourse,
      hideUploadMessage,
      imagePreview,
      handleImagePreview,
      resetImagePreview,
      uploadFailed,
      uploadSucessful,
      isLoading,
    }}>
      {children}
    </ApiContext.Provider>
  )
}