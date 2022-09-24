import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { NewNotePage } from '../pages/NewNotePage'
import { SignUpPage } from '../pages/SignUpPage'

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/criar-nota" element={<NewNotePage />} />
      </Routes>
    </BrowserRouter>
  )
}
