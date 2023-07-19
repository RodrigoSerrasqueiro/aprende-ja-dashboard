import styled from "styled-components";

export const CardCourseContainer = styled.div`
  width: 220px;
  height: 160px;
  &:hover {
    cursor: pointer;
  }
`;

export const CourseIMG = styled.img`
  width: 100%;
  height: 130px;
  border-radius: 12px;
`

export const CourseName = styled.span`
  color: ${({theme}) => theme.primaryTextColor};
`;