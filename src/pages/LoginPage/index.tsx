import { SyntheticEvent, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { login } from '../../services/user'
import { useNavigate } from 'react-router-dom'

import {
  ButtonContainer,
  Container,
  InputContainer,
  Loading,
  LoginContainer,
  Logo,
  SingUpContainer,
  Title
} from './style'

import logoImg from '../../assets/logo.svg'
import loadingImg from '../../assets/loading.svg'

export const LoginPage = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const { form, handleInputChange, clear } = useForm({
    initialState: {
      name: '',
      password: '',
      email: ''
    }
  })

  const onSubmitForm = (event: SyntheticEvent) => {
    event.preventDefault()
    login({ form, clear, navigate, setIsLoading })
  }

  return (
    <Container>
      <LoginContainer onSubmit={onSubmitForm}>
        <Logo>
          <img src={logoImg} alt="Logo" />
          <h2>NotePlus</h2>
        </Logo>

        <Title>
          <h2>Entrar</h2>
          <p>Faça login para ficar conectado.</p>
        </Title>

        <InputContainer>
          <input
            type="text"
            placeholder="Email"
            name={'email'}
            value={form.email}
            onChange={handleInputChange}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Insira o seu e-mail"
          />
          <input
            type="password"
            placeholder="Senha"
            name={'password'}
            value={form.password}
            onChange={handleInputChange}
            required
            pattern="a-zA-Z]\w{3,14}$"
            title="Insira sua senha"
          />
        </InputContainer>

        <ButtonContainer>
          <button type="submit">
            {isLoading ? (
              <Loading src={loadingImg} alt="Carregando" />
            ) : (
              <>Entrar</>
            )}
          </button>
        </ButtonContainer>

        <SingUpContainer>
          <p>Não tem uma conta?</p>
          <button onClick={() => navigate('/cadastro')}>Inscreva-se!</button>
        </SingUpContainer>
      </LoginContainer>
    </Container>
  )
}
