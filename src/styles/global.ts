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

`
