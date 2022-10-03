import { api } from './api'
import { queryClient } from './queryClient'

export const handlePrefetchTask = async (taskId: string) => {
  return await queryClient.prefetchQuery(
    ['task', taskId],
    async () => {
      const response = await api.get(`task/${taskId}`)

      console.log(response.data)

      return await response.data
    },
    {
      staleTime: 1000 * 60 * 10 // 10 minutes
    }
  )
}
