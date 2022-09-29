import { SyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

import { signUp } from '../../services/user'

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
            min={4}
            required
            title="Insira seu nome"
            pattern="\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+"
          />
          <input
            type="text"
            placeholder="Idade"
            name={'age'}
            value={form.age}
            onChange={handleInputChange}
            required
            min={2}
          />
        </UserNameContainer>

        <AuthenticationContainer>
          <input
            type="email"
            placeholder="Email"
            name={'email'}
            value={form.email}
            onChange={handleInputChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Insira o seu e-mail"
          />
          <input
            type="password"
            placeholder="Senha"
            name={'password'}
            value={form.password}
            onChange={handleInputChange}
            pattern="a-zA-Z]\w{3,14}$"
            title="Insira sua senha"
            min={8}
          />
        </AuthenticationContainer>

        <ButtonContainer>
          <button type="submit">Inscrever-se</button>
        </ButtonContainer>

        <LoginContainer>
          <p>Já tem uma conta?</p>
          <button onClick={() => navigate('/')}>Entrar</button>
        </LoginContainer>
      </SignUpContainer>
    </Container>
  )
}
