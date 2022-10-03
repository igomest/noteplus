import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import { queryClient } from './services/queryClient'
import { GlobalStyle } from './styles/global'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>

      <ReactQueryDevtools />
      <ToastContainer />
    </QueryClientProvider>
  )
}
