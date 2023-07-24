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
  width: 30%;
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
  width: 70%;
`;

export const ModulesContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ModulesOptions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 60px;
  column-gap: 20px;

  > span {
    font-size: 1.3rem;
    font-weight: bold;
  }

  > button {
    width: 150px;
    height: 35px;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    background-color: ${({theme}) => theme.buttonColor};
    color: white;
    display: flex;
    column-gap: 20px;
    justify-content: center;
    align-items: center;
  }
`;

export const ModulesList = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;
