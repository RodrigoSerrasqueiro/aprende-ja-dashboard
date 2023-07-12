import { useContext } from "react"
import { GlobalContext } from "../../../contexts/GlobalContext"
import { NewUserContainer } from "./NewUser.style"

function NewUser() {

  const { openMenu } = useContext(GlobalContext)

  return (
    <NewUserContainer openmenu={openMenu ? "true" : "false"}>
      Novo usuário
    </NewUserContainer>
  )
}

export default NewUser;