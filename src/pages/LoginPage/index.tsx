import {
  ButtonContainer,
  Container,
  InputContainer,
  LoginContainer,
  Logo,
  SingUpContainer,
  Title
} from './style'
import logoImg from '../../assets/logo.svg'
import { useForm } from '../../hooks/useForm'
import { login } from '../../services/user'
import { SyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
  const navigate = useNavigate()
  const { form, handleInputChange, clear } = useForm({
    initialState: {
      name: '',
      password: '',
      email: ''
    }
  })

  const onSubmitForm = (event: SyntheticEvent) => {
    event.preventDefault()
    login({ form, clear, navigate })
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
          />
          <input
            type="password"
            placeholder="Senha"
            name={'password'}
            value={form.password}
            onChange={handleInputChange}
          />
        </InputContainer>

        <ButtonContainer>
          <button>Entrar</button>
        </ButtonContainer>

        <SingUpContainer>
          <p>Não tem uma conta?</p>
          <button onClick={() => navigate('/cadastro')}>Inscreva-se!</button>
        </SingUpContainer>
      </LoginContainer>
    </Container>
  )
}
