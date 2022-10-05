import { ChangeEvent, useState } from 'react'

export type UseFormTypes = {
  initialState: {
    [key: string]: string | number
  }
}

export const useForm = ({ initialState }: UseFormTypes) => {
  const [form, setForm] = useState(initialState)

  const handleInputChange = (event: any) => {
    const { value, name } = event.target
    setForm({ ...form, [name]: value })
  }

  const clear = () => {
    setForm(initialState)
  }

  return { form, handleInputChange, clear }
}
