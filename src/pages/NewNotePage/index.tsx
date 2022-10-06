import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'

import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useForm } from '../../hooks/useForm'

import {
  ButtonContainer,
  CancelButton,
  Container,
  Content,
  Description,
  ExampleNoteContainer,
  NewNoteContainer,
  SaveButton,
  NoteContainer,
  ImgContainer,
  TopBar,
  Menu,
  NoteContent,
  BottomBar
} from './style'

import { SideBarContainer } from '../HomePage/style'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

import noteImg from '../../assets/note.svg'
import menuImg from '../../assets/menu.svg'
import calenderImg from '../../assets/calender.svg'
import loadingImg from '../../assets/loading.svg'

import { api } from '../../services/api'
import { Loading } from '../LoginPage/style'
import { queryClient } from '../../services/queryClient'
import { toast } from 'react-toastify'

export type CreateNoteData = {
  form?: { [key: string]: string | number }
}

export const NewNotePage = () => {
  useProtectedPage()
  const { form, handleInputChange } = useForm({
    initialState: {
      description: ''
    }
  })

  const createNote = useMutation(
    async (form: CreateNoteData) => {
      const response = await api.post('/task', form)

      const token = localStorage.getItem('token')

      if (token) {
        api.defaults.headers.common.Authorization = token
      }

      return response.data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('task')
        toast.success('🦄 Sua nota foi criada com sucesso!', {
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

  const navigate = useNavigate()
  const [isTyping, setIsTyping] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsTyping(event.target.value)
  }

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    await createNote.mutateAsync(form)
    navigate('/home')
  }

  return (
    <>
      <SideBarContainer>
        <Sidebar />
      </SideBarContainer>

      <Container>
        <Header />
        <NewNoteContainer onSubmit={(event) => handleSubmit(event)}>
          <Content>
            <Description onChange={handleChange}>
              <p>Descrição</p>
              <textarea
                name="description"
                value={form.description}
                onChange={handleInputChange}
              />
            </Description>

            <ButtonContainer>
              <CancelButton onClick={() => navigate('/home')}>
                Cancelar
              </CancelButton>
              <SaveButton type="submit">
                {createNote.isLoading ? (
                  <Loading src={loadingImg} alt="Carregando" />
                ) : (
                  <>Entrar</>
                )}
              </SaveButton>
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

              <NoteContent onChange={handleChange}>
                <h3>Nota de Exemplo</h3>

                {isTyping ? (
                  <p>{isTyping}</p>
                ) : (
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC.
                  </p>
                )}
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
