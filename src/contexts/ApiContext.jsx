import { createContext, useState } from "react";
import api from '../api'

export const ApiContext = createContext({});

// eslint-disable-next-line react/prop-types
export const ApiStorage = ({ children }) => {
  const [videoURL, setVideoURL] = useState("")
  const [lessonID, setLessonID] = useState("")

  const uploadVideo = async (video) => {
    try {
      const formData = new FormData();
      formData.append('video', video);
      const response = await api.post('/videos/upload', formData);
      if (response.status === 200) {
        alert("Upload realizado com sucesso!")
        const videoPlayer = response.data.videoData.video_player;
        setVideoURL(videoPlayer);
        const videoID = response.data.videoData.id
        setLessonID(videoID)
      }
    } catch (error) {
      console.log(error);
      alert('Não foi possível fazer o upload do vídeo!');
    }
  };

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
      }
    } catch (error) {
      console.log(error);
      alert("Erro ao cadastrar curso");
    }
  };

  return (
    <ApiContext.Provider value={{
      uploadVideo,
      createCourse,
      videoURL,
      lessonID,
    }}>
      {children}
    </ApiContext.Provider>
  )
}