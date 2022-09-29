import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import { GlobalStyle } from './styles/global'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </QueryClientProvider>
  )
}
