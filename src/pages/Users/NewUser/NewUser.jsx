import React, { useContext, useState } from "react"
import { GlobalContext } from "../../../contexts/GlobalContext"
import { NewUserContainer } from "./NewUser.style"
import { ApiContext } from "../../../contexts/ApiContext"

function NewUser() {

  const {createUser} = useContext(ApiContext)
  const [userType, setUserType] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')

const handleUser = () =>{
  createUser(userType, userName, email, cpf)
   
} 

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
          

        
          


          <button onClick={handleUser}>enviar</button>


    
       
      

 

    </NewUserContainer>
  )
}

export default NewUser;