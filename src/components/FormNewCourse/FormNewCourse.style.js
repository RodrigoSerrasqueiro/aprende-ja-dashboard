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

  > svg {
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-360deg);
    }
  }

  &:hover {
    > button {
      cursor: pointer;
    }
  }
`;

export const SubmitButton = styled.div`
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
    margin-top: 20px;
`;