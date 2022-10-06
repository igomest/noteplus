import { SyntheticEvent, useEffect, useState } from 'react'
import Modal from 'react-modal'
import { useMutation, useQuery } from 'react-query'
import ReactQuill from 'react-quill'
import { toast } from 'react-toastify'
import { useForm } from '../../hooks/useForm'
import { useTasks } from '../../hooks/useTasks'
import { api } from '../../services/api'
import { handlePrefetchTask } from '../../services/prefetchTask'
import { queryClient } from '../../services/queryClient'
import { modules } from '../../utils/modules'
import { ButtonContainer, CancelButton, SaveButton } from './styles'

type UpdateNoteModalProps = {
  isOpen: boolean
  onRequestClose: () => void
  id: string
}

type UpdateNoteData = {
  id: string
  form?: { [key: string]: string | number }
}

type Index = {
  id: string
}

export const UpdateNoteModal = ({
  isOpen,
  onRequestClose,
  id
}: UpdateNoteModalProps) => {
  const { form, handleInputChange } = useForm({
    initialState: {
      description: ''
    }
  })

  const { data } = useQuery(
    ['task', id],
    async () => {
      const response = await api.get(`task/${id}`)

      return await response.data
    },
    {
      staleTime: 1000 * 60 * 10 // 10 minutes
    }
  )

  const updateNote = useMutation(
    async ({ id, form }: UpdateNoteData) => {
      const response = await api.put(`/task/${id}`, form)

      const token = localStorage.getItem('token')

      if (token) {
        api.defaults.headers.common.Authorization = token
      }

      return response.data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('task')
        onRequestClose()
        toast.success('🦄 Sua nota foi atualizada com sucesso!', {
          position: 'top-center',
          autoClose: 5000
        })
      },
      onError: () => {
        toast.error('🦄 Ocorreu um erro, tente novamente mais tarde!', {
          position: 'top-center',
          autoClose: 5000
        })
      }
    }
  )

  const handleUpdateNote = async () => {
    await updateNote.mutateAsync({ id, form })
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <h2>Editar</h2>

      <textarea
        name="description"
        value={form.description}
        onChange={handleInputChange}
      />
      {/* {data?.data?.description}
      </textarea> */}

      <ButtonContainer>
        <div onClick={onRequestClose}>
          <CancelButton>Cancelar</CancelButton>
        </div>

        <div>
          <SaveButton onClick={() => handleUpdateNote()}>Salvar</SaveButton>
        </div>
      </ButtonContainer>
    </Modal>
  )
}
