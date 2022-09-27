import { useEffect, useState } from 'react'
import { api } from '../services/api'

type DataTypes = {
  initialData: null
  url: string
}

export const useRequestData = ({ initialData, url }: DataTypes) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    api
      .get(url, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`
        }
      })
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [url])

  return data
}
