import {
  AuthenticationContainer,
  ButtonContainer,
  Container,
  LoginContainer,
  Logo,
  SignUpContainer,
  Title,
  UserNameContainer
} from './style'
import logoImg from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { SyntheticEvent } from 'react'
import { signUp } from '../../services/user'

export const SignUpPage = () => {
  const navigate = useNavigate()
  const { form, handleInputChange, clear } = useForm({
    initialState: {
      name: '',
      password: '',
      email: '',
      age: 0
    }
  })

  const onSubmitForm = (event: SyntheticEvent) => {
    event.preventDefault()
    signUp({ form, clear, navigate })
  }

  return (
    <Container>
      <SignUpContainer onSubmit={onSubmitForm}>
        <Logo>
          <img src={logoImg} alt="Logo" />
          <h2>NotePlus</h2>
        </Logo>

        <Title>
          <h2>Increver-se</h2>
          <p>Crie sua conta.</p>
        </Title>

        <UserNameContainer>
          <input
            type="text"
            placeholder="Nome completo"
            name={'name'}
            value={form.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Idade"
            name={'age'}
            value={form.age}
            onChange={handleInputChange}
          />
        </UserNameContainer>

        <AuthenticationContainer>
          <input
            type="email"
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
        </AuthenticationContainer>

        <ButtonContainer>
          <button type="submit">Inscrever-se</button>
        </ButtonContainer>

        <LoginContainer>
          <p>Já tem uma conta?</p>
          <button>Entrar</button>
        </LoginContainer>
      </SignUpContainer>
    </Container>
  )
}
