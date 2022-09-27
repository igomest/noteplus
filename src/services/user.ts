import { goToHomePage } from '../routes/coordinator'
import { api } from './api'

type UserTypes = {
  body: string | number
  clear: () => void
  history: Array<string>
}

export const login = ({ body, clear, history }: UserTypes) => {
  api
    .post('/user/login', body)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      clear()
      goToHomePage(history)
    })
    .catch((err) => {
      alert(err)
    })
}

export const signUp = ({ body, clear, history }: UserTypes) => {
  api
    .post('/user/login', body)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      clear()
      goToHomePage(history)
    })
    .catch((err) => {
      alert(err)
    })
}
