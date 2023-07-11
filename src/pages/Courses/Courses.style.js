import styled from 'styled-components'

export const CoursesContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: green;
  padding: ${({openmenu}) => (openmenu === "true" ? "75px 0 0 310px" : "75px 0 0 10px" )};
  transition: .8s;
`;