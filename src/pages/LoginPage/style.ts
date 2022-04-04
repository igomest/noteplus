import styled from 'styled-components'

export const Container = styled.div`
   border: 1px solid black;
   display: flex;
   width: 100vw;
   height: 100vh;
   justify-content: center;
   align-items: center;
`

export const LoginContainer = styled.div`
   background: var(--white);
   border-radius: 10px;
   width: 27vw;
   height: 44vh;
   display: flex;
   justify-content: space-around;
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

export const InputContainer = styled.div`
   width: 90%;
   height: 28%;
   display: flex;
   justify-content: space-between;
   flex-direction: column;

   input {
       border-radius: 10px;
       border: none;
       border-color: var(--silver);
       width: 100%;
       height: 3rem;
       background: var(--background);
       padding: 10px;
   }
`

export const ButtonContainer = styled.div`
   width: 20%;
   height: 10%;
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

export const SingUpContainer = styled.div`
   width: 50%;
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