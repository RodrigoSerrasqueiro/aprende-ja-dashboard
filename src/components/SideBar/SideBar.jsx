import { NavContainer, NavText, SectionTitle, SideBarContainer, TitleContainer } from "./SideBar.style";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';

function SideBar() {

  const { openMenu } = useContext(GlobalContext)

  return (
    <SideBarContainer openmenu={openMenu ? "true" : "false"}>

      <TitleContainer>
        <SectionTitle>USUÁRIOS</SectionTitle>
      </TitleContainer>

      <NavContainer>
        <PersonAddOutlinedIcon />
        <NavText>Novo usuário</NavText>
      </NavContainer>

      <NavContainer>
        <EditOutlinedIcon />
        <NavText>Alterar dados</NavText>
      </NavContainer>

      <NavContainer>
        <RecentActorsOutlinedIcon />
        <NavText>Listar usuários</NavText>
      </NavContainer>

      <NavContainer>
        <SearchOutlinedIcon />
        <NavText>Pesquisar</NavText>
      </NavContainer>

      <NavContainer>
        <PersonRemoveOutlinedIcon />
        <NavText>Deletar</NavText>
      </NavContainer>

      <TitleContainer>
        <SectionTitle>CURSOS</SectionTitle>
      </TitleContainer>

      <NavContainer>
        <CreateNewFolderOutlinedIcon />
        <NavText>Novo curso</NavText>
      </NavContainer>

      <NavContainer>
        <AddToPhotosOutlinedIcon />
        <NavText>Adicionar módulo/aula</NavText>
      </NavContainer>

      <NavContainer>
        <EditNoteOutlinedIcon />
        <NavText>Editar dados</NavText>
      </NavContainer>

      <NavContainer>
        <FormatListBulletedOutlinedIcon />
        <NavText>Obter lista</NavText>
      </NavContainer>

      <NavContainer>
        <ManageSearchOutlinedIcon />
        <NavText>Pesquisar</NavText>
      </NavContainer>

      <NavContainer>
        <DeleteOutlineOutlinedIcon />
        <NavText>Excluir</NavText>
      </NavContainer>

    </SideBarContainer>
  )
}

export default SideBar;