import React, { useContext, useState } from "react"
import { GlobalContext } from "../../../contexts/GlobalContext"
import { NewUserContainer } from "./NewUser.style"
import { ApiContext } from "../../../contexts/ApiContext"
import Papa from "papaparse"; 


function NewUser() {

  const {createUser, uploadUsers} = useContext(ApiContext)
  const [userType, setUserType] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [CSVList, setCSVList] = useState([])


const handleUser = () =>{
  createUser(userType, userName, email, cpf)
   
} 

const sendCSVList = () => {
  uploadUsers(CSVList)
}

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  Papa.parse(file, {
    header: true,
    complete: (results) => {
      
      console.log(results.data)
      setCSVList(results.data)
    },
  });
  
};




const{openMenu} = useContext(GlobalContext)


  return (
    <NewUserContainer openmenu={openMenu ? "true" : "false"}>
     
    Nome
          <span>tipo</span>
          <input
      
          type="text"
         
          onChange={(event) => setUserType(event.target.value)}  />
          <hr />

          <span>nome</span>
          <input
          type="text"
          onChange={(event) =>setUserName(event.target.value)}  />
          <hr />

          <span>email</span>
          <input
         
          type="text"
         
          onChange={(event) =>setEmail(event.target.value)}  />
          <hr />

          <span>cpf</span>
          <input
          id="nome"
          type="text"
         
          onChange={(event) =>setCpf(event.target.value)}  />
          <hr />
        -----------------------------------------------------------------
          
          <span>add alunos em massa</span>
          
          <input type="file" onChange={handleFileUpload} />
          <button onClick={handleUser}>enviar</button>
          <button onClick={sendCSVList}>enviar varios</button>

    </NewUserContainer>
  )
}

export default NewUser;