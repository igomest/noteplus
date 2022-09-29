import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import { queryClient } from './services/queryClient'
import { GlobalStyle } from './styles/global'

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
