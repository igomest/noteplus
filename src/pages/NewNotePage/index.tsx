/* eslint-disable react/no-unescaped-entities */
import {
  ButtonContainer,
  CancelButton,
  Container,
  Content,
  Description,
  ExampleNoteContainer,
  NewNoteContainer,
  ReminderDate,
  SaveButton,
  TagContainer,
  Title,
  NoteContainer,
  ImgContainer,
  TopBar,
  Menu,
  NoteContent,
  BottomBar
} from './style'
import { Header } from '../../components/Header'
import { SideBarContainer } from '../HomePage/style'
import { Sidebar } from '../../components/Sidebar'
import noteImg from '../../assets/note.svg'
import menuImg from '../../assets/menu.svg'
import calenderImg from '../../assets/calender.svg'
import { useProtectedPage } from '../../hooks/useProtectedPage'

export const NewNotePage = () => {
  useProtectedPage()
  return (
    <>
      <SideBarContainer>
        <Sidebar />
      </SideBarContainer>

      <Container>
        <Header />
        <NewNoteContainer>
          <Content>
            <Title>
              <p>Título</p>
              <input type="text" placeholder="Nota de Exemplo" />
            </Title>

            <Description>
              <p>Descrição</p>
              <textarea />
            </Description>

            <ReminderDate>
              <p>Data do Lembrete</p>
              <input type="date" placeholder="06/04/2022" />
            </ReminderDate>

            <TagContainer>
              <p>Tag</p>
              <input type="text" placeholder="Digite uma tag" />
            </TagContainer>

            <ButtonContainer>
              <CancelButton>Cancelar</CancelButton>
              <SaveButton>Salvar</SaveButton>
            </ButtonContainer>
          </Content>

          <ExampleNoteContainer>
            <NoteContainer>
              <TopBar>
                <ImgContainer>
                  <img src={noteImg} alt="Note" />
                </ImgContainer>

                <Menu>
                  <img src={menuImg} alt="Menu" />
                </Menu>
              </TopBar>

              <NoteContent>
                <h3>Nota de Exemplo</h3>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </NoteContent>

              <BottomBar>
                <img src={calenderImg} alt="Calender" />
                <p>12 Jan 2022</p>
              </BottomBar>
            </NoteContainer>
          </ExampleNoteContainer>
        </NewNoteContainer>
      </Container>
    </>
  )
}
