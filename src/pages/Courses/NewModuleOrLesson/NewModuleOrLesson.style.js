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
    font-size: 1.5rem;
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
  flex-direction: column;
  width: 100%;
`;

export const ModuleToolBar = styled.div`
  width: 100%;
  box-shadow: 0 5px 7px 0 ${({theme}) => theme.shadowColor};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
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

export const ModuleNameContainer = styled.div`
  width: 75%;
`;

export const ModuleName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
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
  margin-right: 40px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 150px;
  height: 30px;
  color: ${({theme}) => theme.iconColor};

  > svg {
    cursor: pointer;
  }
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

export const LessonsContainer = styled.div`
  width: 100%;
  display: ${({showlessons}) => showlessons === "true" ? "flex" : "none"};
  flex-direction: column;
`;

export const LessonToolBar = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  border: 0.5px solid ${({theme}) => theme.shadowColor};

  > svg {
    color: ${({theme}) => theme.iconColor};
    cursor: pointer;
    margin-right: 30px;
  }
`;

export const LessonNameContainer = styled.div`
  width: 80%;
`;

export const LessonName = styled.span`
  font-size: 1.3rem;
  margin-right: 150px;
  color: ${({theme}) => theme.iconColor};
`;

export const LessonButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100px;
  height: 30px;
  color: ${({theme}) => theme.secondaryButtonColor};

  > svg {
    cursor: pointer;
  }
`;


export const NewModuleModal = styled.div`
  width: 500px;
  display: ${({isopen}) => isopen === "true" ? "flex" : "none"};
  flex-direction: column;
  row-gap: 20px;
  padding: 10px;
  background-color: ${({theme}) => theme.primaryColor};
  border-radius: 8px;
  position: fixed;
  z-index: 2;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  border: 2px solid ${({theme}) => theme.secondaryTextColor};

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    > span {
      font-size: 1.5rem;
      font-weight: 500;
    }
    > svg {
      color: ${({theme}) => theme.secondaryTextColor};
      cursor: pointer;
    }
  }

 

  

  > input {
    width: 100%;
    height: 35px;
    border: 1px solid ${({theme}) => theme.primaryTextColor};
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
    justify-content: center;
    align-items: center;
  }
`;

export const NewLessonModal = styled.div`
  width: 700px;
  height: 500px;
  display: ${({isopen}) => isopen === "true" ? "flex" : "none"};
  flex-direction: column;
  row-gap: 10px;
  padding: 10px;
  background-color: ${({theme}) => theme.primaryColor};
  border-radius: 8px;
  position: fixed;
  z-index: 2;
  top: 40vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  border: 2px solid ${({theme}) => theme.secondaryTextColor};

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    > span {
      font-size: 1.5rem;
      font-weight: 500;
    }
    > svg {
      color: ${({theme}) => theme.secondaryTextColor};
      cursor: pointer;
    }
  }

  > input {
    width: 100%;
    height: 35px;
    border: 1px solid ${({theme}) => theme.primaryTextColor};
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
    justify-content: center;
    align-items: center;
  }
`;
