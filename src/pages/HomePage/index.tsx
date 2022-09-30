import { Header } from '../../components/Header'
import { NoteCard } from '../../components/NoteCard'
import { Sidebar } from '../../components/Sidebar'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useTasks } from '../../hooks/useTasks'
import { api } from '../../services/api'
import { queryClient } from '../../services/queryClient'

import {
  Container,
  SideBarContainer,
  NoteContainer,
  Note,
  NoteTitle,
  Title
  // TagsContainer
} from './style'

type Task = {
  id: string
  description: string
  createdAt: string
}

export const HomePage = () => {
  useProtectedPage()
  const { data, isLoading, isFetching, isError } = useTasks()

  return (
    <>
      <SideBarContainer>
        <Sidebar />
      </SideBarContainer>

      <Container>
        <Header />

        <NoteContainer>
          <NoteTitle>
            <Title>
              <h1>Suas notas</h1>
              {!isLoading && isFetching && <p>Loading...</p>}
            </Title>
          </NoteTitle>

          <Note>
            {isLoading ? (
              <h2>Loading...</h2>
            ) : isError ? (
              <h2>Aconteceu um erro...</h2>
            ) : (
              <>
                {data?.map((task: Task) => (
                  <NoteCard
                    key={task.id}
                    id={task.id}
                    description={task.description}
                    createdAt={task.createdAt}
                  />
                ))}
              </>
            )}
          </Note>
        </NoteContainer>
      </Container>
    </>
  )
}
