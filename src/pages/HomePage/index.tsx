import { Header } from '../../components/Header'
import { NoteCard } from '../../components/NoteCard'
import { Sidebar } from '../../components/Sidebar'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useTasks } from '../../hooks/useTasks'

import loadingBlackImg from '../../assets/loading-black.svg'
import notFoundImg from '../../assets/not-found.svg'
import homeLoadingImg from '../../assets/home-loading.svg'

import {
  Container,
  SideBarContainer,
  NoteContainer,
  Note,
  NoteTitle,
  Title,
  Loading,
  ImageContainer
} from './style'

type Task = {
  id: string
  description: string
  createdAt: string
}

export const HomePage = () => {
  useProtectedPage()
  const { data, isLoading, isFetching, error } = useTasks()

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
              {!isLoading && isFetching && (
                <Loading src={loadingBlackImg} alt="Carregando" />
              )}
            </Title>
          </NoteTitle>

          <Note>
            {isLoading ? (
              <img src={homeLoadingImg} alt="" />
            ) : data.length > 0 ? (
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
            ) : (
              <ImageContainer>
                <img src={notFoundImg} alt="" />
                <h3>Crie uma anotação agora :)</h3>
              </ImageContainer>
            )}
          </Note>
        </NoteContainer>
      </Container>
    </>
  )
}
