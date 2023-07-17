import React, { useContext } from "react"
import { GlobalContext } from "../../../contexts/GlobalContext"
import { NewUserContainer } from "./NewUser.style"

function NewUser() {

  const { openMenu } = useContext(GlobalContext)
  const [nome, setNome] = React.useState('')

  return (
    <NewUserContainer openmenu={openMenu ? "true" : "false"}>
      <form>

    
          <label htmlFor="nome">Nome</label>
          <input
          id="nome"
          type="text"
          value={nome}
          onChange={(event) =>setNome(event.target.value)}  />
          <button>enviar</button>


    
       
      

      </form>

    </NewUserContainer>
  )
}

export default NewUser;