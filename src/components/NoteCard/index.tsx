import { useMenu } from "../hooks/useMenu";

import {
  BottomBar,
  CardOptions,
  Container,
  ImgContainer,
  Menu,
  NoteContent,
  TopBar,
} from "./style";
import noteImg from "../../assets/note.svg";
import menuImg from "../../assets/menu.svg";
import calenderImg from "../../assets/calender.svg";
import binImg from "../../assets/bin.svg";
import pencilImg from "../../assets/pencil.svg";
import viewImg from "../../assets/view.svg";



export const NoteCard = () => {
  const [openCardOptions, handleOpenCardOptions] = useMenu()


  return (
    <Container>
      <TopBar>
        <ImgContainer>
          <img src={noteImg} alt="Note" />
        </ImgContainer>

        <Menu onClick={handleOpenCardOptions}>
          <img src={menuImg} alt="Menu" />

          {openCardOptions && (
            <CardOptions>
              <div>
                <img src={viewImg} alt="View" />
                <p>Visualizar</p>
              </div>

              <div>
                <img src={pencilImg} alt="Pencil" />
                <p>Editar</p>
              </div>

              <div>
                <img src={binImg} alt="Bin" />
                <p>Deletar</p>
              </div>
            </CardOptions>
          )}
        </Menu>
      </TopBar>

      <NoteContent>
        <h3>Plano da Semana</h3>
        <p>
          Virtual Digital Marketing Course every week on Monday, Wednesday and
          Saturday.Virtual Digital Marketing Course every week on Monday...
        </p>
      </NoteContent>

      <BottomBar>
        <img src={calenderImg} alt="Calender Icon" />
        <p>12 Jan 2022</p>
      </BottomBar>
    </Container>
  );
};
