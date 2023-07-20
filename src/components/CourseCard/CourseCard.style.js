import styled from "styled-components";

export const CardCourseContainer = styled.div`
  width: 220px;
  border-radius: 12px;
  box-shadow: 0 5px 7px 0 ${({theme}) => theme.shadowColor};
`;

export const CourseIMG = styled.img`
  width: 100%;
  height: 130px;
  border-radius: 12px;
`

export const CourseName = styled.span`
  color: ${({theme}) => theme.primaryTextColor};
  font-weight: bold;
  margin-left: 10px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10px;

  > svg {
    color: rgba(0,0,0,0.5);
  }
  
  &:hover {
    > svg {
      cursor: pointer;
    }
  }
`;