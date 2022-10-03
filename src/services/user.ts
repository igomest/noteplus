import { toast } from 'react-toastify'
import { api } from './api'
import { queryClient } from './queryClient'

type UserTypes = {
  form?: {
    [key: string]: string | number
  }
  clear: () => void
  navigate: (url: string) => void
  setIsLoading: (prevState: boolean) => void
}

type LogoutTypes = {
  navigate: (url: string) => void
}

export const login = async ({
  form,
  clear,
  navigate,
  setIsLoading
}: UserTypes) => {
  try {
    setIsLoading(true)
    const response = await api.post('/user/login', form)
    api.defaults.headers.common.Authorization = response.data.token
    localStorage.setItem('token', response.data.token)
    clear()
    setIsLoading(false)
    navigate('/home')
    console.log(response.data)

    return response
  } catch (err) {
    setIsLoading(false)
    toast.error('🦄 Email ou senha incorreta!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }
}

export const signUp = async ({
  form,
  clear,
  navigate,
  setIsLoading
}: UserTypes) => {
  try {
    setIsLoading(true)
    const response = await api.post('/user/register', form)
    localStorage.setItem('token', response.data.token)
    clear()
    navigate('/home')
    console.log(response.data)

    return response
  } catch (err) {
    setIsLoading(false)
    toast.error('🦄 Ocorreu um erro, tente novamente mais tarde!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }
}

export const logout = async ({ navigate }: LogoutTypes) => {
  try {
    const response = await api.post('/user/logout')
    localStorage.removeItem('token')
    navigate('/')
    queryClient.removeQueries()
    console.log(response.data)

    return response
  } catch (err) {
    console.log(err)
  }
}
