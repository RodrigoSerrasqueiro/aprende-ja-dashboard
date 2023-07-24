import { styled } from "styled-components";

export const NewModuleOrLessonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({theme}) => theme.primaryColor};
  color: ${({theme}) => theme.primaryTextColor};
  padding: ${({openmenu}) => (openmenu === "true" ? "100px 0 0 310px" : "100px 0 0 10px" )};
  transition: .8s;
`;

export const CourseContent = styled.div`
  display: flex;
  width: 100%;
  padding-right: 10px;
`;

export const CourseImageContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CourseImage = styled.img`
  width: 70%;
  height: auto;
`;

export const CourseName = styled.h2`
  
`;

export const CourseModulesContainer = styled.div`
  width: 60%;
`;

export const ModulesContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid ${({theme}) => theme.secondaryTextColor};
  border-radius: 8px;
`;

export const ModulesOptions = styled.div`
  width: 100%;
  display: flex;
  padding-right: 60px;
  column-gap: 20px;
`;

export const ModulesList = styled.div`
  display: ${({openmoduleslist}) => openmoduleslist === "true" ? "flex" : "none"};
  width: 100%;
  margin-top: 20px;
`;

export const ModuleEdit = styled.div`
  width: 100%;
  padding-right: 60px;
  display: flex;
  column-gap: 20px;
`;