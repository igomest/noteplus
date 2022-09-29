import { useQuery } from 'react-query'
import { api } from '../services/api'

type Task = {
  _id: string
  description: string
  createdAt: string
}

export const useTasks = () => {
  return useQuery(
    'task',
    async () => {
      const { data } = await api.get('/task')

      const tasks = data?.data.map((task: Task) => {
        return {
          id: task._id,
          description: task.description,
          createdAt: new Date(task.createdAt).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          })
        }
      })
      return tasks
    },
    {
      staleTime: 1000 * 60 * 10 // 10 minutes
    }
  )
}
