import styled from 'styled-components'


export const Container = styled.div`
   display: flex;
   width: 97%;
   margin-left: 2rem;
   height: 12vh;
   align-items: center;
`

export const HeaderContainer = styled.header`
    display: flex;
    width: 98%;
    height: 8vh;
    background: var(--white);
    border-radius: 10px;
    margin-top: 24px;

    button {
        display: flex;
        border: none;
        background: var(--white);
        align-items: center;
        padding: 20px;
        border-radius: 10px;

        img {
          width: 1rem;
          height: 1rem;
        }

        p {
            margin-left: 6px;
            font-size: 0.92rem;
            color: var(--silver);
        }
    }
`