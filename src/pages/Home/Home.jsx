import { HomeContainer } from "./Home.style"
import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"

function Home() {

  const { openMenu } = useContext(GlobalContext)

  return (
    <HomeContainer openmenu={openMenu ? "true" : "false"}>
      Home
    </HomeContainer>
  )
}

export default Home