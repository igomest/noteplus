import { api } from './api'

type UserTypes = {
  form?: {
    name: string
    password: string
    email: string
    age?: number
  }
  clear: () => void
  navigate: (url: string) => void
}

type LogoutTypes = {
  navigate: (url: string) => void
}

export const login = async ({ form, clear, navigate }: UserTypes) => {
  try {
    const response = await api.post('/user/login', form)
    localStorage.setItem('token', response.data.token)
    clear()
    navigate('/home')
    console.log(response.data)

    return response
  } catch (err) {
    console.log(err)
  }
}

export const signUp = async ({ form, clear, navigate }: UserTypes) => {
  try {
    const response = await api.post('/user/register', form)
    localStorage.setItem('token', response.data.token)
    clear()
    navigate('/home')
    console.log(response.data)

    return response
  } catch (err) {
    console.log(err)
  }
}

export const logout = async ({ navigate }: LogoutTypes) => {
  try {
    const response = await api.post('/user/logout')
    localStorage.removeItem('token')
    navigate('/')
    console.log(response.data)

    return response
  } catch (err) {
    console.log(err)
  }
}
