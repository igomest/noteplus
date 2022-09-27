import { Header } from '../../components/Header'
import { NoteCard } from '../../components/NoteCard'
import { Sidebar } from '../../components/Sidebar'
import { useProtectedPage } from '../../hooks/useProtectedPage'
// import { Tags } from '../../components/Tags'
// import { NewNotePage } from '../NewNotePage'
import {
  Container,
  SideBarContainer,
  NoteContainer
  // TagsContainer
} from './style'

export const HomePage = () => {
  useProtectedPage()
  return (
    <>
      <SideBarContainer>
        <Sidebar />
      </SideBarContainer>

      {/* <TagsContainer>
        <Tags />
      </TagsContainer> */}

      <Container>
        <Header />

        <NoteContainer>
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </NoteContainer>
      </Container>
    </>
  )
}
