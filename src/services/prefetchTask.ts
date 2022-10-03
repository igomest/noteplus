import { api } from './api'
import { queryClient } from './queryClient'

const token = localStorage.getItem('token')

export const handlePrefetchTask = async (taskId: string) => {
  return await queryClient.prefetchQuery(
    ['task', taskId],
    async () => {
      const response = await api.get(`task/${taskId}`)

      if (token) {
        api.defaults.headers.common.Authorization = token
      }

      console.log(response.data)

      return await response.data
    },
    {
      staleTime: 1000 * 60 * 10 // 10 minutes
    }
  )
}
