import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.primaryColor};
  color: ${({theme}) => theme.primaryTextColor};
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