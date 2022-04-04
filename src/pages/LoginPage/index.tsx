import { ButtonContainer, Container, InputContainer, LoginContainer, Logo, SingUpContainer, Title } from "./style"
import logoImg from "../../assets/logo.svg"

export const LoginPage = () => {
    return (
        <Container>
            <LoginContainer>
                <Logo>
                    <img src={logoImg} alt="Logo" />
                    <h2>DailyMirror</h2>
                </Logo>

                <Title>
                    <h2>Entrar</h2>
                    <p>Faça login para ficar conectado.</p>
                </Title>

                <InputContainer>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                </InputContainer>

                <ButtonContainer>
                    <button>Entrar</button>
                </ButtonContainer>

                <SingUpContainer>
                    <p>Não tem uma conta?</p>
                    <button>
                        Inscreva-se!
                    </button>
                </SingUpContainer>
            </LoginContainer>
        </Container>
    )
}