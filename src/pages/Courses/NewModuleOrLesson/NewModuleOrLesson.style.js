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

export const ModuleToolBar = styled.div`
  width: 100%;
  box-shadow: 0 5px 7px 0 ${({theme}) => theme.shadowColor};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const ToolBar = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  > svg {
    color: ${({theme}) => theme.iconColor};
    cursor: pointer;
    margin-right: 30px;
  }
`;

export const CheckModule = styled.input`
  transform: scale(1.4);
  margin-right: 20px;
`;

export const ModuleName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 300px;
`;

export const LessonsCounter = styled.div`
  width: 150px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.terciaryColor};
  font-weight: 500;
  background-color: ${({theme}) => theme.buttonColor};
  border-radius: 4px;
`;

export const ShowLessonsButton = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  > svg {
    color: ${({theme}) => theme.iconColor};
  }

  &:hover {
    background-color: rgba(230, 255, 255, 0.3);
  }
`;

export const Lesson = styled.div`
  width: 100%;
  height: 30px;
  display: ${({showlessons}) => showlessons === "true" ? "flex" : "none"};
  color: #000;
  font-size: 16px;
  background-color: red;
`;
