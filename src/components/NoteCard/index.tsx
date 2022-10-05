import { useState } from 'react'
import { useMutation } from 'react-query'
import { useMenu } from '../../hooks/useMenu'

import { api } from '../../services/api'
import { queryClient } from '../../services/queryClient'
import { handlePrefetchTask } from '../../services/prefetchTask'

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

import { toast } from 'react-toastify'
import { UpdateNoteModal } from '../UpdateNoteModal'

type TaskProps = {
  description: string
  createdAt: string
  id: string
  // onOpenUpdateModal: () => void
}

export const NoteCard = ({ description, createdAt, id }: TaskProps) => {
  const [openCardOptions, handleOpenCardOptions] = useMenu()
  const [isUpdateNoteModalOpen, setIsUpdateNoteModalOpen] = useState(false)

  const handleCloseUpdateNoteModal = () => {
    setIsUpdateNoteModalOpen(false)
  }

  const handleOpenUpdateNoteModal = () => {
    setIsUpdateNoteModalOpen(true)
  }

  const deleteNote = useMutation(
    async (id: string) => {
      const response = await api.delete(`/task/${id}`)

      console.log(response.data)

      return response.data
    },
    {
      onSuccess() {
        queryClient.invalidateQueries('task')
        toast.success('🦄 Sua nota foi deletada com sucesso!', {
          position: 'top-center',
          autoClose: 5000
        })
      },
      onError() {
        toast.error('🦄 Ocorreu um erro, tente novamente mais tarde!', {
          position: 'top-center',
          autoClose: 5000
        })
      }
    }
  )

  const handleDeleteNote = async () => {
    await deleteNote.mutateAsync(id)
  }

  return (
    <>
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

                <div onClick={() => handleOpenUpdateNoteModal()}>
                  <img src={pencilImg} alt="Pencil" />
                  <p>Editar</p>
                </div>

                <div onClick={() => handleDeleteNote()}>
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

      <UpdateNoteModal
        isOpen={isUpdateNoteModalOpen}
        onRequestClose={handleCloseUpdateNoteModal}
        id={id}
      />
    </>
  )
}
