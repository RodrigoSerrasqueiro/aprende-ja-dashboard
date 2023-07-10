import styled from 'styled-components'

export const CoursesContainer = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  background-color: green;
  padding: ${({openMenu}) => openMenu? '5px 0 0 305px' : '5px 0 0 5px'};
  transition: .8s;
`;