import { id } from 'date-fns/locale'
import { SyntheticEvent } from 'react'
import Modal from 'react-modal'
import { useMutation } from 'react-query'
import ReactQuill from 'react-quill'
import { toast } from 'react-toastify'
import { useForm } from '../../hooks/useForm'
import { api } from '../../services/api'
import { queryClient } from '../../services/queryClient'
import { ButtonContainer, CancelButton, SaveButton } from './styles'

type UpdateNoteModalProps = {
  isOpen: boolean
  onRequestClose: () => void
}

type UpdateNoteData = {
  form?: { [key: string]: string | number }
}

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline'],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }]
  ]
}

export const UpdateNoteModal = ({
  isOpen,
  onRequestClose
}: UpdateNoteModalProps) => {
  const { form, handleInputChange } = useForm({
    initialState: {
      description: ''
    }
  })

  const updateNote = useMutation(
    async (id: string, form: UpdateNoteData) => {
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

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    await updateNote.mutateAsync(id, form)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <h2>Editar</h2>
      <ReactQuill
        modules={modules}
        theme="snow"
        className="toolbar"
        onChange={handleInputChange}
      />

      <ButtonContainer>
        <div onClick={onRequestClose}>
          <CancelButton>Cancelar</CancelButton>
        </div>

        <div>
          <SaveButton onClick={() => handleSubmit(id)}>Salvar</SaveButton>
        </div>
      </ButtonContainer>
    </Modal>
  )
}
