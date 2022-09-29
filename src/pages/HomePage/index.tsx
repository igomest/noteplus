import { useQuery } from 'react-query'
import { Header } from '../../components/Header'
import { NoteCard } from '../../components/NoteCard'
import { Sidebar } from '../../components/Sidebar'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { api } from '../../services/api'
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
  const { data, isLoading, isError } = useQuery('task', async () => {
    const response = await api
      .get('/task')
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data))

    return response
  })

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

        {isLoading ? (
          <h2>Loading...</h2>
        ) : isError ? (
          <h2>Aconteceu um erro...</h2>
        ) : (
          <>
            {data.map((task) => (
              <div key={task.id}></div>
            ))}
          </>
        )}

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
