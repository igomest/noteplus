import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   :root {
    --white: #fff;
    --black: #1f1c2f;
    --silver: #848486;
    --background: #ECF1F9;
    --blue: #68E1FD;
   }
   
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html { //Adaptar tamanho da fonte para diferentes tamanhos de tela
        @media (max-width: 1080px) {
            font-size: 93.75% //15px
        }

        @media (max-width: 720px) {
            font-size: 87.5% // 14px
        }
    }

    body {
      background: var(--background);
      -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    } 

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }
    
    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 550px;
        height: 40%;
        background: var(--white);
        padding: 1.5rem;
        position: relative;
        border-radius: 10px;
        border: 1px solid rgba(0,0,0,.2);
        box-shadow: 0 0.25rem 0.5rem rgb(0 0 0 / 50%);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .toolbar {
      height: 10rem;
    }
`
