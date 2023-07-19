import styled from 'styled-components'

export const NewCourseContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.primaryColor};
  color: ${({theme}) => theme.primaryTextColor};
  padding: ${({openmenu}) => (openmenu === "true" ? "75px 0 0 310px" : "75px 0 0 10px" )};
  transition: .8s;
`;

export const Modal = styled.div`
  visibility: ${({openmodal}) => (openmodal === "true" ? "visible" : "hidden" )};;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.5);
`;

export const ModalContent = styled.div`
  width: 50%;
  height: 80%;
  background-color: #fff;
  border-radius: 8px;
  overflow-y: scroll;
  padding: 20px;
`;

export const CoursesContent = styled.div`
  width: 100%;
  display: flex;
  padding: 60px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
`;

