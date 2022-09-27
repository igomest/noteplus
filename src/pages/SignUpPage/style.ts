import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`

export const SignUpContainer = styled.form`
  background: var(--white);
  border-radius: 10px;
  width: 27vw;
  height: 52vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`

export const Logo = styled.div`
  width: 37%;
  height: 14%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  h2 {
    font-family: 'Jost', sans-serif;
    font-weight: 400;
  }
`

export const Title = styled.div`
  width: 50%;
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h2 {
    font-family: 'Jost', sans-serif;
  }

  p {
    color: var(--silver);
  }
`

export const UserNameContainer = styled.div`
  width: 90%;
  height: 16%;
  display: flex;
  justify-content: space-between;

  input {
    border-radius: 10px;
    border: none;
    border-color: var(--silver);
    width: 80%;
    height: 3rem;
    background: var(--background);
    padding: 10px;
    margin: 10px;
  }
`

export const AuthenticationContainer = styled.div`
  width: 90%;
  height: 28%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: -10px;

  input {
    border-radius: 10px;
    border: none;
    border-color: var(--silver);
    width: 97%;
    height: 3rem;
    background: var(--background);
    padding: 10px;
    margin: 10px;
  }
`

export const ButtonContainer = styled.div`
  width: 20%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    border: none;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background: var(--black);
    color: var(--white);

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const LoginContainer = styled.div`
  width: 38%;
  height: 10%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  p {
    color: var(--silver);
  }

  button {
    border: none;
    background: var(--white);
    color: var(--black);
    font-weight: bold;
    font-size: 1rem;

    :hover {
      color: var(--blue);
    }
  }
`
