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
  row-gap: 10px;

  > input, select{
    width: 300px;
    height: 35px;
    font-size: 18px;
  }
  > button {
    width: 100px;
    height: 35px;
    margin-top: 20px;
  }

  &:hover {
    > button {
      cursor: pointer;
    }
  }
`;

