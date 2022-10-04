import { useState } from 'react'
import { Header } from '../../components/Header'
import { NoteCard } from '../../components/NoteCard'
import { Sidebar } from '../../components/Sidebar'
import { UpdateNoteModal } from '../../components/UpdateNoteModal'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useTasks } from '../../hooks/useTasks'

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
  const { data, isLoading, isFetching, error } = useTasks()
  const [isUpdateNoteModalOpen, setIsUpdateNoteModalOpen] = useState(false)

  const handleOpenUpdateNoteModal = () => {
    setIsUpdateNoteModalOpen(true)
  }

  const handleCloseUpdateNoteModal = () => {
    setIsUpdateNoteModalOpen(false)
  }

  console.log({ isLoading })
  console.log({ data })

  return (
    <>
      <SideBarContainer>
        <Sidebar />
      </SideBarContainer>

      <Container>
        <Header />

        <UpdateNoteModal
          isOpen={isUpdateNoteModalOpen}
          onRequestClose={handleCloseUpdateNoteModal}
        />

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
            ) : error ? (
              <h2>Aconteceu um erro...</h2>
            ) : (
              <>
                {data?.map((task: Task) => (
                  <NoteCard
                    key={task.id}
                    id={task.id}
                    description={task.description}
                    createdAt={task.createdAt}
                    onOpenUpdateModal={handleOpenUpdateNoteModal}
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
