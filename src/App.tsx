import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import { GlobalStyle } from './styles/global'

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  )
}
