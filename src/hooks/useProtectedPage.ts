import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useProtectedPage = () => {
  const navigate = useNavigate()

  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/')
    }
  }, [navigate])
}
