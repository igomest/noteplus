import { useMenu } from '../../hooks/useMenu'

import {
  BottomBar,
  CardOptions,
  Container,
  ImgContainer,
  Menu,
  NoteContent,
  TopBar
} from './style'
import noteImg from '../../assets/note.svg'
import menuImg from '../../assets/menu.svg'
import calenderImg from '../../assets/calender.svg'
import binImg from '../../assets/bin.svg'
import pencilImg from '../../assets/pencil.svg'
import viewImg from '../../assets/view.svg'
import { handlePrefetchTask } from '../../services/prefetchTask'

type TaskProps = {
  description: string
  createdAt: string
  id: string
}

export const NoteCard = ({ description, createdAt, id }: TaskProps) => {
  const [openCardOptions, handleOpenCardOptions] = useMenu()

  return (
    <Container onMouseEnter={() => handlePrefetchTask(id)}>
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
        <p>{description}</p>
      </NoteContent>

      <BottomBar>
        <img src={calenderImg} alt="Calender Icon" />
        <p>{createdAt}</p>
      </BottomBar>
    </Container>
  )
}
