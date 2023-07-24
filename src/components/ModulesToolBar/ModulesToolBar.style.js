import { styled } from "styled-components";

export const ModuleToolBar = styled.div`
  width: 100%;
  height: 100px;
  box-shadow: 0 5px 7px 0 ${({theme}) => theme.shadowColor};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const ToolBar = styled.div`
  width: 100%;
  height: 70%;
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
  height: 30%;
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