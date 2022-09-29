import { api } from './api'
import { queryClient } from './queryClient'

export const handlePrefetchTask = async (taskId: string) => {
  await queryClient.prefetchQuery(
    ['task', taskId],
    async () => {
      const response = await api.get(`task/${taskId}`)

      return response.data
    },
    {
      staleTime: 1000 * 60 * 10 // 10 minutes
    }
  )
}
